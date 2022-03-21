
grammar Fire;

compilationUnit: stmt*;
stmt:
    assignStmt
    | printStmt
;

assignStmt: LET (variableName | entityObject) EQ (jsonObject | string | arr);
printStmt: PRINT (jsonObject | string | entityObject | arr);


json
    : jsonObject* EOF
    ;

jsonObject
    : '{' (keyValuePair (',' keyValuePair)*)? '}'
    | '{' '}'
    ;

entityObject
    : (primitiveEntity nameValuePair);

variableName
    : IDENTIFIER
    ;

keyValuePair
    : IDENTIFIER ':' (value | jsonObject | entityObject)
    ;
nameValuePair
    : '-' IDENTIFIER
    ;
primitiveEntity
    : 'ENT' //entity
    | 'ACT' //activity
    | 'EVT' //event
    | 'REL' //relation
    ;


LET : 'let';
EQ : '=';
PRINT : 'print';

string 
    : STRING
    ;
value
   : STRING
   | NUMBER
   | jsonObject
   | arr
   | 'true'
   | 'false'
   | 'null'
   | entityObject
   ;


arr
   : '[' value (',' value)* ']'
   | '[' ']'
   ;

NUMBER
   : '-'? INT ('.' [0-9] +)? EXP?
   ;

fragment EXP
   : [Ee] [+\-]? INT
   ;

fragment INT
   : '0' | [1-9] [0-9]*
   ;

STRING
   : '"' (ESC | SAFECODEPOINT)* '"'
   ;

fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;
fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;
fragment HEX
   : [0-9a-fA-F]
   ;
fragment SAFECODEPOINT
   : ~ ["\\\u0000-\u001F]
   ;

bool
    : 'true'
    | 'false'
    ;

IDENTIFIER
    :   [A-Za-z0-9_]+
    ;

WS
    :   [ \t\r\n]+ -> skip
    ;