// Generated from ./src/parser/Fire.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FireListener } from "./FireListener";
import { FireVisitor } from "./FireVisitor";


export class FireParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly LET = 17;
	public static readonly PRINT = 18;
	public static readonly INSIDE = 19;
	public static readonly NUMBER = 20;
	public static readonly STRING = 21;
	public static readonly IDENTIFIER = 22;
	public static readonly WS = 23;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_relationStmt = 2;
	public static readonly RULE_assignStmt = 3;
	public static readonly RULE_printStmt = 4;
	public static readonly RULE_json = 5;
	public static readonly RULE_jsonObject = 6;
	public static readonly RULE_variableName = 7;
	public static readonly RULE_keyValuePair = 8;
	public static readonly RULE_primitiveEntity = 9;
	public static readonly RULE_value = 10;
	public static readonly RULE_arr = 11;
	public static readonly RULE_bool = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "stmt", "relationStmt", "assignStmt", "printStmt", 
		"json", "jsonObject", "variableName", "keyValuePair", "primitiveEntity", 
		"value", "arr", "bool",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'REL'", "'=>'", "'as'", "'='", "'{'", "','", "'}'", "':'", 
		"'ENT'", "'ACT'", "'EVT'", "'true'", "'false'", "'null'", "'['", "']'", 
		"'let'", "'print'", "'inside'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "LET", "PRINT", "INSIDE", "NUMBER", "STRING", 
		"IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FireParser._LITERAL_NAMES, FireParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FireParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Fire.g4"; }

	// @Override
	public get ruleNames(): string[] { return FireParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FireParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FireParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FireParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FireParser.T__0) | (1 << FireParser.T__8) | (1 << FireParser.T__9) | (1 << FireParser.T__10) | (1 << FireParser.LET) | (1 << FireParser.PRINT))) !== 0)) {
				{
				{
				this.state = 26;
				this.stmt();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
			this.match(FireParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FireParser.RULE_stmt);
		try {
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.assignStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.printStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 36;
				this.relationStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationStmt(): RelationStmtContext {
		let _localctx: RelationStmtContext = new RelationStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FireParser.RULE_relationStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(FireParser.T__0);
			this.state = 40;
			this.variableName();
			this.state = 41;
			this.match(FireParser.T__1);
			this.state = 42;
			this.variableName();
			this.state = 43;
			this.match(FireParser.T__2);
			this.state = 44;
			this.variableName();
			this.state = 45;
			this.match(FireParser.T__3);
			this.state = 46;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStmt(): AssignStmtContext {
		let _localctx: AssignStmtContext = new AssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FireParser.RULE_assignStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FireParser.T__0:
			case FireParser.T__8:
			case FireParser.T__9:
			case FireParser.T__10:
				{
				this.state = 48;
				this.primitiveEntity();
				}
				break;
			case FireParser.LET:
				{
				this.state = 49;
				this.match(FireParser.LET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 52;
			this.variableName();
			this.state = 53;
			this.match(FireParser.T__3);
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 54;
				this.arr();
				}
				break;

			case 2:
				{
				this.state = 55;
				this.value();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printStmt(): PrintStmtContext {
		let _localctx: PrintStmtContext = new PrintStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FireParser.RULE_printStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(FireParser.PRINT);
			this.state = 59;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FireParser.RULE_json);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FireParser.T__4) {
				{
				{
				this.state = 61;
				this.jsonObject();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.match(FireParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsonObject(): JsonObjectContext {
		let _localctx: JsonObjectContext = new JsonObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FireParser.RULE_jsonObject);
		let _la: number;
		try {
			this.state = 83;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				this.match(FireParser.T__4);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FireParser.STRING || _la === FireParser.IDENTIFIER) {
					{
					this.state = 70;
					this.keyValuePair();
					this.state = 75;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FireParser.T__5) {
						{
						{
						this.state = 71;
						this.match(FireParser.T__5);
						this.state = 72;
						this.keyValuePair();
						}
						}
						this.state = 77;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 80;
				this.match(FireParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 81;
				this.match(FireParser.T__4);
				this.state = 82;
				this.match(FireParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableName(): VariableNameContext {
		let _localctx: VariableNameContext = new VariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FireParser.RULE_variableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(FireParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyValuePair(): KeyValuePairContext {
		let _localctx: KeyValuePairContext = new KeyValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FireParser.RULE_keyValuePair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			_la = this._input.LA(1);
			if (!(_la === FireParser.STRING || _la === FireParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 88;
			this.match(FireParser.T__7);
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 89;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 90;
				this.jsonObject();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveEntity(): PrimitiveEntityContext {
		let _localctx: PrimitiveEntityContext = new PrimitiveEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FireParser.RULE_primitiveEntity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FireParser.T__0) | (1 << FireParser.T__8) | (1 << FireParser.T__9) | (1 << FireParser.T__10))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FireParser.RULE_value);
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FireParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.match(FireParser.STRING);
				}
				break;
			case FireParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.match(FireParser.NUMBER);
				}
				break;
			case FireParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 97;
				this.jsonObject();
				}
				break;
			case FireParser.T__14:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 98;
				this.arr();
				}
				break;
			case FireParser.T__11:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 99;
				this.match(FireParser.T__11);
				}
				break;
			case FireParser.T__12:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 100;
				this.match(FireParser.T__12);
				}
				break;
			case FireParser.T__13:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 101;
				this.match(FireParser.T__13);
				}
				break;
			case FireParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 102;
				this.variableName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arr(): ArrContext {
		let _localctx: ArrContext = new ArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FireParser.RULE_arr);
		let _la: number;
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 105;
				this.match(FireParser.T__14);
				this.state = 106;
				this.value();
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FireParser.T__5) {
					{
					{
					this.state = 107;
					this.match(FireParser.T__5);
					this.state = 108;
					this.value();
					}
					}
					this.state = 113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 114;
				this.match(FireParser.T__15);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.match(FireParser.T__14);
				this.state = 117;
				this.match(FireParser.T__15);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FireParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			_la = this._input.LA(1);
			if (!(_la === FireParser.T__11 || _la === FireParser.T__12)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19}\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x05\x03(\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x055" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05;\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x07\x07A\n\x07\f\x07\x0E\x07D\v\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x07\bL\n\b\f\b\x0E\bO\v\b\x05\bQ\n\b\x03\b\x03\b" +
		"\x03\b\x05\bV\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n^\n\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fj\n\f\x03" +
		"\r\x03\r\x03\r\x03\r\x07\rp\n\r\f\r\x0E\rs\v\r\x03\r\x03\r\x03\r\x03\r" +
		"\x05\ry\n\r\x03\x0E\x03\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x02\x05\x03\x02\x17\x18\x04\x02\x03\x03\v\r\x03\x02\x0E\x0F\x02" +
		"\x82\x02\x1F\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x06)\x03\x02\x02\x02" +
		"\b4\x03\x02\x02\x02\n<\x03\x02\x02\x02\fB\x03\x02\x02\x02\x0EU\x03\x02" +
		"\x02\x02\x10W\x03\x02\x02\x02\x12Y\x03\x02\x02\x02\x14_\x03\x02\x02\x02" +
		"\x16i\x03\x02\x02\x02\x18x\x03\x02\x02\x02\x1Az\x03\x02\x02\x02\x1C\x1E" +
		"\x05\x04\x03\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D" +
		"\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!\x1F\x03\x02" +
		"\x02\x02\"#\x07\x02\x02\x03#\x03\x03\x02\x02\x02$(\x05\b\x05\x02%(\x05" +
		"\n\x06\x02&(\x05\x06\x04\x02\'$\x03\x02\x02\x02\'%\x03\x02\x02\x02\'&" +
		"\x03\x02\x02\x02(\x05\x03\x02\x02\x02)*\x07\x03\x02\x02*+\x05\x10\t\x02" +
		"+,\x07\x04\x02\x02,-\x05\x10\t\x02-.\x07\x05\x02\x02./\x05\x10\t\x02/" +
		"0\x07\x06\x02\x0201\x05\x16\f\x021\x07\x03\x02\x02\x0225\x05\x14\v\x02" +
		"35\x07\x13\x02\x0242\x03\x02\x02\x0243\x03\x02\x02\x0256\x03\x02\x02\x02" +
		"67\x05\x10\t\x027:\x07\x06\x02\x028;\x05\x18\r\x029;\x05\x16\f\x02:8\x03" +
		"\x02\x02\x02:9\x03\x02\x02\x02;\t\x03\x02\x02\x02<=\x07\x14\x02\x02=>" +
		"\x05\x16\f\x02>\v\x03\x02\x02\x02?A\x05\x0E\b\x02@?\x03\x02\x02\x02AD" +
		"\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02" +
		"DB\x03\x02\x02\x02EF\x07\x02\x02\x03F\r\x03\x02\x02\x02GP\x07\x07\x02" +
		"\x02HM\x05\x12\n\x02IJ\x07\b\x02\x02JL\x05\x12\n\x02KI\x03\x02\x02\x02" +
		"LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NQ\x03\x02\x02\x02" +
		"OM\x03\x02\x02\x02PH\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x03\x02\x02\x02" +
		"RV\x07\t\x02\x02ST\x07\x07\x02\x02TV\x07\t\x02\x02UG\x03\x02\x02\x02U" +
		"S\x03\x02\x02\x02V\x0F\x03\x02\x02\x02WX\x07\x18\x02\x02X\x11\x03\x02" +
		"\x02\x02YZ\t\x02\x02\x02Z]\x07\n\x02\x02[^\x05\x16\f\x02\\^\x05\x0E\b" +
		"\x02][\x03\x02\x02\x02]\\\x03\x02\x02\x02^\x13\x03\x02\x02\x02_`\t\x03" +
		"\x02\x02`\x15\x03\x02\x02\x02aj\x07\x17\x02\x02bj\x07\x16\x02\x02cj\x05" +
		"\x0E\b\x02dj\x05\x18\r\x02ej\x07\x0E\x02\x02fj\x07\x0F\x02\x02gj\x07\x10" +
		"\x02\x02hj\x05\x10\t\x02ia\x03\x02\x02\x02ib\x03\x02\x02\x02ic\x03\x02" +
		"\x02\x02id\x03\x02\x02\x02ie\x03\x02\x02\x02if\x03\x02\x02\x02ig\x03\x02" +
		"\x02\x02ih\x03\x02\x02\x02j\x17\x03\x02\x02\x02kl\x07\x11\x02\x02lq\x05" +
		"\x16\f\x02mn\x07\b\x02\x02np\x05\x16\f\x02om\x03\x02\x02\x02ps\x03\x02" +
		"\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02sq\x03\x02" +
		"\x02\x02tu\x07\x12\x02\x02uy\x03\x02\x02\x02vw\x07\x11\x02\x02wy\x07\x12" +
		"\x02\x02xk\x03\x02\x02\x02xv\x03\x02\x02\x02y\x19\x03\x02\x02\x02z{\t" +
		"\x04\x02\x02{\x1B\x03\x02\x02\x02\x0E\x1F\'4:BMPU]iqx";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FireParser.__ATN) {
			FireParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FireParser._serializedATN));
		}

		return FireParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(FireParser.EOF, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public assignStmt(): AssignStmtContext | undefined {
		return this.tryGetRuleContext(0, AssignStmtContext);
	}
	public printStmt(): PrintStmtContext | undefined {
		return this.tryGetRuleContext(0, PrintStmtContext);
	}
	public relationStmt(): RelationStmtContext | undefined {
		return this.tryGetRuleContext(0, RelationStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_stmt; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationStmtContext extends ParserRuleContext {
	public variableName(): VariableNameContext[];
	public variableName(i: number): VariableNameContext;
	public variableName(i?: number): VariableNameContext | VariableNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableNameContext);
		} else {
			return this.getRuleContext(i, VariableNameContext);
		}
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_relationStmt; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterRelationStmt) {
			listener.enterRelationStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitRelationStmt) {
			listener.exitRelationStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitRelationStmt) {
			return visitor.visitRelationStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStmtContext extends ParserRuleContext {
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public primitiveEntity(): PrimitiveEntityContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveEntityContext);
	}
	public LET(): TerminalNode | undefined { return this.tryGetToken(FireParser.LET, 0); }
	public arr(): ArrContext | undefined {
		return this.tryGetRuleContext(0, ArrContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_assignStmt; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterAssignStmt) {
			listener.enterAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitAssignStmt) {
			listener.exitAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStmtContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(FireParser.PRINT, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_printStmt; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterPrintStmt) {
			listener.enterPrintStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitPrintStmt) {
			listener.exitPrintStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitPrintStmt) {
			return visitor.visitPrintStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(FireParser.EOF, 0); }
	public jsonObject(): JsonObjectContext[];
	public jsonObject(i: number): JsonObjectContext;
	public jsonObject(i?: number): JsonObjectContext | JsonObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsonObjectContext);
		} else {
			return this.getRuleContext(i, JsonObjectContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_json; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterJson) {
			listener.enterJson(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitJson) {
			listener.exitJson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitJson) {
			return visitor.visitJson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonObjectContext extends ParserRuleContext {
	public keyValuePair(): KeyValuePairContext[];
	public keyValuePair(i: number): KeyValuePairContext;
	public keyValuePair(i?: number): KeyValuePairContext | KeyValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyValuePairContext);
		} else {
			return this.getRuleContext(i, KeyValuePairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_jsonObject; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterJsonObject) {
			listener.enterJsonObject(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitJsonObject) {
			listener.exitJsonObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitJsonObject) {
			return visitor.visitJsonObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FireParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_variableName; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterVariableName) {
			listener.enterVariableName(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitVariableName) {
			listener.exitVariableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitVariableName) {
			return visitor.visitVariableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyValuePairContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FireParser.IDENTIFIER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FireParser.STRING, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public jsonObject(): JsonObjectContext | undefined {
		return this.tryGetRuleContext(0, JsonObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_keyValuePair; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterKeyValuePair) {
			listener.enterKeyValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitKeyValuePair) {
			listener.exitKeyValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitKeyValuePair) {
			return visitor.visitKeyValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveEntityContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_primitiveEntity; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterPrimitiveEntity) {
			listener.enterPrimitiveEntity(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitPrimitiveEntity) {
			listener.exitPrimitiveEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitPrimitiveEntity) {
			return visitor.visitPrimitiveEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FireParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(FireParser.NUMBER, 0); }
	public jsonObject(): JsonObjectContext | undefined {
		return this.tryGetRuleContext(0, JsonObjectContext);
	}
	public arr(): ArrContext | undefined {
		return this.tryGetRuleContext(0, ArrContext);
	}
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_value; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_arr; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterArr) {
			listener.enterArr(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitArr) {
			listener.exitArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitArr) {
			return visitor.visitArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_bool; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


