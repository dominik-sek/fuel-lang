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
			this.state = 35;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				this.assignStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				this.printStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 34;
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
			this.state = 37;
			this.match(FireParser.T__0);
			this.state = 38;
			this.variableName();
			this.state = 39;
			this.match(FireParser.T__1);
			this.state = 40;
			this.variableName();
			this.state = 41;
			this.match(FireParser.T__2);
			this.state = 42;
			this.variableName();
			this.state = 43;
			this.match(FireParser.T__3);
			this.state = 44;
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
			this.state = 48;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FireParser.T__0:
			case FireParser.T__8:
			case FireParser.T__9:
			case FireParser.T__10:
				{
				this.state = 46;
				this.primitiveEntity();
				}
				break;
			case FireParser.LET:
				{
				this.state = 47;
				this.match(FireParser.LET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 50;
			this.variableName();
			this.state = 51;
			this.match(FireParser.T__3);
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 52;
				this.arr();
				}
				break;

			case 2:
				{
				this.state = 53;
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
			this.state = 56;
			this.match(FireParser.PRINT);
			this.state = 57;
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
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FireParser.T__4) {
				{
				{
				this.state = 59;
				this.jsonObject();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
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
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.match(FireParser.T__4);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FireParser.STRING || _la === FireParser.IDENTIFIER) {
					{
					this.state = 68;
					this.keyValuePair();
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FireParser.T__5) {
						{
						{
						this.state = 69;
						this.match(FireParser.T__5);
						this.state = 70;
						this.keyValuePair();
						}
						}
						this.state = 75;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 78;
				this.match(FireParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				this.match(FireParser.T__4);
				this.state = 80;
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
			this.state = 83;
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
			this.state = 85;
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
			this.state = 86;
			this.match(FireParser.T__7);
			this.state = 89;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 87;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 88;
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
			this.state = 91;
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
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FireParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 93;
				this.match(FireParser.STRING);
				}
				break;
			case FireParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
				this.match(FireParser.NUMBER);
				}
				break;
			case FireParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 95;
				this.jsonObject();
				}
				break;
			case FireParser.T__14:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 96;
				this.arr();
				}
				break;
			case FireParser.T__11:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 97;
				this.match(FireParser.T__11);
				}
				break;
			case FireParser.T__12:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 98;
				this.match(FireParser.T__12);
				}
				break;
			case FireParser.T__13:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 99;
				this.match(FireParser.T__13);
				}
				break;
			case FireParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 100;
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
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.match(FireParser.T__14);
				this.state = 104;
				this.value();
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FireParser.T__5) {
					{
					{
					this.state = 105;
					this.match(FireParser.T__5);
					this.state = 106;
					this.value();
					}
					}
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 112;
				this.match(FireParser.T__15);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.match(FireParser.T__14);
				this.state = 115;
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
			this.state = 118;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19{\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x03\x03" +
		"\x03\x03\x03\x05\x03&\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x053\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x059\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x07" +
		"\x07?\n\x07\f\x07\x0E\x07B\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x07\bJ\n\b\f\b\x0E\bM\v\b\x05\bO\n\b\x03\b\x03\b\x03\b\x05\bT\n\b\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\\\n\n\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fh\n\f\x03\r\x03\r\x03\r\x03\r\x07" +
		"\rn\n\r\f\r\x0E\rq\v\r\x03\r\x03\r\x03\r\x03\r\x05\rw\n\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x05\x03\x02" +
		"\x17\x18\x04\x02\x03\x03\v\r\x03\x02\x0E\x0F\x02\x80\x02\x1F\x03\x02\x02" +
		"\x02\x04%\x03\x02\x02\x02\x06\'\x03\x02\x02\x02\b2\x03\x02\x02\x02\n:" +
		"\x03\x02\x02\x02\f@\x03\x02\x02\x02\x0ES\x03\x02\x02\x02\x10U\x03\x02" +
		"\x02\x02\x12W\x03\x02\x02\x02\x14]\x03\x02\x02\x02\x16g\x03\x02\x02\x02" +
		"\x18v\x03\x02\x02\x02\x1Ax\x03\x02\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D" +
		"\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F" +
		" \x03\x02\x02\x02 \x03\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"&\x05\b\x05" +
		"\x02#&\x05\n\x06\x02$&\x05\x06\x04\x02%\"\x03\x02\x02\x02%#\x03\x02\x02" +
		"\x02%$\x03\x02\x02\x02&\x05\x03\x02\x02\x02\'(\x07\x03\x02\x02()\x05\x10" +
		"\t\x02)*\x07\x04\x02\x02*+\x05\x10\t\x02+,\x07\x05\x02\x02,-\x05\x10\t" +
		"\x02-.\x07\x06\x02\x02./\x05\x16\f\x02/\x07\x03\x02\x02\x0203\x05\x14" +
		"\v\x0213\x07\x13\x02\x0220\x03\x02\x02\x0221\x03\x02\x02\x0234\x03\x02" +
		"\x02\x0245\x05\x10\t\x0258\x07\x06\x02\x0269\x05\x18\r\x0279\x05\x16\f" +
		"\x0286\x03\x02\x02\x0287\x03\x02\x02\x029\t\x03\x02\x02\x02:;\x07\x14" +
		"\x02\x02;<\x05\x16\f\x02<\v\x03\x02\x02\x02=?\x05\x0E\b\x02>=\x03\x02" +
		"\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02" +
		"\x02\x02B@\x03\x02\x02\x02CD\x07\x02\x02\x03D\r\x03\x02\x02\x02EN\x07" +
		"\x07\x02\x02FK\x05\x12\n\x02GH\x07\b\x02\x02HJ\x05\x12\n\x02IG\x03\x02" +
		"\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02LO\x03\x02" +
		"\x02\x02MK\x03\x02\x02\x02NF\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x03\x02" +
		"\x02\x02PT\x07\t\x02\x02QR\x07\x07\x02\x02RT\x07\t\x02\x02SE\x03\x02\x02" +
		"\x02SQ\x03\x02\x02\x02T\x0F\x03\x02\x02\x02UV\x07\x18\x02\x02V\x11\x03" +
		"\x02\x02\x02WX\t\x02\x02\x02X[\x07\n\x02\x02Y\\\x05\x16\f\x02Z\\\x05\x0E" +
		"\b\x02[Y\x03\x02\x02\x02[Z\x03\x02\x02\x02\\\x13\x03\x02\x02\x02]^\t\x03" +
		"\x02\x02^\x15\x03\x02\x02\x02_h\x07\x17\x02\x02`h\x07\x16\x02\x02ah\x05" +
		"\x0E\b\x02bh\x05\x18\r\x02ch\x07\x0E\x02\x02dh\x07\x0F\x02\x02eh\x07\x10" +
		"\x02\x02fh\x05\x10\t\x02g_\x03\x02\x02\x02g`\x03\x02\x02\x02ga\x03\x02" +
		"\x02\x02gb\x03\x02\x02\x02gc\x03\x02\x02\x02gd\x03\x02\x02\x02ge\x03\x02" +
		"\x02\x02gf\x03\x02\x02\x02h\x17\x03\x02\x02\x02ij\x07\x11\x02\x02jo\x05" +
		"\x16\f\x02kl\x07\b\x02\x02ln\x05\x16\f\x02mk\x03\x02\x02\x02nq\x03\x02" +
		"\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pr\x03\x02\x02\x02qo\x03\x02" +
		"\x02\x02rs\x07\x12\x02\x02sw\x03\x02\x02\x02tu\x07\x11\x02\x02uw\x07\x12" +
		"\x02\x02vi\x03\x02\x02\x02vt\x03\x02\x02\x02w\x19\x03\x02\x02\x02xy\t" +
		"\x04\x02\x02y\x1B\x03\x02\x02\x02\x0E\x1F%28@KNS[gov";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FireParser.__ATN) {
			FireParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FireParser._serializedATN));
		}

		return FireParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
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


