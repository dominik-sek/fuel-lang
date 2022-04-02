// Generated from ./src/parser/Fire.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FireParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FireVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FireParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.relationStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationStmt?: (ctx: RelationStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.assignStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.printStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.json`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson?: (ctx: JsonContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.jsonObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonObject?: (ctx: JsonObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.variableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableName?: (ctx: VariableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.keyValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValuePair?: (ctx: KeyValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.primitiveEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveEntity?: (ctx: PrimitiveEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.arr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArr?: (ctx: ArrContext) => Result;

	/**
	 * Visit a parse tree produced by `FireParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;
}

