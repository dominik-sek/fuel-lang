// Generated from ./src/parser/Fire.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FireLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "LET", 
		"PRINT", "INSIDE", "NUMBER", "STRING", "EXP", "INT", "ESC", "UNICODE", 
		"HEX", "SAFECODEPOINT", "IDENTIFIER", "WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FireLexer._LITERAL_NAMES, FireLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FireLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FireLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Fire.g4"; }

	// @Override
	public get ruleNames(): string[] { return FireLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FireLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FireLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FireLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02!\xEB\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x05\x1D\xA9\n\x1D\x03\x1D\x03\x1D\x03\x1D\x06\x1D\xAE" +
		"\n\x1D\r\x1D\x0E\x1D\xAF\x05\x1D\xB2\n\x1D\x03\x1D\x05\x1D\xB5\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x07\x1E\xBA\n\x1E\f\x1E\x0E\x1E\xBD\v\x1E\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x05\x1F\xC3\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x07 \xCA\n \f \x0E \xCD\v \x05 \xCF\n \x03!\x03!\x03!\x05!\xD4\n!\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x06%\xE1\n%" +
		"\r%\x0E%\xE2\x03&\x06&\xE6\n&\r&\x0E&\xE7\x03&\x03&\x02\x02\x02\'\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
		"\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17" +
		"-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F" +
		"=\x02\x02?\x02\x02A\x02\x02C\x02\x02E\x02\x02G\x02\x02I\x02 K\x02!\x03" +
		"\x02\v\x03\x022;\x04\x02GGgg\x04\x02--//\x03\x023;\n\x02$$11^^ddhhppt" +
		"tvv\x05\x022;CHch\x05\x02\x02!$$^^\x06\x022;C\\aac|\x05\x02\v\f\x0F\x0F" +
		"\"\"\x02\xF0\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
		"\x02;\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x03M\x03" +
		"\x02\x02\x02\x05Q\x03\x02\x02\x02\x07T\x03\x02\x02\x02\tW\x03\x02\x02" +
		"\x02\vY\x03\x02\x02\x02\r\\\x03\x02\x02\x02\x0F_\x03\x02\x02\x02\x11a" +
		"\x03\x02\x02\x02\x13c\x03\x02\x02\x02\x15e\x03\x02\x02\x02\x17g\x03\x02" +
		"\x02\x02\x19i\x03\x02\x02\x02\x1Bk\x03\x02\x02\x02\x1Dn\x03\x02\x02\x02" +
		"\x1Fp\x03\x02\x02\x02!s\x03\x02\x02\x02#v\x03\x02\x02\x02%z\x03\x02\x02" +
		"\x02\'~\x03\x02\x02\x02)\x82\x03\x02\x02\x02+\x87\x03\x02\x02\x02-\x8D" +
		"\x03\x02\x02\x02/\x92\x03\x02\x02\x021\x94\x03\x02\x02\x023\x96\x03\x02" +
		"\x02\x025\x9A\x03\x02\x02\x027\xA0\x03\x02\x02\x029\xA8\x03\x02\x02\x02" +
		";\xB6\x03\x02\x02\x02=\xC0\x03\x02\x02\x02?\xCE\x03\x02\x02\x02A\xD0\x03" +
		"\x02\x02\x02C\xD5\x03\x02\x02\x02E\xDB\x03\x02\x02\x02G\xDD\x03\x02\x02" +
		"\x02I\xE0\x03\x02\x02\x02K\xE5\x03\x02\x02\x02MN\x07T\x02\x02NO\x07G\x02" +
		"\x02OP\x07N\x02\x02P\x04\x03\x02\x02\x02QR\x07?\x02\x02RS\x07@\x02\x02" +
		"S\x06\x03\x02\x02\x02TU\x07c\x02\x02UV\x07u\x02\x02V\b\x03\x02\x02\x02" +
		"WX\x07?\x02\x02X\n\x03\x02\x02\x02YZ\x07K\x02\x02Z[\x07H\x02\x02[\f\x03" +
		"\x02\x02\x02\\]\x07F\x02\x02]^\x07Q\x02\x02^\x0E\x03\x02\x02\x02_`\x07" +
		"}\x02\x02`\x10\x03\x02\x02\x02ab\x07.\x02\x02b\x12\x03\x02\x02\x02cd\x07" +
		"\x7F\x02\x02d\x14\x03\x02\x02\x02ef\x070\x02\x02f\x16\x03\x02\x02\x02" +
		"gh\x07<\x02\x02h\x18\x03\x02\x02\x02ij\x07>\x02\x02j\x1A\x03\x02\x02\x02" +
		"kl\x07>\x02\x02lm\x07?\x02\x02m\x1C\x03\x02\x02\x02no\x07@\x02\x02o\x1E" +
		"\x03\x02\x02\x02pq\x07@\x02\x02qr\x07?\x02\x02r \x03\x02\x02\x02st\x07" +
		"?\x02\x02tu\x07?\x02\x02u\"\x03\x02\x02\x02vw\x07G\x02\x02wx\x07P\x02" +
		"\x02xy\x07V\x02\x02y$\x03\x02\x02\x02z{\x07C\x02\x02{|\x07E\x02\x02|}" +
		"\x07V\x02\x02}&\x03\x02\x02\x02~\x7F\x07G\x02\x02\x7F\x80\x07X\x02\x02" +
		"\x80\x81\x07V\x02\x02\x81(\x03\x02\x02\x02\x82\x83\x07v\x02\x02\x83\x84" +
		"\x07t\x02\x02\x84\x85\x07w\x02\x02\x85\x86\x07g\x02\x02\x86*\x03\x02\x02" +
		"\x02\x87\x88\x07h\x02\x02\x88\x89\x07c\x02\x02\x89\x8A\x07n\x02\x02\x8A" +
		"\x8B\x07u\x02\x02\x8B\x8C\x07g\x02\x02\x8C,\x03\x02\x02\x02\x8D\x8E\x07" +
		"p\x02\x02\x8E\x8F\x07w\x02\x02\x8F\x90\x07n\x02\x02\x90\x91\x07n\x02\x02" +
		"\x91.\x03\x02\x02\x02\x92\x93\x07]\x02\x02\x930\x03\x02\x02\x02\x94\x95" +
		"\x07_\x02\x02\x952\x03\x02\x02\x02\x96\x97\x07n\x02\x02\x97\x98\x07g\x02" +
		"\x02\x98\x99\x07v\x02\x02\x994\x03\x02\x02\x02\x9A\x9B\x07r\x02\x02\x9B" +
		"\x9C\x07t\x02\x02\x9C\x9D\x07k\x02\x02\x9D\x9E\x07p\x02\x02\x9E\x9F\x07" +
		"v\x02\x02\x9F6\x03\x02\x02\x02\xA0\xA1\x07k\x02\x02\xA1\xA2\x07p\x02\x02" +
		"\xA2\xA3\x07u\x02\x02\xA3\xA4\x07k\x02\x02\xA4\xA5\x07f\x02\x02\xA5\xA6" +
		"\x07g\x02\x02\xA68\x03\x02\x02\x02\xA7\xA9\x07/\x02\x02\xA8\xA7\x03\x02" +
		"\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xB1\x05?" +
		" \x02\xAB\xAD\x070\x02\x02\xAC\xAE\t\x02\x02\x02\xAD\xAC\x03\x02\x02\x02" +
		"\xAE\xAF\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02" +
		"\xB0\xB2\x03\x02\x02\x02\xB1\xAB\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02" +
		"\xB2\xB4\x03\x02\x02\x02\xB3\xB5\x05=\x1F\x02\xB4\xB3\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5:\x03\x02\x02\x02\xB6\xBB\x07$\x02\x02\xB7" +
		"\xBA\x05A!\x02\xB8\xBA\x05G$\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03\x02" +
		"\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02" +
		"\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xBF\x07$" +
		"\x02\x02\xBF<\x03\x02\x02\x02\xC0\xC2\t\x03\x02\x02\xC1\xC3\t\x04\x02" +
		"\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02" +
		"\x02\xC4\xC5\x05? \x02\xC5>\x03\x02\x02\x02\xC6\xCF\x072\x02\x02\xC7\xCB" +
		"\t\x05\x02\x02\xC8\xCA\t\x02\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\xCD\x03" +
		"\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCF\x03" +
		"\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xC6\x03\x02\x02\x02\xCE\xC7\x03" +
		"\x02\x02\x02\xCF@\x03\x02\x02\x02\xD0\xD3\x07^\x02\x02\xD1\xD4\t\x06\x02" +
		"\x02\xD2\xD4\x05C\"\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02" +
		"\xD4B\x03\x02\x02\x02\xD5\xD6\x07w\x02\x02\xD6\xD7\x05E#\x02\xD7\xD8\x05" +
		"E#\x02\xD8\xD9\x05E#\x02\xD9\xDA\x05E#\x02\xDAD\x03\x02\x02\x02\xDB\xDC" +
		"\t\x07\x02\x02\xDCF\x03\x02\x02\x02\xDD\xDE\n\b\x02\x02\xDEH\x03\x02\x02" +
		"\x02\xDF\xE1\t\t\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02" +
		"\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3J\x03\x02\x02\x02" +
		"\xE4\xE6\t\n\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7" +
		"\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9" +
		"\xEA\b&\x02\x02\xEAL\x03\x02\x02\x02\x0F\x02\xA8\xAF\xB1\xB4\xB9\xBB\xC2" +
		"\xCB\xCE\xD3\xE2\xE7\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FireLexer.__ATN) {
			FireLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FireLexer._serializedATN));
		}

		return FireLexer.__ATN;
	}

}

