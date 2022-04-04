// Generated from d:\portfolio\fuellang\front\src\parser\Fire.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FireParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		LET=25, PRINT=26, INSIDE=27, NUMBER=28, STRING=29, IDENTIFIER=30, WS=31, 
		COMMENT=32, LINE_COMMENT=33;
	public static final int
		RULE_compilationUnit = 0, RULE_stmt = 1, RULE_relationStmt = 2, RULE_assignStmt = 3, 
		RULE_printStmt = 4, RULE_ifThenDoStmt = 5, RULE_json = 6, RULE_jsonObject = 7, 
		RULE_objectChildReference = 8, RULE_variableName = 9, RULE_keyValuePair = 10, 
		RULE_valueOperators = 11, RULE_operatorNumberPair = 12, RULE_primitiveEntity = 13, 
		RULE_value = 14, RULE_arr = 15, RULE_bool = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "stmt", "relationStmt", "assignStmt", "printStmt", 
			"ifThenDoStmt", "json", "jsonObject", "objectChildReference", "variableName", 
			"keyValuePair", "valueOperators", "operatorNumberPair", "primitiveEntity", 
			"value", "arr", "bool"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'REL'", "'=>'", "'as'", "'='", "'IF'", "'DO'", "'{'", "','", "'}'", 
			"'.'", "':'", "'<'", "'<='", "'>'", "'>='", "'=='", "'ENT'", "'ACT'", 
			"'EVT'", "'true'", "'false'", "'null'", "'['", "']'", "'let'", "'print'", 
			"'inside'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "LET", "PRINT", "INSIDE", "NUMBER", "STRING", "IDENTIFIER", "WS", 
			"COMMENT", "LINE_COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Fire.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FireParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class CompilationUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(FireParser.EOF, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__4) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << LET) | (1L << PRINT))) != 0)) {
				{
				{
				setState(34);
				stmt();
				}
				}
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(40);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StmtContext extends ParserRuleContext {
		public AssignStmtContext assignStmt() {
			return getRuleContext(AssignStmtContext.class,0);
		}
		public PrintStmtContext printStmt() {
			return getRuleContext(PrintStmtContext.class,0);
		}
		public RelationStmtContext relationStmt() {
			return getRuleContext(RelationStmtContext.class,0);
		}
		public IfThenDoStmtContext ifThenDoStmt() {
			return getRuleContext(IfThenDoStmtContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stmt);
		try {
			setState(46);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				assignStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				printStmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(44);
				relationStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(45);
				ifThenDoStmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationStmtContext extends ParserRuleContext {
		public List<VariableNameContext> variableName() {
			return getRuleContexts(VariableNameContext.class);
		}
		public VariableNameContext variableName(int i) {
			return getRuleContext(VariableNameContext.class,i);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public RelationStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationStmt; }
	}

	public final RelationStmtContext relationStmt() throws RecognitionException {
		RelationStmtContext _localctx = new RelationStmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_relationStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(T__0);
			setState(49);
			variableName();
			setState(50);
			match(T__1);
			setState(51);
			variableName();
			setState(52);
			match(T__2);
			setState(53);
			variableName();
			setState(54);
			match(T__3);
			setState(55);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignStmtContext extends ParserRuleContext {
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public PrimitiveEntityContext primitiveEntity() {
			return getRuleContext(PrimitiveEntityContext.class,0);
		}
		public TerminalNode LET() { return getToken(FireParser.LET, 0); }
		public ArrContext arr() {
			return getRuleContext(ArrContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public AssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignStmt; }
	}

	public final AssignStmtContext assignStmt() throws RecognitionException {
		AssignStmtContext _localctx = new AssignStmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_assignStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__16:
			case T__17:
			case T__18:
				{
				setState(57);
				primitiveEntity();
				}
				break;
			case LET:
				{
				setState(58);
				match(LET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(61);
			variableName();
			setState(62);
			match(T__3);
			setState(65);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(63);
				arr();
				}
				break;
			case 2:
				{
				setState(64);
				value();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrintStmtContext extends ParserRuleContext {
		public TerminalNode PRINT() { return getToken(FireParser.PRINT, 0); }
		public TerminalNode STRING() { return getToken(FireParser.STRING, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public PrintStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printStmt; }
	}

	public final PrintStmtContext printStmt() throws RecognitionException {
		PrintStmtContext _localctx = new PrintStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_printStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(PRINT);
			setState(70);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(68);
				match(STRING);
				}
				break;
			case 2:
				{
				setState(69);
				value();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfThenDoStmtContext extends ParserRuleContext {
		public List<VariableNameContext> variableName() {
			return getRuleContexts(VariableNameContext.class);
		}
		public VariableNameContext variableName(int i) {
			return getRuleContext(VariableNameContext.class,i);
		}
		public OperatorNumberPairContext operatorNumberPair() {
			return getRuleContext(OperatorNumberPairContext.class,0);
		}
		public List<ObjectChildReferenceContext> objectChildReference() {
			return getRuleContexts(ObjectChildReferenceContext.class);
		}
		public ObjectChildReferenceContext objectChildReference(int i) {
			return getRuleContext(ObjectChildReferenceContext.class,i);
		}
		public IfThenDoStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifThenDoStmt; }
	}

	public final IfThenDoStmtContext ifThenDoStmt() throws RecognitionException {
		IfThenDoStmtContext _localctx = new IfThenDoStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ifThenDoStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			match(T__4);
			setState(73);
			variableName();
			{
			setState(74);
			objectChildReference();
			}
			setState(75);
			operatorNumberPair();
			setState(76);
			match(T__5);
			setState(77);
			variableName();
			setState(78);
			objectChildReference();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(FireParser.EOF, 0); }
		public List<JsonObjectContext> jsonObject() {
			return getRuleContexts(JsonObjectContext.class);
		}
		public JsonObjectContext jsonObject(int i) {
			return getRuleContext(JsonObjectContext.class,i);
		}
		public JsonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json; }
	}

	public final JsonContext json() throws RecognitionException {
		JsonContext _localctx = new JsonContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_json);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__6) {
				{
				{
				setState(80);
				jsonObject();
				}
				}
				setState(85);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(86);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonObjectContext extends ParserRuleContext {
		public List<KeyValuePairContext> keyValuePair() {
			return getRuleContexts(KeyValuePairContext.class);
		}
		public KeyValuePairContext keyValuePair(int i) {
			return getRuleContext(KeyValuePairContext.class,i);
		}
		public JsonObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jsonObject; }
	}

	public final JsonObjectContext jsonObject() throws RecognitionException {
		JsonObjectContext _localctx = new JsonObjectContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_jsonObject);
		int _la;
		try {
			setState(102);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(88);
				match(T__6);
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STRING || _la==IDENTIFIER) {
					{
					setState(89);
					keyValuePair();
					setState(94);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__7) {
						{
						{
						setState(90);
						match(T__7);
						setState(91);
						keyValuePair();
						}
						}
						setState(96);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(99);
				match(T__8);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(100);
				match(T__6);
				setState(101);
				match(T__8);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectChildReferenceContext extends ParserRuleContext {
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public ObjectChildReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectChildReference; }
	}

	public final ObjectChildReferenceContext objectChildReference() throws RecognitionException {
		ObjectChildReferenceContext _localctx = new ObjectChildReferenceContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_objectChildReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(104);
			match(T__9);
			setState(105);
			variableName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableNameContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FireParser.IDENTIFIER, 0); }
		public VariableNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableName; }
	}

	public final VariableNameContext variableName() throws RecognitionException {
		VariableNameContext _localctx = new VariableNameContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_variableName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyValuePairContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FireParser.IDENTIFIER, 0); }
		public TerminalNode STRING() { return getToken(FireParser.STRING, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public JsonObjectContext jsonObject() {
			return getRuleContext(JsonObjectContext.class,0);
		}
		public KeyValuePairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyValuePair; }
	}

	public final KeyValuePairContext keyValuePair() throws RecognitionException {
		KeyValuePairContext _localctx = new KeyValuePairContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_keyValuePair);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			_la = _input.LA(1);
			if ( !(_la==STRING || _la==IDENTIFIER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(110);
			match(T__10);
			setState(113);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(111);
				value();
				}
				break;
			case 2:
				{
				setState(112);
				jsonObject();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueOperatorsContext extends ParserRuleContext {
		public ValueOperatorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valueOperators; }
	}

	public final ValueOperatorsContext valueOperators() throws RecognitionException {
		ValueOperatorsContext _localctx = new ValueOperatorsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_valueOperators);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorNumberPairContext extends ParserRuleContext {
		public ValueOperatorsContext valueOperators() {
			return getRuleContext(ValueOperatorsContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public OperatorNumberPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorNumberPair; }
	}

	public final OperatorNumberPairContext operatorNumberPair() throws RecognitionException {
		OperatorNumberPairContext _localctx = new OperatorNumberPairContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_operatorNumberPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			valueOperators();
			setState(118);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimitiveEntityContext extends ParserRuleContext {
		public PrimitiveEntityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveEntity; }
	}

	public final PrimitiveEntityContext primitiveEntity() throws RecognitionException {
		PrimitiveEntityContext _localctx = new PrimitiveEntityContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_primitiveEntity);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__16) | (1L << T__17) | (1L << T__18))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(FireParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(FireParser.NUMBER, 0); }
		public JsonObjectContext jsonObject() {
			return getRuleContext(JsonObjectContext.class,0);
		}
		public ArrContext arr() {
			return getRuleContext(ArrContext.class,0);
		}
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_value);
		try {
			setState(130);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(122);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(123);
				match(NUMBER);
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 3);
				{
				setState(124);
				jsonObject();
				}
				break;
			case T__22:
				enterOuterAlt(_localctx, 4);
				{
				setState(125);
				arr();
				}
				break;
			case T__19:
				enterOuterAlt(_localctx, 5);
				{
				setState(126);
				match(T__19);
				}
				break;
			case T__20:
				enterOuterAlt(_localctx, 6);
				{
				setState(127);
				match(T__20);
				}
				break;
			case T__21:
				enterOuterAlt(_localctx, 7);
				{
				setState(128);
				match(T__21);
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 8);
				{
				setState(129);
				variableName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public ArrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arr; }
	}

	public final ArrContext arr() throws RecognitionException {
		ArrContext _localctx = new ArrContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_arr);
		int _la;
		try {
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				match(T__22);
				setState(133);
				value();
				setState(138);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__7) {
					{
					{
					setState(134);
					match(T__7);
					setState(135);
					value();
					}
					}
					setState(140);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(141);
				match(T__23);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(143);
				match(T__22);
				setState(144);
				match(T__23);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoolContext extends ParserRuleContext {
		public BoolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool; }
	}

	public final BoolContext bool() throws RecognitionException {
		BoolContext _localctx = new BoolContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_bool);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			_la = _input.LA(1);
			if ( !(_la==T__19 || _la==T__20) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3#\u0098\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\7\2&\n\2\f\2\16\2)\13\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3\61\n\3\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\5\5>\n\5\3\5\3\5\3\5\3\5\5\5D\n"+
		"\5\3\6\3\6\3\6\5\6I\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\7\bT\n\b\f"+
		"\b\16\bW\13\b\3\b\3\b\3\t\3\t\3\t\3\t\7\t_\n\t\f\t\16\tb\13\t\5\td\n\t"+
		"\3\t\3\t\3\t\5\ti\n\t\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\f\3\f\5\ft\n\f\3"+
		"\r\3\r\3\16\3\16\3\16\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\5\20\u0085\n\20\3\21\3\21\3\21\3\21\7\21\u008b\n\21\f\21\16\21\u008e"+
		"\13\21\3\21\3\21\3\21\3\21\5\21\u0094\n\21\3\22\3\22\3\22\2\2\23\2\4\6"+
		"\b\n\f\16\20\22\24\26\30\32\34\36 \"\2\6\3\2\37 \3\2\16\22\4\2\3\3\23"+
		"\25\3\2\26\27\2\u009b\2\'\3\2\2\2\4\60\3\2\2\2\6\62\3\2\2\2\b=\3\2\2\2"+
		"\nE\3\2\2\2\fJ\3\2\2\2\16U\3\2\2\2\20h\3\2\2\2\22j\3\2\2\2\24m\3\2\2\2"+
		"\26o\3\2\2\2\30u\3\2\2\2\32w\3\2\2\2\34z\3\2\2\2\36\u0084\3\2\2\2 \u0093"+
		"\3\2\2\2\"\u0095\3\2\2\2$&\5\4\3\2%$\3\2\2\2&)\3\2\2\2\'%\3\2\2\2\'(\3"+
		"\2\2\2(*\3\2\2\2)\'\3\2\2\2*+\7\2\2\3+\3\3\2\2\2,\61\5\b\5\2-\61\5\n\6"+
		"\2.\61\5\6\4\2/\61\5\f\7\2\60,\3\2\2\2\60-\3\2\2\2\60.\3\2\2\2\60/\3\2"+
		"\2\2\61\5\3\2\2\2\62\63\7\3\2\2\63\64\5\24\13\2\64\65\7\4\2\2\65\66\5"+
		"\24\13\2\66\67\7\5\2\2\678\5\24\13\289\7\6\2\29:\5\36\20\2:\7\3\2\2\2"+
		";>\5\34\17\2<>\7\33\2\2=;\3\2\2\2=<\3\2\2\2>?\3\2\2\2?@\5\24\13\2@C\7"+
		"\6\2\2AD\5 \21\2BD\5\36\20\2CA\3\2\2\2CB\3\2\2\2D\t\3\2\2\2EH\7\34\2\2"+
		"FI\7\37\2\2GI\5\36\20\2HF\3\2\2\2HG\3\2\2\2I\13\3\2\2\2JK\7\7\2\2KL\5"+
		"\24\13\2LM\5\22\n\2MN\5\32\16\2NO\7\b\2\2OP\5\24\13\2PQ\5\22\n\2Q\r\3"+
		"\2\2\2RT\5\20\t\2SR\3\2\2\2TW\3\2\2\2US\3\2\2\2UV\3\2\2\2VX\3\2\2\2WU"+
		"\3\2\2\2XY\7\2\2\3Y\17\3\2\2\2Zc\7\t\2\2[`\5\26\f\2\\]\7\n\2\2]_\5\26"+
		"\f\2^\\\3\2\2\2_b\3\2\2\2`^\3\2\2\2`a\3\2\2\2ad\3\2\2\2b`\3\2\2\2c[\3"+
		"\2\2\2cd\3\2\2\2de\3\2\2\2ei\7\13\2\2fg\7\t\2\2gi\7\13\2\2hZ\3\2\2\2h"+
		"f\3\2\2\2i\21\3\2\2\2jk\7\f\2\2kl\5\24\13\2l\23\3\2\2\2mn\7 \2\2n\25\3"+
		"\2\2\2op\t\2\2\2ps\7\r\2\2qt\5\36\20\2rt\5\20\t\2sq\3\2\2\2sr\3\2\2\2"+
		"t\27\3\2\2\2uv\t\3\2\2v\31\3\2\2\2wx\5\30\r\2xy\5\36\20\2y\33\3\2\2\2"+
		"z{\t\4\2\2{\35\3\2\2\2|\u0085\7\37\2\2}\u0085\7\36\2\2~\u0085\5\20\t\2"+
		"\177\u0085\5 \21\2\u0080\u0085\7\26\2\2\u0081\u0085\7\27\2\2\u0082\u0085"+
		"\7\30\2\2\u0083\u0085\5\24\13\2\u0084|\3\2\2\2\u0084}\3\2\2\2\u0084~\3"+
		"\2\2\2\u0084\177\3\2\2\2\u0084\u0080\3\2\2\2\u0084\u0081\3\2\2\2\u0084"+
		"\u0082\3\2\2\2\u0084\u0083\3\2\2\2\u0085\37\3\2\2\2\u0086\u0087\7\31\2"+
		"\2\u0087\u008c\5\36\20\2\u0088\u0089\7\n\2\2\u0089\u008b\5\36\20\2\u008a"+
		"\u0088\3\2\2\2\u008b\u008e\3\2\2\2\u008c\u008a\3\2\2\2\u008c\u008d\3\2"+
		"\2\2\u008d\u008f\3\2\2\2\u008e\u008c\3\2\2\2\u008f\u0090\7\32\2\2\u0090"+
		"\u0094\3\2\2\2\u0091\u0092\7\31\2\2\u0092\u0094\7\32\2\2\u0093\u0086\3"+
		"\2\2\2\u0093\u0091\3\2\2\2\u0094!\3\2\2\2\u0095\u0096\t\5\2\2\u0096#\3"+
		"\2\2\2\17\'\60=CHU`chs\u0084\u008c\u0093";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}