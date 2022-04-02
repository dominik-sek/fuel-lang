// Generated from Fire.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import FireListener from './FireListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0019}\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e\n\u0002",
    "\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003(\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0005\u00055\n\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005;\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0007\u0007A\n\u0007\f\u0007\u000e",
    "\u0007D\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0007\bL\n\b\f\b\u000e\bO\u000b\b\u0005\bQ\n\b\u0003\b\u0003",
    "\b\u0003\b\u0005\bV\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\n^\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\fj\n\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0007\rp\n\r\f\r\u000e\rs\u000b\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0005\ry\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0002",
    "\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u0002\u0005\u0003\u0002\u0017\u0018\u0004\u0002\u0003\u0003\u000b\r",
    "\u0003\u0002\u000e\u000f\u0002\u0082\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0004\'\u0003\u0002\u0002\u0002\u0006)\u0003\u0002\u0002\u0002\b4\u0003",
    "\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002\fB\u0003\u0002\u0002\u0002",
    "\u000eU\u0003\u0002\u0002\u0002\u0010W\u0003\u0002\u0002\u0002\u0012",
    "Y\u0003\u0002\u0002\u0002\u0014_\u0003\u0002\u0002\u0002\u0016i\u0003",
    "\u0002\u0002\u0002\u0018x\u0003\u0002\u0002\u0002\u001az\u0003\u0002",
    "\u0002\u0002\u001c\u001e\u0005\u0004\u0003\u0002\u001d\u001c\u0003\u0002",
    "\u0002\u0002\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \"\u0003\u0002\u0002\u0002",
    "!\u001f\u0003\u0002\u0002\u0002\"#\u0007\u0002\u0002\u0003#\u0003\u0003",
    "\u0002\u0002\u0002$(\u0005\b\u0005\u0002%(\u0005\n\u0006\u0002&(\u0005",
    "\u0006\u0004\u0002\'$\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002",
    "\'&\u0003\u0002\u0002\u0002(\u0005\u0003\u0002\u0002\u0002)*\u0007\u0003",
    "\u0002\u0002*+\u0005\u0010\t\u0002+,\u0007\u0004\u0002\u0002,-\u0005",
    "\u0010\t\u0002-.\u0007\u0005\u0002\u0002./\u0005\u0010\t\u0002/0\u0007",
    "\u0006\u0002\u000201\u0005\u0016\f\u00021\u0007\u0003\u0002\u0002\u0002",
    "25\u0005\u0014\u000b\u000235\u0007\u0013\u0002\u000242\u0003\u0002\u0002",
    "\u000243\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000267\u0005\u0010",
    "\t\u00027:\u0007\u0006\u0002\u00028;\u0005\u0018\r\u00029;\u0005\u0016",
    "\f\u0002:8\u0003\u0002\u0002\u0002:9\u0003\u0002\u0002\u0002;\t\u0003",
    "\u0002\u0002\u0002<=\u0007\u0014\u0002\u0002=>\u0005\u0016\f\u0002>",
    "\u000b\u0003\u0002\u0002\u0002?A\u0005\u000e\b\u0002@?\u0003\u0002\u0002",
    "\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002",
    "\u0002\u0002CE\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002EF\u0007",
    "\u0002\u0002\u0003F\r\u0003\u0002\u0002\u0002GP\u0007\u0007\u0002\u0002",
    "HM\u0005\u0012\n\u0002IJ\u0007\b\u0002\u0002JL\u0005\u0012\n\u0002K",
    "I\u0003\u0002\u0002\u0002LO\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002",
    "\u0002MN\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002",
    "\u0002\u0002PH\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0003",
    "\u0002\u0002\u0002RV\u0007\t\u0002\u0002ST\u0007\u0007\u0002\u0002T",
    "V\u0007\t\u0002\u0002UG\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002V\u000f\u0003\u0002\u0002\u0002WX\u0007\u0018\u0002\u0002X\u0011",
    "\u0003\u0002\u0002\u0002YZ\t\u0002\u0002\u0002Z]\u0007\n\u0002\u0002",
    "[^\u0005\u0016\f\u0002\\^\u0005\u000e\b\u0002][\u0003\u0002\u0002\u0002",
    "]\\\u0003\u0002\u0002\u0002^\u0013\u0003\u0002\u0002\u0002_`\t\u0003",
    "\u0002\u0002`\u0015\u0003\u0002\u0002\u0002aj\u0007\u0017\u0002\u0002",
    "bj\u0007\u0016\u0002\u0002cj\u0005\u000e\b\u0002dj\u0005\u0018\r\u0002",
    "ej\u0007\u000e\u0002\u0002fj\u0007\u000f\u0002\u0002gj\u0007\u0010\u0002",
    "\u0002hj\u0005\u0010\t\u0002ia\u0003\u0002\u0002\u0002ib\u0003\u0002",
    "\u0002\u0002ic\u0003\u0002\u0002\u0002id\u0003\u0002\u0002\u0002ie\u0003",
    "\u0002\u0002\u0002if\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002",
    "ih\u0003\u0002\u0002\u0002j\u0017\u0003\u0002\u0002\u0002kl\u0007\u0011",
    "\u0002\u0002lq\u0005\u0016\f\u0002mn\u0007\b\u0002\u0002np\u0005\u0016",
    "\f\u0002om\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003",
    "\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rt\u0003\u0002\u0002\u0002",
    "sq\u0003\u0002\u0002\u0002tu\u0007\u0012\u0002\u0002uy\u0003\u0002\u0002",
    "\u0002vw\u0007\u0011\u0002\u0002wy\u0007\u0012\u0002\u0002xk\u0003\u0002",
    "\u0002\u0002xv\u0003\u0002\u0002\u0002y\u0019\u0003\u0002\u0002\u0002",
    "z{\t\u0004\u0002\u0002{\u001b\u0003\u0002\u0002\u0002\u000e\u001f\'",
    "4:BMPU]iqx"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FireParser extends antlr4.Parser {

    static grammarFileName = "Fire.g4";
    static literalNames = [ null, "'REL'", "'=>'", "'as'", "'='", "'{'", 
                            "','", "'}'", "':'", "'ENT'", "'ACT'", "'EVT'", 
                            "'true'", "'false'", "'null'", "'['", "']'", 
                            "'let'", "'print'", "'inside'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "LET", "PRINT", "INSIDE", "NUMBER", "STRING", 
                             "IDENTIFIER", "WS" ];
    static ruleNames = [ "compilationUnit", "stmt", "relationStmt", "assignStmt", 
                         "printStmt", "json", "jsonObject", "variableName", 
                         "keyValuePair", "primitiveEntity", "value", "arr", 
                         "bool" ];

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
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FireParser.T__0) | (1 << FireParser.T__8) | (1 << FireParser.T__9) | (1 << FireParser.T__10) | (1 << FireParser.LET) | (1 << FireParser.PRINT))) !== 0)) {
	            this.state = 26;
	            this.stmt();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FireParser.RULE_stmt);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.assignStmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.printStmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.relationStmt();
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
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.T__0:
	        case FireParser.T__8:
	        case FireParser.T__9:
	        case FireParser.T__10:
	            this.state = 48;
	            this.primitiveEntity();
	            break;
	        case FireParser.LET:
	            this.state = 49;
	            this.match(FireParser.LET);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 52;
	        this.variableName();
	        this.state = 53;
	        this.match(FireParser.T__3);
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 54;
	            this.arr();
	            break;

	        case 2:
	            this.state = 55;
	            this.value();
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



	printStmt() {
	    let localctx = new PrintStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FireParser.RULE_printStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(FireParser.PRINT);
	        this.state = 59;
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



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FireParser.RULE_json);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FireParser.T__4) {
	            this.state = 61;
	            this.jsonObject();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 67;
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
	    this.enterRule(localctx, 12, FireParser.RULE_jsonObject);
	    var _la = 0; // Token type
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(FireParser.T__4);
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FireParser.STRING || _la===FireParser.IDENTIFIER) {
	                this.state = 70;
	                this.keyValuePair();
	                this.state = 75;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===FireParser.T__5) {
	                    this.state = 71;
	                    this.match(FireParser.T__5);
	                    this.state = 72;
	                    this.keyValuePair();
	                    this.state = 77;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 80;
	            this.match(FireParser.T__6);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.match(FireParser.T__4);
	            this.state = 82;
	            this.match(FireParser.T__6);
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        _la = this._input.LA(1);
	        if(!(_la===FireParser.STRING || _la===FireParser.IDENTIFIER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 88;
	        this.match(FireParser.T__7);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 89;
	            this.value();
	            break;

	        case 2:
	            this.state = 90;
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
	    this.enterRule(localctx, 18, FireParser.RULE_primitiveEntity);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FireParser.T__0) | (1 << FireParser.T__8) | (1 << FireParser.T__9) | (1 << FireParser.T__10))) !== 0))) {
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
	    this.enterRule(localctx, 20, FireParser.RULE_value);
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FireParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.match(FireParser.STRING);
	            break;
	        case FireParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.match(FireParser.NUMBER);
	            break;
	        case FireParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.jsonObject();
	            break;
	        case FireParser.T__14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.arr();
	            break;
	        case FireParser.T__11:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.match(FireParser.T__11);
	            break;
	        case FireParser.T__12:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
	            this.match(FireParser.T__12);
	            break;
	        case FireParser.T__13:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 101;
	            this.match(FireParser.T__13);
	            break;
	        case FireParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 102;
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
	    this.enterRule(localctx, 22, FireParser.RULE_arr);
	    var _la = 0; // Token type
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.match(FireParser.T__14);
	            this.state = 106;
	            this.value();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FireParser.T__5) {
	                this.state = 107;
	                this.match(FireParser.T__5);
	                this.state = 108;
	                this.value();
	                this.state = 113;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 114;
	            this.match(FireParser.T__15);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.match(FireParser.T__14);
	            this.state = 117;
	            this.match(FireParser.T__15);
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
	    this.enterRule(localctx, 24, FireParser.RULE_bool);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        _la = this._input.LA(1);
	        if(!(_la===FireParser.T__11 || _la===FireParser.T__12)) {
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
FireParser.LET = 17;
FireParser.PRINT = 18;
FireParser.INSIDE = 19;
FireParser.NUMBER = 20;
FireParser.STRING = 21;
FireParser.IDENTIFIER = 22;
FireParser.WS = 23;

FireParser.RULE_compilationUnit = 0;
FireParser.RULE_stmt = 1;
FireParser.RULE_relationStmt = 2;
FireParser.RULE_assignStmt = 3;
FireParser.RULE_printStmt = 4;
FireParser.RULE_json = 5;
FireParser.RULE_jsonObject = 6;
FireParser.RULE_variableName = 7;
FireParser.RULE_keyValuePair = 8;
FireParser.RULE_primitiveEntity = 9;
FireParser.RULE_value = 10;
FireParser.RULE_arr = 11;
FireParser.RULE_bool = 12;

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

	EOF() {
	    return this.getToken(FireParser.EOF, 0);
	};

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

	primitiveEntity() {
	    return this.getTypedRuleContext(PrimitiveEntityContext,0);
	};

	LET() {
	    return this.getToken(FireParser.LET, 0);
	};

	arr() {
	    return this.getTypedRuleContext(ArrContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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
FireParser.JsonContext = JsonContext; 
FireParser.JsonObjectContext = JsonObjectContext; 
FireParser.VariableNameContext = VariableNameContext; 
FireParser.KeyValuePairContext = KeyValuePairContext; 
FireParser.PrimitiveEntityContext = PrimitiveEntityContext; 
FireParser.ValueContext = ValueContext; 
FireParser.ArrContext = ArrContext; 
FireParser.BoolContext = BoolContext; 
