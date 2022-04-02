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
	public static readonly LET = 17;
	public static readonly PRINT = 18;
	public static readonly INSIDE = 19;
	public static readonly NUMBER = 20;
	public static readonly STRING = 21;
	public static readonly IDENTIFIER = 22;
	public static readonly WS = 23;

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
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "LET", "PRINT", 
		"INSIDE", "NUMBER", "STRING", "EXP", "INT", "ESC", "UNICODE", "HEX", "SAFECODEPOINT", 
		"IDENTIFIER", "WS",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x19\xC6\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v" +
		"\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x05\x15\x84\n\x15" +
		"\x03\x15\x03\x15\x03\x15\x06\x15\x89\n\x15\r\x15\x0E\x15\x8A\x05\x15\x8D" +
		"\n\x15\x03\x15\x05\x15\x90\n\x15\x03\x16\x03\x16\x03\x16\x07\x16\x95\n" +
		"\x16\f\x16\x0E\x16\x98\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\x9E" +
		"\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18\xA5\n\x18\f\x18" +
		"\x0E\x18\xA8\v\x18\x05\x18\xAA\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\xAF" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1D\x06\x1D\xBC\n\x1D\r\x1D\x0E\x1D\xBD\x03\x1E\x06" +
		"\x1E\xC1\n\x1E\r\x1E\x0E\x1E\xC2\x03\x1E\x03\x1E\x02\x02\x02\x1F\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
		"\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10" +
		"\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02" +
		"\x02/\x02\x021\x02\x023\x02\x025\x02\x027\x02\x029\x02\x18;\x02\x19\x03" +
		"\x02\v\x03\x022;\x04\x02GGgg\x04\x02--//\x03\x023;\n\x02$$11^^ddhhppt" +
		"tvv\x05\x022;CHch\x05\x02\x02!$$^^\x06\x022;C\\aac|\x05\x02\v\f\x0F\x0F" +
		"\"\"\x02\xCB\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x029" +
		"\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x03=\x03\x02\x02\x02\x05A\x03\x02" +
		"\x02\x02\x07D\x03\x02\x02\x02\tG\x03\x02\x02\x02\vI\x03\x02\x02\x02\r" +
		"K\x03\x02\x02\x02\x0FM\x03\x02\x02\x02\x11O\x03\x02\x02\x02\x13Q\x03\x02" +
		"\x02\x02\x15U\x03\x02\x02\x02\x17Y\x03\x02\x02\x02\x19]\x03\x02\x02\x02" +
		"\x1Bb\x03\x02\x02\x02\x1Dh\x03\x02\x02\x02\x1Fm\x03\x02\x02\x02!o\x03" +
		"\x02\x02\x02#q\x03\x02\x02\x02%u\x03\x02\x02\x02\'{\x03\x02\x02\x02)\x83" +
		"\x03\x02\x02\x02+\x91\x03\x02\x02\x02-\x9B\x03\x02\x02\x02/\xA9\x03\x02" +
		"\x02\x021\xAB\x03\x02\x02\x023\xB0\x03\x02\x02\x025\xB6\x03\x02\x02\x02" +
		"7\xB8\x03\x02\x02\x029\xBB\x03\x02\x02\x02;\xC0\x03\x02\x02\x02=>\x07" +
		"T\x02\x02>?\x07G\x02\x02?@\x07N\x02\x02@\x04\x03\x02\x02\x02AB\x07?\x02" +
		"\x02BC\x07@\x02\x02C\x06\x03\x02\x02\x02DE\x07c\x02\x02EF\x07u\x02\x02" +
		"F\b\x03\x02\x02\x02GH\x07?\x02\x02H\n\x03\x02\x02\x02IJ\x07}\x02\x02J" +
		"\f\x03\x02\x02\x02KL\x07.\x02\x02L\x0E\x03\x02\x02\x02MN\x07\x7F\x02\x02" +
		"N\x10\x03\x02\x02\x02OP\x07<\x02\x02P\x12\x03\x02\x02\x02QR\x07G\x02\x02" +
		"RS\x07P\x02\x02ST\x07V\x02\x02T\x14\x03\x02\x02\x02UV\x07C\x02\x02VW\x07" +
		"E\x02\x02WX\x07V\x02\x02X\x16\x03\x02\x02\x02YZ\x07G\x02\x02Z[\x07X\x02" +
		"\x02[\\\x07V\x02\x02\\\x18\x03\x02\x02\x02]^\x07v\x02\x02^_\x07t\x02\x02" +
		"_`\x07w\x02\x02`a\x07g\x02\x02a\x1A\x03\x02\x02\x02bc\x07h\x02\x02cd\x07" +
		"c\x02\x02de\x07n\x02\x02ef\x07u\x02\x02fg\x07g\x02\x02g\x1C\x03\x02\x02" +
		"\x02hi\x07p\x02\x02ij\x07w\x02\x02jk\x07n\x02\x02kl\x07n\x02\x02l\x1E" +
		"\x03\x02\x02\x02mn\x07]\x02\x02n \x03\x02\x02\x02op\x07_\x02\x02p\"\x03" +
		"\x02\x02\x02qr\x07n\x02\x02rs\x07g\x02\x02st\x07v\x02\x02t$\x03\x02\x02" +
		"\x02uv\x07r\x02\x02vw\x07t\x02\x02wx\x07k\x02\x02xy\x07p\x02\x02yz\x07" +
		"v\x02\x02z&\x03\x02\x02\x02{|\x07k\x02\x02|}\x07p\x02\x02}~\x07u\x02\x02" +
		"~\x7F\x07k\x02\x02\x7F\x80\x07f\x02\x02\x80\x81\x07g\x02\x02\x81(\x03" +
		"\x02\x02\x02\x82\x84\x07/\x02\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03" +
		"\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x8C\x05/\x18\x02\x86\x88\x07" +
		"0\x02\x02\x87\x89\t\x02\x02\x02\x88\x87\x03\x02\x02\x02\x89\x8A\x03\x02" +
		"\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02" +
		"\x02\x02\x8C\x86\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02" +
		"\x02\x02\x8E\x90\x05-\x17\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02" +
		"\x02\x02\x90*\x03\x02\x02\x02\x91\x96\x07$\x02\x02\x92\x95\x051\x19\x02" +
		"\x93\x95\x057\x1C\x02\x94\x92\x03\x02\x02\x02\x94\x93\x03\x02\x02\x02" +
		"\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02" +
		"\x97\x99\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9A\x07$\x02\x02" +
		"\x9A,\x03\x02\x02\x02\x9B\x9D\t\x03\x02\x02\x9C\x9E\t\x04\x02\x02\x9D" +
		"\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F" +
		"\xA0\x05/\x18\x02\xA0.\x03\x02\x02\x02\xA1\xAA\x072\x02\x02\xA2\xA6\t" +
		"\x05\x02\x02\xA3\xA5\t\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8\x03" +
		"\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xAA\x03" +
		"\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xA1\x03\x02\x02\x02\xA9\xA2\x03" +
		"\x02\x02\x02\xAA0\x03\x02\x02\x02\xAB\xAE\x07^\x02\x02\xAC\xAF\t\x06\x02" +
		"\x02\xAD\xAF\x053\x1A\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAD\x03\x02\x02" +
		"\x02\xAF2\x03\x02\x02\x02\xB0\xB1\x07w\x02\x02\xB1\xB2\x055\x1B\x02\xB2" +
		"\xB3\x055\x1B\x02\xB3\xB4\x055\x1B\x02\xB4\xB5\x055\x1B\x02\xB54\x03\x02" +
		"\x02\x02\xB6\xB7\t\x07\x02\x02\xB76\x03\x02\x02\x02\xB8\xB9\n\b\x02\x02" +
		"\xB98\x03\x02\x02\x02\xBA\xBC\t\t\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC" +
		"\xBD\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE" +
		":\x03\x02\x02\x02\xBF\xC1\t\n\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC2" +
		"\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4" +
		"\x03\x02\x02\x02\xC4\xC5\b\x1E\x02\x02\xC5<\x03\x02\x02\x02\x0F\x02\x83" +
		"\x8A\x8C\x8F\x94\x96\x9D\xA6\xA9\xAE\xBD\xC2\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FireLexer.__ATN) {
			FireLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FireLexer._serializedATN));
		}

		return FireLexer.__ATN;
	}

}

