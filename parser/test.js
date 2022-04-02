import FireLexer from './FireLexer.js';
import FireParser from './FireParser.js';
import FireListener from './FireListener.js';
import antlr4 from 'antlr4';
import { ThrowError } from './ThrowError.js';
import * as fs from 'fs';
import { parse } from 'path';


const inputFile = () =>{
    let input = fs.readFileSync('./test1.fuel', 'utf8');
    return input;
}
const parseInput = (inputFromEditor) =>{
    let input = inputFile();
    var chars = new antlr4.InputStream(input);
    var lexer = new FireLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new FireParser(tokens);
    // var errorStrategy = new antlr4.error.DefaultErrorStrategy();
    parser.removeErrorListeners();
    parser.addErrorListener(new ThrowError());
    parser.buildParseTrees = true;
    var tree = parser.compilationUnit();

    // console.log(tree.toStringTree(parser.ruleNames));

class Visitor {
   objects = {};
   relations = {};
   arrays = {};

    visitChildren(ctx) {
      
      // if(ctx.constructor.name === 'CompilationUnitContext' && !ctx.children){
      //   let line = ctx.start.line;
      //   let column = ctx.start.column;
      //   console.log(`Error at line ${line} column ${column} : ${message}`);
      //   return;
      // }


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

              if(child.children[3].constructor.name === 'ArrContext'){
                let arrValues = child.children[3].getText().slice(1, -1).split(',');
                console.log(arrValues);
                let arr = {
                  name: objName,
                  type: "array",
                  values: arrValues
                }
                this.arrays[objName] = arr;
            }

            }
            if(child.constructor.name === 'RelationStmtContext'){
              let primitiveType = child.children[0].getText();
              let relationENT1 = child.children[1].getText();
              let relationType = child.children[2].getText();
              let relationENT2 = child.children[3].getText();
              let relationName = child.children[5].getText();
              let relationValue = child.children[7].getText();

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
              if(this.arrays[printValue]){
                console.log(this.arrays[printValue]);
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

}

parseInput();


export default parseInput;
