// Generated from Fire.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import FireListener from './FireListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001c\u0087\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0007\u0002\"\n\u0002\f\u0002\u000e\u0002%\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003+",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0005\u00058\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0007\bE\n\b\f\b\u000e\bH\u000b\b\u0003\t\u0007\tK\n\t\f\t",
    "\u000e\tN\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\nV\n\n\f\n\u000e\nY\u000b\n\u0005\n[\n\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n`\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\fh\n\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000et\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000fz\n\u000f",
    "\f\u000f\u000e\u000f}\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u0083\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0002\u0002\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e\u0002\u0006\u0003\u0002\b\t\u0003\u0002",
    "\u001a\u001b\u0004\u0002\u0003\u0003\u000e\u0010\u0003\u0002\u0011\u0012",
    "\u0002\u008b\u0002#\u0003\u0002\u0002\u0002\u0004*\u0003\u0002\u0002",
    "\u0002\u0006,\u0003\u0002\u0002\u0002\b7\u0003\u0002\u0002\u0002\n=",
    "\u0003\u0002\u0002\u0002\f@\u0003\u0002\u0002\u0002\u000eB\u0003\u0002",
    "\u0002\u0002\u0010L\u0003\u0002\u0002\u0002\u0012_\u0003\u0002\u0002",
    "\u0002\u0014a\u0003\u0002\u0002\u0002\u0016c\u0003\u0002\u0002\u0002",
    "\u0018i\u0003\u0002\u0002\u0002\u001as\u0003\u0002\u0002\u0002\u001c",
    "\u0082\u0003\u0002\u0002\u0002\u001e\u0084\u0003\u0002\u0002\u0002 ",
    "\"\u0005\u0004\u0003\u0002! \u0003\u0002\u0002\u0002\"%\u0003\u0002",
    "\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$\u0003",
    "\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&+\u0005\b\u0005\u0002",
    "\'+\u0005\n\u0006\u0002(+\u0005\u0006\u0004\u0002)+\u0005\f\u0007\u0002",
    "*&\u0003\u0002\u0002\u0002*\'\u0003\u0002\u0002\u0002*(\u0003\u0002",
    "\u0002\u0002*)\u0003\u0002\u0002\u0002+\u0005\u0003\u0002\u0002\u0002",
    ",-\u0007\u0003\u0002\u0002-.\u0005\u0014\u000b\u0002./\u0007\u0004\u0002",
    "\u0002/0\u0005\u0014\u000b\u000201\u0007\u0005\u0002\u000212\u0005\u0014",
    "\u000b\u000223\u0007\u0006\u0002\u000234\u0005\u001a\u000e\u00024\u0007",
    "\u0003\u0002\u0002\u000258\u0005\u0018\r\u000268\u0007\u0016\u0002\u0002",
    "75\u0003\u0002\u0002\u000276\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029:\u0005\u0014\u000b\u0002:;\u0007\u0006\u0002\u0002;<\u0005\u001a",
    "\u000e\u0002<\t\u0003\u0002\u0002\u0002=>\u0007\u0017\u0002\u0002>?",
    "\u0005\u001a\u000e\u0002?\u000b\u0003\u0002\u0002\u0002@A\u0005\u000e",
    "\b\u0002A\r\u0003\u0002\u0002\u0002BF\u0007\u0007\u0002\u0002CE\n\u0002",
    "\u0002\u0002DC\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003",
    "\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002G\u000f\u0003\u0002\u0002",
    "\u0002HF\u0003\u0002\u0002\u0002IK\u0005\u0012\n\u0002JI\u0003\u0002",
    "\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003",
    "\u0002\u0002\u0002MO\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002",
    "OP\u0007\u0002\u0002\u0003P\u0011\u0003\u0002\u0002\u0002QZ\u0007\n",
    "\u0002\u0002RW\u0005\u0016\f\u0002ST\u0007\u000b\u0002\u0002TV\u0005",
    "\u0016\f\u0002US\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002W",
    "U\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002",
    "\u0002YW\u0003\u0002\u0002\u0002ZR\u0003\u0002\u0002\u0002Z[\u0003\u0002",
    "\u0002\u0002[\\\u0003\u0002\u0002\u0002\\`\u0007\f\u0002\u0002]^\u0007",
    "\n\u0002\u0002^`\u0007\f\u0002\u0002_Q\u0003\u0002\u0002\u0002_]\u0003",
    "\u0002\u0002\u0002`\u0013\u0003\u0002\u0002\u0002ab\u0007\u001b\u0002",
    "\u0002b\u0015\u0003\u0002\u0002\u0002cd\t\u0003\u0002\u0002dg\u0007",
    "\r\u0002\u0002eh\u0005\u001a\u000e\u0002fh\u0005\u0012\n\u0002ge\u0003",
    "\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002h\u0017\u0003\u0002\u0002",
    "\u0002ij\t\u0004\u0002\u0002j\u0019\u0003\u0002\u0002\u0002kt\u0007",
    "\u001a\u0002\u0002lt\u0007\u0019\u0002\u0002mt\u0005\u0012\n\u0002n",
    "t\u0005\u001c\u000f\u0002ot\u0007\u0011\u0002\u0002pt\u0007\u0012\u0002",
    "\u0002qt\u0007\u0013\u0002\u0002rt\u0005\u0014\u000b\u0002sk\u0003\u0002",
    "\u0002\u0002sl\u0003\u0002\u0002\u0002sm\u0003\u0002\u0002\u0002sn\u0003",
    "\u0002\u0002\u0002so\u0003\u0002\u0002\u0002sp\u0003\u0002\u0002\u0002",
    "sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002\u0002t\u001b\u0003\u0002",
    "\u0002\u0002uv\u0007\u0014\u0002\u0002v{\u0005\u001a\u000e\u0002wx\u0007",
    "\u000b\u0002\u0002xz\u0005\u001a\u000e\u0002yw\u0003\u0002\u0002\u0002",
    "z}\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|~\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u007f\u0007",
    "\u0015\u0002\u0002\u007f\u0083\u0003\u0002\u0002\u0002\u0080\u0081\u0007",
    "\u0014\u0002\u0002\u0081\u0083\u0007\u0015\u0002\u0002\u0082u\u0003",
    "\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u001d\u0003",
    "\u0002\u0002\u0002\u0084\u0085\t\u0005\u0002\u0002\u0085\u001f\u0003",
    "\u0002\u0002\u0002\u000e#*7FLWZ_gs{\u0082"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FireParser extends antlr4.Parser {

    static grammarFileName = "Fire.g4";
    static literalNames = [ null, "'REL'", "'=>'", "'as'", "'='", "'#'", 
                            "'\r'", "'\n'", "'{'", "','", "'}'", "':'", 
                            "'ENT'", "'ACT'", "'EVT'", "'true'", "'false'", 
                            "'null'", "'['", "']'", "'let'", "'print'", 
                            "'inside'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "LET", "PRINT", "INSIDE", 
                             "NUMBER", "STRING", "IDENTIFIER", "WS" ];
    static ruleNames = [ "compilationUnit", "stmt", "relationStmt", "assignStmt", 
                         "printStmt", "commentStmt", "comment", "json", 
                         "jsonObject", "variableName", "keyValuePair", "primitiveEntity", 
                         "value", "arr", "bool" ];

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
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FireParser.T__0) | (1 << FireParser.T__4) | (1 << FireParser.T__11) | (1 << FireParser.T__12) | (1 << FireParser.T__13) | (1 << FireParser.LET) | (1 << FireParser.PRINT))) !== 0)) {
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
	        this.state = 40;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.assignStmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.printStmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.relationStmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 39;
	            this.commentStmt();
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



	relationStmt() {
	    let localctx = new RelationStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FireParser.RULE_relationStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(FireParser.T__0);
	        this.state = 43;
	        this.variableName();
	        this.state = 44;
	        this.match(FireParser.T__1);
	        this.state = 45;
	        this.variableName();
	        this.state = 46;
	        this.match(FireParser.T__2);
	        this.state = 47;
	        this.variableName();
	        this.state = 48;
	        this.match(FireParser.T__3);
	        this.state = 49;
	        this.value();
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
	    this.enterRule(localctx, 6, FireParser.RULE_assignStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.T__0:
	        case FireParser.T__11:
	        case FireParser.T__12:
	        case FireParser.T__13:
	            this.state = 51;
	            this.primitiveEntity();
	            break;
	        case FireParser.LET:
	            this.state = 52;
	            this.match(FireParser.LET);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 55;
	        this.variableName();
	        this.state = 56;
	        this.match(FireParser.T__3);
	        this.state = 57;
	        this.value();
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
	    this.enterRule(localctx, 8, FireParser.RULE_printStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(FireParser.PRINT);
	        this.state = 60;
	        this.value();
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



	commentStmt() {
	    let localctx = new CommentStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FireParser.RULE_commentStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.comment();
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FireParser.RULE_comment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(FireParser.T__4);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 65;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===FireParser.T__5 || _la===FireParser.T__6) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	    this.enterRule(localctx, 14, FireParser.RULE_json);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FireParser.T__7) {
	            this.state = 71;
	            this.jsonObject();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 77;
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
	    this.enterRule(localctx, 16, FireParser.RULE_jsonObject);
	    var _la = 0; // Token type
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.match(FireParser.T__7);
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FireParser.STRING || _la===FireParser.IDENTIFIER) {
	                this.state = 80;
	                this.keyValuePair();
	                this.state = 85;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===FireParser.T__8) {
	                    this.state = 81;
	                    this.match(FireParser.T__8);
	                    this.state = 82;
	                    this.keyValuePair();
	                    this.state = 87;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 90;
	            this.match(FireParser.T__9);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.match(FireParser.T__7);
	            this.state = 92;
	            this.match(FireParser.T__9);
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



	variableName() {
	    let localctx = new VariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FireParser.RULE_variableName);
	    try {
	        this.enterOuterAlt(localctx, 1);
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



	keyValuePair() {
	    let localctx = new KeyValuePairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FireParser.RULE_keyValuePair);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        _la = this._input.LA(1);
	        if(!(_la===FireParser.STRING || _la===FireParser.IDENTIFIER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 98;
	        this.match(FireParser.T__10);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 99;
	            this.value();
	            break;

	        case 2:
	            this.state = 100;
	            this.jsonObject();
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



	primitiveEntity() {
	    let localctx = new PrimitiveEntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FireParser.RULE_primitiveEntity);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FireParser.T__0) | (1 << FireParser.T__11) | (1 << FireParser.T__12) | (1 << FireParser.T__13))) !== 0))) {
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FireParser.RULE_value);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.match(FireParser.STRING);
	            break;
	        case FireParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.match(FireParser.NUMBER);
	            break;
	        case FireParser.T__7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.jsonObject();
	            break;
	        case FireParser.T__17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
	            this.arr();
	            break;
	        case FireParser.T__14:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 109;
	            this.match(FireParser.T__14);
	            break;
	        case FireParser.T__15:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 110;
	            this.match(FireParser.T__15);
	            break;
	        case FireParser.T__16:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 111;
	            this.match(FireParser.T__16);
	            break;
	        case FireParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 112;
	            this.variableName();
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
	        this.state = 128;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.match(FireParser.T__17);
	            this.state = 116;
	            this.value();
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FireParser.T__8) {
	                this.state = 117;
	                this.match(FireParser.T__8);
	                this.state = 118;
	                this.value();
	                this.state = 123;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 124;
	            this.match(FireParser.T__18);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.match(FireParser.T__17);
	            this.state = 127;
	            this.match(FireParser.T__18);
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
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!(_la===FireParser.T__14 || _la===FireParser.T__15)) {
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
FireParser.T__14 = 15;
FireParser.T__15 = 16;
FireParser.T__16 = 17;
FireParser.T__17 = 18;
FireParser.T__18 = 19;
FireParser.LET = 20;
FireParser.PRINT = 21;
FireParser.INSIDE = 22;
FireParser.NUMBER = 23;
FireParser.STRING = 24;
FireParser.IDENTIFIER = 25;
FireParser.WS = 26;

FireParser.RULE_compilationUnit = 0;
FireParser.RULE_stmt = 1;
FireParser.RULE_relationStmt = 2;
FireParser.RULE_assignStmt = 3;
FireParser.RULE_printStmt = 4;
FireParser.RULE_commentStmt = 5;
FireParser.RULE_comment = 6;
FireParser.RULE_json = 7;
FireParser.RULE_jsonObject = 8;
FireParser.RULE_variableName = 9;
FireParser.RULE_keyValuePair = 10;
FireParser.RULE_primitiveEntity = 11;
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

	relationStmt() {
	    return this.getTypedRuleContext(RelationStmtContext,0);
	};

	commentStmt() {
	    return this.getTypedRuleContext(CommentStmtContext,0);
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



class RelationStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_relationStmt;
    }

	variableName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableNameContext);
	    } else {
	        return this.getTypedRuleContext(VariableNameContext,i);
	    }
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterRelationStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitRelationStmt(this);
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

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	primitiveEntity() {
	    return this.getTypedRuleContext(PrimitiveEntityContext,0);
	};

	LET() {
	    return this.getToken(FireParser.LET, 0);
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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



class CommentStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_commentStmt;
    }

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterCommentStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitCommentStmt(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FireParser.RULE_comment;
    }


	enterRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FireListener ) {
	        listener.exitComment(this);
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

	STRING() {
	    return this.getToken(FireParser.STRING, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	jsonObject() {
	    return this.getTypedRuleContext(JsonObjectContext,0);
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

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
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
FireParser.RelationStmtContext = RelationStmtContext; 
FireParser.AssignStmtContext = AssignStmtContext; 
FireParser.PrintStmtContext = PrintStmtContext; 
FireParser.CommentStmtContext = CommentStmtContext; 
FireParser.CommentContext = CommentContext; 
FireParser.JsonContext = JsonContext; 
FireParser.JsonObjectContext = JsonObjectContext; 
FireParser.VariableNameContext = VariableNameContext; 
FireParser.KeyValuePairContext = KeyValuePairContext; 
FireParser.PrimitiveEntityContext = PrimitiveEntityContext; 
FireParser.ValueContext = ValueContext; 
FireParser.ArrContext = ArrContext; 
FireParser.BoolContext = BoolContext; 
