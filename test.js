import FireLexer from './FireLexer.js';
import FireParser from './FireParser.js';
import FireListener from './FireListener.js';
import antlr4 from 'antlr4';
import * as fs from 'fs';
import { parse } from 'path';


const inputFile = () =>{
    let input = fs.readFileSync('./test.fuel', 'utf8');
    return input;
}
    var chars = new antlr4.InputStream(inputFile());
    var lexer = new FireLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new FireParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.compilationUnit();
    // console.log(tree.toStringTree(parser.ruleNames));

class Visitor {
   objects = {};
   relations = {};

    visitChildren(ctx) {

      if (!ctx) {
        return;
      }
      if (ctx.children) {

        return ctx.children.map(child => {

          if (child.children && child.children.length !== 0) {

            if(child.constructor.name === 'AssignStmtContext') {
              let primitiveType = child.children[0].getText();
              let objName = child.children[1].getText();
              let objValues = child.children[3].getText();
              if(child.children[0].constructor.name === 'PrimitiveEntityContext'){
                let obj = {
                  name: objName,
                  type: primitiveType,
                  values: JSON.parse(objValues)
                }

                this.objects[objName] = obj;
              }
            }
            if(child.constructor.name === 'RelationStmtContext'){
              let primitiveType = child.children[0].getText();
              let relationENT1 = child.children[1].getText();
              let relationType = child.children[2].getText();
              let relationENT2 = child.children[3].getText();
              let relationName = child.children[5].getText();
              let relationValue = child.children[7].getText();

              console.log(child.children[0].getText());
              let relation = {
                name: relationName,
                type: primitiveType,
                entity1: relationENT1,
                entity2: relationENT2,
                values: JSON.parse(relationValue)

              }

              this.relations[relationName] = relation;

          }
            if(child.constructor.name === 'PrintStmtContext'){
              let printValue = child.children[1].getText();

              if(this.objects[printValue]){
                console.log(this.objects[printValue]);
              }

              if(this.relations[printValue]){
                console.log(this.relations[printValue]);
              }
              
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


