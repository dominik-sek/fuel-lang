// Generated from ./src/parser/Fire.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./FireParser";
import { StmtContext } from "./FireParser";
import { RelationStmtContext } from "./FireParser";
import { AssignStmtContext } from "./FireParser";
import { PrintStmtContext } from "./FireParser";
import { JsonContext } from "./FireParser";
import { JsonObjectContext } from "./FireParser";
import { VariableNameContext } from "./FireParser";
import { KeyValuePairContext } from "./FireParser";
import { PrimitiveEntityContext } from "./FireParser";
import { ValueContext } from "./FireParser";
import { ArrContext } from "./FireParser";
import { BoolContext } from "./FireParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FireParser`.
 */
export interface FireListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FireParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.relationStmt`.
	 * @param ctx the parse tree
	 */
	enterRelationStmt?: (ctx: RelationStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.relationStmt`.
	 * @param ctx the parse tree
	 */
	exitRelationStmt?: (ctx: RelationStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.printStmt`.
	 * @param ctx the parse tree
	 */
	enterPrintStmt?: (ctx: PrintStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.printStmt`.
	 * @param ctx the parse tree
	 */
	exitPrintStmt?: (ctx: PrintStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.jsonObject`.
	 * @param ctx the parse tree
	 */
	enterJsonObject?: (ctx: JsonObjectContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.jsonObject`.
	 * @param ctx the parse tree
	 */
	exitJsonObject?: (ctx: JsonObjectContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.variableName`.
	 * @param ctx the parse tree
	 */
	enterVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.variableName`.
	 * @param ctx the parse tree
	 */
	exitVariableName?: (ctx: VariableNameContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.keyValuePair`.
	 * @param ctx the parse tree
	 */
	enterKeyValuePair?: (ctx: KeyValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.keyValuePair`.
	 * @param ctx the parse tree
	 */
	exitKeyValuePair?: (ctx: KeyValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.primitiveEntity`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveEntity?: (ctx: PrimitiveEntityContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.primitiveEntity`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveEntity?: (ctx: PrimitiveEntityContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.arr`.
	 * @param ctx the parse tree
	 */
	enterArr?: (ctx: ArrContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.arr`.
	 * @param ctx the parse tree
	 */
	exitArr?: (ctx: ArrContext) => void;

	/**
	 * Enter a parse tree produced by `FireParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `FireParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;
}

