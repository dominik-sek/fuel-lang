// Generated from Fire.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import FireListener from './FireListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0017\u0083\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0007\u0002\"\n\u0002\f\u0002\u000e\u0002%\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0005\u0003)\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004.\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u00044\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005;\n\u0005\u0003\u0006\u0007",
    "\u0006>\n\u0006\f\u0006\u000e\u0006A\u000b\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007I\n\u0007",
    "\f\u0007\u000e\u0007L\u000b\u0007\u0005\u0007N\n\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007S\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n_\n\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000ep\n\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000fv\n\u000f\f\u000f\u000e\u000fy\u000b\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u007f\n",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0002\u0002\u0011\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e\u0002",
    "\u0004\u0003\u0002\b\u000b\u0003\u0002\f\r\u0002\u008a\u0002#\u0003",
    "\u0002\u0002\u0002\u0004(\u0003\u0002\u0002\u0002\u0006*\u0003\u0002",
    "\u0002\u0002\b5\u0003\u0002\u0002\u0002\n?\u0003\u0002\u0002\u0002\f",
    "R\u0003\u0002\u0002\u0002\u000eT\u0003\u0002\u0002\u0002\u0010W\u0003",
    "\u0002\u0002\u0002\u0012Y\u0003\u0002\u0002\u0002\u0014`\u0003\u0002",
    "\u0002\u0002\u0016c\u0003\u0002\u0002\u0002\u0018e\u0003\u0002\u0002",
    "\u0002\u001ao\u0003\u0002\u0002\u0002\u001c~\u0003\u0002\u0002\u0002",
    "\u001e\u0080\u0003\u0002\u0002\u0002 \"\u0005\u0004\u0003\u0002! \u0003",
    "\u0002\u0002\u0002\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002",
    "#$\u0003\u0002\u0002\u0002$\u0003\u0003\u0002\u0002\u0002%#\u0003\u0002",
    "\u0002\u0002&)\u0005\u0006\u0004\u0002\')\u0005\b\u0005\u0002(&\u0003",
    "\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)\u0005\u0003\u0002\u0002",
    "\u0002*-\u0007\u0011\u0002\u0002+.\u0005\u0010\t\u0002,.\u0005\u000e",
    "\b\u0002-+\u0003\u0002\u0002\u0002-,\u0003\u0002\u0002\u0002./\u0003",
    "\u0002\u0002\u0002/3\u0007\u0012\u0002\u000204\u0005\f\u0007\u00021",
    "4\u0005\u0018\r\u000224\u0005\u001c\u000f\u000230\u0003\u0002\u0002",
    "\u000231\u0003\u0002\u0002\u000232\u0003\u0002\u0002\u00024\u0007\u0003",
    "\u0002\u0002\u00025:\u0007\u0013\u0002\u00026;\u0005\f\u0007\u00027",
    ";\u0005\u0018\r\u00028;\u0005\u000e\b\u00029;\u0005\u001c\u000f\u0002",
    ":6\u0003\u0002\u0002\u0002:7\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002",
    "\u0002:9\u0003\u0002\u0002\u0002;\t\u0003\u0002\u0002\u0002<>\u0005",
    "\f\u0007\u0002=<\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?",
    "=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@B\u0003\u0002\u0002",
    "\u0002A?\u0003\u0002\u0002\u0002BC\u0007\u0002\u0002\u0003C\u000b\u0003",
    "\u0002\u0002\u0002DM\u0007\u0003\u0002\u0002EJ\u0005\u0012\n\u0002F",
    "G\u0007\u0004\u0002\u0002GI\u0005\u0012\n\u0002HF\u0003\u0002\u0002",
    "\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002",
    "\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002ME\u0003",
    "\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002",
    "OS\u0007\u0005\u0002\u0002PQ\u0007\u0003\u0002\u0002QS\u0007\u0005\u0002",
    "\u0002RD\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002S\r\u0003",
    "\u0002\u0002\u0002TU\u0005\u0016\f\u0002UV\u0005\u0014\u000b\u0002V",
    "\u000f\u0003\u0002\u0002\u0002WX\u0007\u0016\u0002\u0002X\u0011\u0003",
    "\u0002\u0002\u0002YZ\u0007\u0016\u0002\u0002Z^\u0007\u0006\u0002\u0002",
    "[_\u0005\u001a\u000e\u0002\\_\u0005\f\u0007\u0002]_\u0005\u000e\b\u0002",
    "^[\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002^]\u0003\u0002",
    "\u0002\u0002_\u0013\u0003\u0002\u0002\u0002`a\u0007\u0007\u0002\u0002",
    "ab\u0007\u0016\u0002\u0002b\u0015\u0003\u0002\u0002\u0002cd\t\u0002",
    "\u0002\u0002d\u0017\u0003\u0002\u0002\u0002ef\u0007\u0015\u0002\u0002",
    "f\u0019\u0003\u0002\u0002\u0002gp\u0007\u0015\u0002\u0002hp\u0007\u0014",
    "\u0002\u0002ip\u0005\f\u0007\u0002jp\u0005\u001c\u000f\u0002kp\u0007",
    "\f\u0002\u0002lp\u0007\r\u0002\u0002mp\u0007\u000e\u0002\u0002np\u0005",
    "\u000e\b\u0002og\u0003\u0002\u0002\u0002oh\u0003\u0002\u0002\u0002o",
    "i\u0003\u0002\u0002\u0002oj\u0003\u0002\u0002\u0002ok\u0003\u0002\u0002",
    "\u0002ol\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002on\u0003\u0002",
    "\u0002\u0002p\u001b\u0003\u0002\u0002\u0002qr\u0007\u000f\u0002\u0002",
    "rw\u0005\u001a\u000e\u0002st\u0007\u0004\u0002\u0002tv\u0005\u001a\u000e",
    "\u0002us\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002yw\u0003",
    "\u0002\u0002\u0002z{\u0007\u0010\u0002\u0002{\u007f\u0003\u0002\u0002",
    "\u0002|}\u0007\u000f\u0002\u0002}\u007f\u0007\u0010\u0002\u0002~q\u0003",
    "\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u001d\u0003\u0002",
    "\u0002\u0002\u0080\u0081\t\u0003\u0002\u0002\u0081\u001f\u0003\u0002",
    "\u0002\u0002\u000f#(-3:?JMR^ow~"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FireParser extends antlr4.Parser {

    static grammarFileName = "Fire.g4";
    static literalNames = [ null, "'{'", "','", "'}'", "':'", "'-'", "'ENT'", 
                            "'ACT'", "'EVT'", "'REL'", "'true'", "'false'", 
                            "'null'", "'['", "']'", "'let'", "'='", "'print'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "LET", 
                             "EQ", "PRINT", "NUMBER", "STRING", "IDENTIFIER", 
                             "WS" ];
    static ruleNames = [ "compilationUnit", "stmt", "assignStmt", "printStmt", 
                         "json", "jsonObject", "entityObject", "variableName", 
                         "keyValuePair", "nameValuePair", "primitiveEntity", 
                         "string", "value", "arr", "bool" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FireParser.ruleNames;
        this.literalNames = FireParser.literalNames;
        this.symbolicNames = FireParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	compilationUnit() {
	    let localctx = new CompilationUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FireParser.RULE_compilationUnit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FireParser.LET || _la===FireParser.PRINT) {
	            this.state = 30;
	            this.stmt();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FireParser.RULE_stmt);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.LET:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.assignStmt();
	            break;
	        case FireParser.PRINT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.printStmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignStmt() {
	    let localctx = new AssignStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FireParser.RULE_assignStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(FireParser.LET);
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.IDENTIFIER:
	            this.state = 41;
	            this.variableName();
	            break;
	        case FireParser.T__5:
	        case FireParser.T__6:
	        case FireParser.T__7:
	        case FireParser.T__8:
	            this.state = 42;
	            this.entityObject();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 45;
	        this.match(FireParser.EQ);
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.T__0:
	            this.state = 46;
	            this.jsonObject();
	            break;
	        case FireParser.STRING:
	            this.state = 47;
	            this.string();
	            break;
	        case FireParser.T__12:
	            this.state = 48;
	            this.arr();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printStmt() {
	    let localctx = new PrintStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FireParser.RULE_printStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(FireParser.PRINT);
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.T__0:
	            this.state = 52;
	            this.jsonObject();
	            break;
	        case FireParser.STRING:
	            this.state = 53;
	            this.string();
	            break;
	        case FireParser.T__5:
	        case FireParser.T__6:
	        case FireParser.T__7:
	        case FireParser.T__8:
	            this.state = 54;
	            this.entityObject();
	            break;
	        case FireParser.T__12:
	            this.state = 55;
	            this.arr();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FireParser.RULE_json);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FireParser.T__0) {
	            this.state = 58;
	            this.jsonObject();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.match(FireParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jsonObject() {
	    let localctx = new JsonObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FireParser.RULE_jsonObject);
	    var _la = 0; // Token type
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.match(FireParser.T__0);
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FireParser.IDENTIFIER) {
	                this.state = 67;
	                this.keyValuePair();
	                this.state = 72;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===FireParser.T__1) {
	                    this.state = 68;
	                    this.match(FireParser.T__1);
	                    this.state = 69;
	                    this.keyValuePair();
	                    this.state = 74;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 77;
	            this.match(FireParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.match(FireParser.T__0);
	            this.state = 79;
	            this.match(FireParser.T__2);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entityObject() {
	    let localctx = new EntityObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FireParser.RULE_entityObject);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.primitiveEntity();
	        this.state = 83;
	        this.nameValuePair();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableName() {
	    let localctx = new VariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FireParser.RULE_variableName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(FireParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyValuePair() {
	    let localctx = new KeyValuePairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FireParser.RULE_keyValuePair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(FireParser.IDENTIFIER);
	        this.state = 88;
	        this.match(FireParser.T__3);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 89;
	            this.value();
	            break;

	        case 2:
	            this.state = 90;
	            this.jsonObject();
	            break;

	        case 3:
	            this.state = 91;
	            this.entityObject();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nameValuePair() {
	    let localctx = new NameValuePairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FireParser.RULE_nameValuePair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(FireParser.T__4);
	        this.state = 95;
	        this.match(FireParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primitiveEntity() {
	    let localctx = new PrimitiveEntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FireParser.RULE_primitiveEntity);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FireParser.T__5) | (1 << FireParser.T__6) | (1 << FireParser.T__7) | (1 << FireParser.T__8))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FireParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(FireParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FireParser.RULE_value);
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.match(FireParser.STRING);
	            break;
	        case FireParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.match(FireParser.NUMBER);
	            break;
	        case FireParser.T__0:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            this.jsonObject();
	            break;
	        case FireParser.T__12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 104;
	            this.arr();
	            break;
	        case FireParser.T__9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 105;
	            this.match(FireParser.T__9);
	            break;
	        case FireParser.T__10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 106;
	            this.match(FireParser.T__10);
	            break;
	        case FireParser.T__11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 107;
	            this.match(FireParser.T__11);
	            break;
	        case FireParser.T__5:
	        case FireParser.T__6:
	        case FireParser.T__7:
	        case FireParser.T__8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 108;
	            this.entityObject();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arr() {
	    let localctx = new ArrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FireParser.RULE_arr);
	    var _la = 0; // Token type
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.match(FireParser.T__12);
	            this.state = 112;
	            this.value();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FireParser.T__1) {
	                this.state = 113;
	                this.match(FireParser.T__1);
	                this.state = 114;
	                this.value();
	                this.state = 119;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 120;
	            this.match(FireParser.T__13);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.match(FireParser.T__12);
	            this.state = 123;
	            this.match(FireParser.T__13);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bool() {
	    let localctx = new BoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FireParser.RULE_bool);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        _la = this._input.LA(1);
	        if(!(_la===FireParser.T__9 || _la===FireParser.T__10)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FireParser.EOF = antlr4.Token.EOF;
FireParser.T__0 = 1;
FireParser.T__1 = 2;
FireParser.T__2 = 3;
FireParser.T__3 = 4;
FireParser.T__4 = 5;
FireParser.T__5 = 6;
FireParser.T__6 = 7;
FireParser.T__7 = 8;
FireParser.T__8 = 9;
FireParser.T__9 = 10;
FireParser.T__10 = 11;
FireParser.T__11 = 12;
FireParser.T__12 = 13;
FireParser.T__13 = 14;
FireParser.LET = 15;
FireParser.EQ = 16;
FireParser.PRINT = 17;
FireParser.NUMBER = 18;
FireParser.STRING = 19;
FireParser.IDENTIFIER = 20;
FireParser.WS = 21;

FireParser.RULE_compilationUnit = 0;
FireParser.RULE_stmt = 1;
FireParser.RULE_assignStmt = 2;
FireParser.RULE_printStmt = 3;
FireParser.RULE_json = 4;
FireParser.RULE_jsonObject = 5;
FireParser.RULE_entityObject = 6;
FireParser.RULE_variableName = 7;
FireParser.RULE_keyValuePair = 8;
FireParser.RULE_nameValuePair = 9;
FireParser.RULE_primitiveEntity = 10;
FireParser.RULE_string = 11;
FireParser.RULE_value = 12;
FireParser.RULE_arr = 13;
FireParser.RULE_bool = 14;

class CompilationUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_compilationUnit;
    }

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterCompilationUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitCompilationUnit(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_stmt;
    }

	assignStmt() {
	    return this.getTypedRuleContext(AssignStmtContext,0);
	};

	printStmt() {
	    return this.getTypedRuleContext(PrintStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitStmt(this);
		}
	}


}



class AssignStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_assignStmt;
    }

	LET() {
	    return this.getToken(FireParser.LET, 0);
	};

	EQ() {
	    return this.getToken(FireParser.EQ, 0);
	};

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	entityObject() {
	    return this.getTypedRuleContext(EntityObjectContext,0);
	};

	jsonObject() {
	    return this.getTypedRuleContext(JsonObjectContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	arr() {
	    return this.getTypedRuleContext(ArrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterAssignStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitAssignStmt(this);
		}
	}


}



class PrintStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_printStmt;
    }

	PRINT() {
	    return this.getToken(FireParser.PRINT, 0);
	};

	jsonObject() {
	    return this.getTypedRuleContext(JsonObjectContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	entityObject() {
	    return this.getTypedRuleContext(EntityObjectContext,0);
	};

	arr() {
	    return this.getTypedRuleContext(ArrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterPrintStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitPrintStmt(this);
		}
	}


}



class JsonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_json;
    }

	EOF() {
	    return this.getToken(FireParser.EOF, 0);
	};

	jsonObject = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(JsonObjectContext);
	    } else {
	        return this.getTypedRuleContext(JsonObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterJson(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitJson(this);
		}
	}


}



class JsonObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_jsonObject;
    }

	keyValuePair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyValuePairContext);
	    } else {
	        return this.getTypedRuleContext(KeyValuePairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterJsonObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitJsonObject(this);
		}
	}


}



class EntityObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_entityObject;
    }

	primitiveEntity() {
	    return this.getTypedRuleContext(PrimitiveEntityContext,0);
	};

	nameValuePair() {
	    return this.getTypedRuleContext(NameValuePairContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterEntityObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitEntityObject(this);
		}
	}


}



class VariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_variableName;
    }

	IDENTIFIER() {
	    return this.getToken(FireParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitVariableName(this);
		}
	}


}



class KeyValuePairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_keyValuePair;
    }

	IDENTIFIER() {
	    return this.getToken(FireParser.IDENTIFIER, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	jsonObject() {
	    return this.getTypedRuleContext(JsonObjectContext,0);
	};

	entityObject() {
	    return this.getTypedRuleContext(EntityObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterKeyValuePair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitKeyValuePair(this);
		}
	}


}



class NameValuePairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_nameValuePair;
    }

	IDENTIFIER() {
	    return this.getToken(FireParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterNameValuePair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitNameValuePair(this);
		}
	}


}



class PrimitiveEntityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_primitiveEntity;
    }


	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterPrimitiveEntity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitPrimitiveEntity(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_string;
    }

	STRING() {
	    return this.getToken(FireParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitString(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_value;
    }

	STRING() {
	    return this.getToken(FireParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(FireParser.NUMBER, 0);
	};

	jsonObject() {
	    return this.getTypedRuleContext(JsonObjectContext,0);
	};

	arr() {
	    return this.getTypedRuleContext(ArrContext,0);
	};

	entityObject() {
	    return this.getTypedRuleContext(EntityObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitValue(this);
		}
	}


}



class ArrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_arr;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterArr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitArr(this);
		}
	}


}



class BoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_bool;
    }


	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitBool(this);
		}
	}


}




FireParser.CompilationUnitContext = CompilationUnitContext; 
FireParser.StmtContext = StmtContext; 
FireParser.AssignStmtContext = AssignStmtContext; 
FireParser.PrintStmtContext = PrintStmtContext; 
FireParser.JsonContext = JsonContext; 
FireParser.JsonObjectContext = JsonObjectContext; 
FireParser.EntityObjectContext = EntityObjectContext; 
FireParser.VariableNameContext = VariableNameContext; 
FireParser.KeyValuePairContext = KeyValuePairContext; 
FireParser.NameValuePairContext = NameValuePairContext; 
FireParser.PrimitiveEntityContext = PrimitiveEntityContext; 
FireParser.StringContext = StringContext; 
FireParser.ValueContext = ValueContext; 
FireParser.ArrContext = ArrContext; 
FireParser.BoolContext = BoolContext; 
