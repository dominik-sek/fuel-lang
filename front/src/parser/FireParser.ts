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
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly LET = 25;
	public static readonly PRINT = 26;
	public static readonly INSIDE = 27;
	public static readonly NUMBER = 28;
	public static readonly STRING = 29;
	public static readonly IDENTIFIER = 30;
	public static readonly WS = 31;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_relationStmt = 2;
	public static readonly RULE_assignStmt = 3;
	public static readonly RULE_printStmt = 4;
	public static readonly RULE_ifThenDoStmt = 5;
	public static readonly RULE_json = 6;
	public static readonly RULE_jsonObject = 7;
	public static readonly RULE_objectChildReference = 8;
	public static readonly RULE_variableName = 9;
	public static readonly RULE_keyValuePair = 10;
	public static readonly RULE_valueOperators = 11;
	public static readonly RULE_operatorNumberPair = 12;
	public static readonly RULE_primitiveEntity = 13;
	public static readonly RULE_value = 14;
	public static readonly RULE_arr = 15;
	public static readonly RULE_bool = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "stmt", "relationStmt", "assignStmt", "printStmt", 
		"ifThenDoStmt", "json", "jsonObject", "objectChildReference", "variableName", 
		"keyValuePair", "valueOperators", "operatorNumberPair", "primitiveEntity", 
		"value", "arr", "bool",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'REL'", "'=>'", "'as'", "'='", "'IF'", "'DO'", "'{'", "','", 
		"'}'", "'.'", "':'", "'<'", "'<='", "'>'", "'>='", "'=='", "'ENT'", "'ACT'", 
		"'EVT'", "'true'", "'false'", "'null'", "'['", "']'", "'let'", "'print'", 
		"'inside'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "LET", "PRINT", "INSIDE", 
		"NUMBER", "STRING", "IDENTIFIER", "WS",
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
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FireParser.T__0) | (1 << FireParser.T__4) | (1 << FireParser.T__16) | (1 << FireParser.T__17) | (1 << FireParser.T__18) | (1 << FireParser.LET) | (1 << FireParser.PRINT))) !== 0)) {
				{
				{
				this.state = 34;
				this.stmt();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 40;
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
			this.state = 46;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.assignStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.printStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 44;
				this.relationStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 45;
				this.ifThenDoStmt();
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
			this.state = 48;
			this.match(FireParser.T__0);
			this.state = 49;
			this.variableName();
			this.state = 50;
			this.match(FireParser.T__1);
			this.state = 51;
			this.variableName();
			this.state = 52;
			this.match(FireParser.T__2);
			this.state = 53;
			this.variableName();
			this.state = 54;
			this.match(FireParser.T__3);
			this.state = 55;
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
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FireParser.T__0:
			case FireParser.T__16:
			case FireParser.T__17:
			case FireParser.T__18:
				{
				this.state = 57;
				this.primitiveEntity();
				}
				break;
			case FireParser.LET:
				{
				this.state = 58;
				this.match(FireParser.LET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 61;
			this.variableName();
			this.state = 62;
			this.match(FireParser.T__3);
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 63;
				this.arr();
				}
				break;

			case 2:
				{
				this.state = 64;
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
			this.state = 67;
			this.match(FireParser.PRINT);
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 68;
				this.match(FireParser.STRING);
				}
				break;

			case 2:
				{
				this.state = 69;
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
	public ifThenDoStmt(): IfThenDoStmtContext {
		let _localctx: IfThenDoStmtContext = new IfThenDoStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FireParser.RULE_ifThenDoStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(FireParser.T__4);
			this.state = 73;
			this.variableName();
			{
			this.state = 74;
			this.objectChildReference();
			}
			this.state = 75;
			this.operatorNumberPair();
			this.state = 76;
			this.match(FireParser.T__5);
			this.state = 77;
			this.variableName();
			this.state = 78;
			this.objectChildReference();
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
		this.enterRule(_localctx, 12, FireParser.RULE_json);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FireParser.T__6) {
				{
				{
				this.state = 80;
				this.jsonObject();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
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
		this.enterRule(_localctx, 14, FireParser.RULE_jsonObject);
		let _la: number;
		try {
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.match(FireParser.T__6);
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FireParser.STRING || _la === FireParser.IDENTIFIER) {
					{
					this.state = 89;
					this.keyValuePair();
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FireParser.T__7) {
						{
						{
						this.state = 90;
						this.match(FireParser.T__7);
						this.state = 91;
						this.keyValuePair();
						}
						}
						this.state = 96;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 99;
				this.match(FireParser.T__8);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.match(FireParser.T__6);
				this.state = 101;
				this.match(FireParser.T__8);
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
	public objectChildReference(): ObjectChildReferenceContext {
		let _localctx: ObjectChildReferenceContext = new ObjectChildReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FireParser.RULE_objectChildReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(FireParser.T__9);
			this.state = 105;
			this.variableName();
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
		this.enterRule(_localctx, 18, FireParser.RULE_variableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
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
		this.enterRule(_localctx, 20, FireParser.RULE_keyValuePair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
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
			this.state = 110;
			this.match(FireParser.T__10);
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 111;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 112;
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
	public valueOperators(): ValueOperatorsContext {
		let _localctx: ValueOperatorsContext = new ValueOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FireParser.RULE_valueOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FireParser.T__11) | (1 << FireParser.T__12) | (1 << FireParser.T__13) | (1 << FireParser.T__14) | (1 << FireParser.T__15))) !== 0))) {
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
	public operatorNumberPair(): OperatorNumberPairContext {
		let _localctx: OperatorNumberPairContext = new OperatorNumberPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FireParser.RULE_operatorNumberPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.valueOperators();
			this.state = 118;
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
	public primitiveEntity(): PrimitiveEntityContext {
		let _localctx: PrimitiveEntityContext = new PrimitiveEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FireParser.RULE_primitiveEntity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FireParser.T__0) | (1 << FireParser.T__16) | (1 << FireParser.T__17) | (1 << FireParser.T__18))) !== 0))) {
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
		this.enterRule(_localctx, 28, FireParser.RULE_value);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FireParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.match(FireParser.STRING);
				}
				break;
			case FireParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 123;
				this.match(FireParser.NUMBER);
				}
				break;
			case FireParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
				this.jsonObject();
				}
				break;
			case FireParser.T__22:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 125;
				this.arr();
				}
				break;
			case FireParser.T__19:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 126;
				this.match(FireParser.T__19);
				}
				break;
			case FireParser.T__20:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 127;
				this.match(FireParser.T__20);
				}
				break;
			case FireParser.T__21:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 128;
				this.match(FireParser.T__21);
				}
				break;
			case FireParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 129;
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
		this.enterRule(_localctx, 30, FireParser.RULE_arr);
		let _la: number;
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 132;
				this.match(FireParser.T__22);
				this.state = 133;
				this.value();
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FireParser.T__7) {
					{
					{
					this.state = 134;
					this.match(FireParser.T__7);
					this.state = 135;
					this.value();
					}
					}
					this.state = 140;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 141;
				this.match(FireParser.T__23);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 143;
				this.match(FireParser.T__22);
				this.state = 144;
				this.match(FireParser.T__23);
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
		this.enterRule(_localctx, 32, FireParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			_la = this._input.LA(1);
			if (!(_la === FireParser.T__19 || _la === FireParser.T__20)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\x98\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x07\x02&\n\x02\f\x02\x0E\x02)\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x031\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05>\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05D\n\x05\x03\x06\x03\x06\x03\x06\x05\x06" +
		"I\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x07\bT\n\b\f\b\x0E\bW\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x07" +
		"\t_\n\t\f\t\x0E\tb\v\t\x05\td\n\t\x03\t\x03\t\x03\t\x05\ti\n\t\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\ft\n\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\x85\n\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\x8B\n\x11\f\x11\x0E\x11\x8E\v\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\x94\n\x11\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x06\x03\x02" +
		"\x1F \x03\x02\x0E\x12\x04\x02\x03\x03\x13\x15\x03\x02\x16\x17\x02\x9B" +
		"\x02\'\x03\x02\x02\x02\x040\x03\x02\x02\x02\x062\x03\x02\x02\x02\b=\x03" +
		"\x02\x02\x02\nE\x03\x02\x02\x02\fJ\x03\x02\x02\x02\x0EU\x03\x02\x02\x02" +
		"\x10h\x03\x02\x02\x02\x12j\x03\x02\x02\x02\x14m\x03\x02\x02\x02\x16o\x03" +
		"\x02\x02\x02\x18u\x03\x02\x02\x02\x1Aw\x03\x02\x02\x02\x1Cz\x03\x02\x02" +
		"\x02\x1E\x84\x03\x02\x02\x02 \x93\x03\x02\x02\x02\"\x95\x03\x02\x02\x02" +
		"$&\x05\x04\x03\x02%$\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02" +
		"\x02\'(\x03\x02\x02\x02(*\x03\x02\x02\x02)\'\x03\x02\x02\x02*+\x07\x02" +
		"\x02\x03+\x03\x03\x02\x02\x02,1\x05\b\x05\x02-1\x05\n\x06\x02.1\x05\x06" +
		"\x04\x02/1\x05\f\x07\x020,\x03\x02\x02\x020-\x03\x02\x02\x020.\x03\x02" +
		"\x02\x020/\x03\x02\x02\x021\x05\x03\x02\x02\x0223\x07\x03\x02\x0234\x05" +
		"\x14\v\x0245\x07\x04\x02\x0256\x05\x14\v\x0267\x07\x05\x02\x0278\x05\x14" +
		"\v\x0289\x07\x06\x02\x029:\x05\x1E\x10\x02:\x07\x03\x02\x02\x02;>\x05" +
		"\x1C\x0F\x02<>\x07\x1B\x02\x02=;\x03\x02\x02\x02=<\x03\x02\x02\x02>?\x03" +
		"\x02\x02\x02?@\x05\x14\v\x02@C\x07\x06\x02\x02AD\x05 \x11\x02BD\x05\x1E" +
		"\x10\x02CA\x03\x02\x02\x02CB\x03\x02\x02\x02D\t\x03\x02\x02\x02EH\x07" +
		"\x1C\x02\x02FI\x07\x1F\x02\x02GI\x05\x1E\x10\x02HF\x03\x02\x02\x02HG\x03" +
		"\x02\x02\x02I\v\x03\x02\x02\x02JK\x07\x07\x02\x02KL\x05\x14\v\x02LM\x05" +
		"\x12\n\x02MN\x05\x1A\x0E\x02NO\x07\b\x02\x02OP\x05\x14\v\x02PQ\x05\x12" +
		"\n\x02Q\r\x03\x02\x02\x02RT\x05\x10\t\x02SR\x03\x02\x02\x02TW\x03\x02" +
		"\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02" +
		"\x02\x02XY\x07\x02\x02\x03Y\x0F\x03\x02\x02\x02Zc\x07\t\x02\x02[`\x05" +
		"\x16\f\x02\\]\x07\n\x02\x02]_\x05\x16\f\x02^\\\x03\x02\x02\x02_b\x03\x02" +
		"\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02" +
		"\x02\x02c[\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02ei\x07\v" +
		"\x02\x02fg\x07\t\x02\x02gi\x07\v\x02\x02hZ\x03\x02\x02\x02hf\x03\x02\x02" +
		"\x02i\x11\x03\x02\x02\x02jk\x07\f\x02\x02kl\x05\x14\v\x02l\x13\x03\x02" +
		"\x02\x02mn\x07 \x02\x02n\x15\x03\x02\x02\x02op\t\x02\x02\x02ps\x07\r\x02" +
		"\x02qt\x05\x1E\x10\x02rt\x05\x10\t\x02sq\x03\x02\x02\x02sr\x03\x02\x02" +
		"\x02t\x17\x03\x02\x02\x02uv\t\x03\x02\x02v\x19\x03\x02\x02\x02wx\x05\x18" +
		"\r\x02xy\x05\x1E\x10\x02y\x1B\x03\x02\x02\x02z{\t\x04\x02\x02{\x1D\x03" +
		"\x02\x02\x02|\x85\x07\x1F\x02\x02}\x85\x07\x1E\x02\x02~\x85\x05\x10\t" +
		"\x02\x7F\x85\x05 \x11\x02\x80\x85\x07\x16\x02\x02\x81\x85\x07\x17\x02" +
		"\x02\x82\x85\x07\x18\x02\x02\x83\x85\x05\x14\v\x02\x84|\x03\x02\x02\x02" +
		"\x84}\x03\x02\x02\x02\x84~\x03\x02\x02\x02\x84\x7F\x03\x02\x02\x02\x84" +
		"\x80\x03\x02\x02\x02\x84\x81\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84" +
		"\x83\x03\x02\x02\x02\x85\x1F\x03\x02\x02\x02\x86\x87\x07\x19\x02\x02\x87" +
		"\x8C\x05\x1E\x10\x02\x88\x89\x07\n\x02\x02\x89\x8B\x05\x1E\x10\x02\x8A" +
		"\x88\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C" +
		"\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F" +
		"\x90\x07\x1A\x02\x02\x90\x94\x03\x02\x02\x02\x91\x92\x07\x19\x02\x02\x92" +
		"\x94\x07\x1A\x02\x02\x93\x86\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94" +
		"!\x03\x02\x02\x02\x95\x96\t\x05\x02\x02\x96#\x03\x02\x02\x02\x0F\'0=C" +
		"HU`chs\x84\x8C\x93";
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
	public ifThenDoStmt(): IfThenDoStmtContext | undefined {
		return this.tryGetRuleContext(0, IfThenDoStmtContext);
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
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FireParser.STRING, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
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


export class IfThenDoStmtContext extends ParserRuleContext {
	public variableName(): VariableNameContext[];
	public variableName(i: number): VariableNameContext;
	public variableName(i?: number): VariableNameContext | VariableNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableNameContext);
		} else {
			return this.getRuleContext(i, VariableNameContext);
		}
	}
	public operatorNumberPair(): OperatorNumberPairContext {
		return this.getRuleContext(0, OperatorNumberPairContext);
	}
	public objectChildReference(): ObjectChildReferenceContext[];
	public objectChildReference(i: number): ObjectChildReferenceContext;
	public objectChildReference(i?: number): ObjectChildReferenceContext | ObjectChildReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectChildReferenceContext);
		} else {
			return this.getRuleContext(i, ObjectChildReferenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_ifThenDoStmt; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterIfThenDoStmt) {
			listener.enterIfThenDoStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitIfThenDoStmt) {
			listener.exitIfThenDoStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitIfThenDoStmt) {
			return visitor.visitIfThenDoStmt(this);
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


export class ObjectChildReferenceContext extends ParserRuleContext {
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_objectChildReference; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterObjectChildReference) {
			listener.enterObjectChildReference(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitObjectChildReference) {
			listener.exitObjectChildReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitObjectChildReference) {
			return visitor.visitObjectChildReference(this);
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


export class ValueOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_valueOperators; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterValueOperators) {
			listener.enterValueOperators(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitValueOperators) {
			listener.exitValueOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitValueOperators) {
			return visitor.visitValueOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorNumberPairContext extends ParserRuleContext {
	public valueOperators(): ValueOperatorsContext {
		return this.getRuleContext(0, ValueOperatorsContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FireParser.RULE_operatorNumberPair; }
	// @Override
	public enterRule(listener: FireListener): void {
		if (listener.enterOperatorNumberPair) {
			listener.enterOperatorNumberPair(this);
		}
	}
	// @Override
	public exitRule(listener: FireListener): void {
		if (listener.exitOperatorNumberPair) {
			listener.exitOperatorNumberPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FireVisitor<Result>): Result {
		if (visitor.visitOperatorNumberPair) {
			return visitor.visitOperatorNumberPair(this);
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


