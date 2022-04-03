import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {ANTLRErrorListener} from "antlr4ts";
import { CompilationUnitContext, StmtContext, RelationStmtContext, AssignStmtContext, PrintStmtContext, JsonContext, JsonObjectContext, VariableNameContext, KeyValuePairContext, PrimitiveEntityContext, ValueContext, ArrContext, BoolContext } from "./FireParser";
import { FireVisitor } from "./FireVisitor";

export default class Visitor implements FireVisitor<any> {
    visitCompilationUnit?: (ctx: CompilationUnitContext) => any;
    visitStmt?: (ctx: StmtContext) => any;
    visitRelationStmt?: (ctx: RelationStmtContext) => any;
    visitAssignStmt?: (ctx: AssignStmtContext) => any;
    visitPrintStmt?: (ctx: PrintStmtContext) => any;
    visitJson?: (ctx: JsonContext) => any;
    visitJsonObject?: (ctx: JsonObjectContext) => any;
    visitVariableName?: (ctx: VariableNameContext) => any;
    visitKeyValuePair?: (ctx: KeyValuePairContext) => any;
    visitPrimitiveEntity?: (ctx: PrimitiveEntityContext) => any;
    visitValue?: (ctx: ValueContext) => any;
    visitArr?: (ctx: ArrContext) => any;
    visitBool?: (ctx: BoolContext) => any;
    visit(tree: ParseTree) {
        return tree.accept(this);
    }
    visitTerminal(node: TerminalNode) {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode) {
        throw new Error("Method not implemented.");
    }
    objects = {};
    relations = {};
    arrays = {};

    printables = [];


    visitChildren(ctx) {
        if (!ctx) {
            return;
        }
        if (ctx.children) {
            
            
            return ctx.children.map(child => {
                if (child.children && child.children.length !== 0) {

                    if (child.constructor.name === 'AssignStmtContext') {
                        let prefix = child.children[0].text;
                        let objName = child.children[1].text;
                        let objValues = child.children[3].text;

                        if (child.children[0].constructor.name === 'PrimitiveEntityContext') {

                            let obj = {
                                name: objName,
                                type: prefix,
                                values: JSON.parse(objValues)
                            }
                            this.objects[objName] = obj;
                        }

                        if (child.children[3].constructor.name === 'ArrContext') {
                            let arrValues = child.children[3].text.slice(1, -1).split(',');

                            let arr = {
                                name: objName,
                                type: "array",
                                values: arrValues.map(value => {
                                    if (this.objects[value]) {
                                        return this.objects[value].values;
                                    }
                                    if (this.arrays[value]) {
                                        return this.arrays[value].values;
                                    }
                                    if (this.relations[value]) {
                                        return this.relations[value].values;
                                    }
                                    return value;
                                })
                            }
                            this.arrays[objName] = arr;
                        }

                    }
                    if (child.constructor.name === 'RelationStmtContext') {
                        let prefix = child.children[0].text;
                        let relationENT1 = child.children[1].text;
                        let relationType = child.children[2].text;
                        let relationENT2 = child.children[3].text;
                        let relationName = child.children[5].text;
                        let relationValue = child.children[7].text;

                        let relation = {
                            name: relationName,
                            type: prefix,
                            entity1: relationENT1,
                            entity2: relationENT2,
                            values: JSON.parse(relationValue)
                        }

                        this.relations[relationName] = relation;
                    }
                    if (child.constructor.name === 'PrintStmtContext') {
                        let printValue = child.children[1].text;

                        if (this.objects[printValue]) {
                            this.setPrintables(this.objects[printValue]);
                        }
                        if (this.relations[printValue]) {
                            this.setPrintables(this.relations[printValue]);
                        }
                        if (this.arrays[printValue]) {
                            this.setPrintables(this.arrays[printValue]);
                        }

                    }

                    return child.accept(this);
                } else {
                    return child.text;
                }
            });
        }

    }
    getObjects() {
        return this.objects;
    }
    getRelations() {
        return this.relations;
    }
    getArrays() {
        return this.arrays;
    }
    getPrintables(){
        return this.printables;
    }
    setPrintables(printable){
        this.printables.push(printable);
    }
}