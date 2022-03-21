import FireLexer from './FireLexer.js';
import FireParser from './FireParser.js';
import FireListener from './FireListener.js';
import antlr4 from 'antlr4';

    var input = `
    let ENT-ZAKLAD_0001 = {
        nazwa_podmiotu: "Zaklad paliwowy Euro-paliwo",
        czas: "20-12-2022 15:30:02",
        lokalizacja_podmiotu: "ul. Warszawska 15A, 42-200 Czestochowa",
        id_profilu : ENT-PROFIL_0001,
        id_kontekstu: ENT-CONTEXT_0001,
        stan: "aktywny"
      }
    let ENT-SENSOR_0001 = {
        nazwa_podmiotu: "Sensor paliwa",
        czas: "20-12-2022 15:30:02",
        lokalizacja_podmiotu: "ul. Warszawska 15A, 42-200 Czestochowa",
        id_profilu : ENT-PROFIL_0001,
        id_kontekstu: ENT-CONTEXT_0001,
        stan: "aktywny"
    }
    let ENT-JEDN_ALARM_0001 = {
        nazwa_podmiotu: "Jednostka alarmowa",
        czas: "20-12-2022 15:30:02",
        lokalizacja_podmiotu: "ul. Warszawska 15A, 42-200 Czestochowa",
        id_profilu : ENT-PROFIL_0001,
        id_kontekstu: ENT-CONTEXT_0001,
        stan: "aktywny"
    }

    let entities = [ENT-ZAKLAD_0001, ENT-SENSOR_0001, ENT-JEDN_ALARM_0001]
    print ENT-ZAKLAD_0001
    print ENT-SENSOR_0001

     `;

    var chars = new antlr4.InputStream(input);
    var lexer = new FireLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new FireParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.compilationUnit();



class Visitor {
   obj = {};

    visitChildren(ctx) {

      if (!ctx) {
        return;
      }
      if (ctx.children) {

        return ctx.children.map(child => {

          if (child.children && child.children.length !== 0) {

            if(child.constructor.name === 'AssignStmtContext') {
              let objName = child.children[1].getText();
              let objValues = child.children[3].getText();
              this.obj[objName] = objValues;   
            }
            
            if(child.constructor.name === 'PrintStmtContext'){
                let objName = child.children[1].getText();
                console.log(`${objName} = ${this.obj[objName]}`);
              }

            return child.accept(this);
          } else {
            return child.getText();
          }
        });
      }

    }
}
tree.accept(new Visitor());


// console.log(tree.toStringTree(parser.ruleNames));