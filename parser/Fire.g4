grammar Fire;

compilationUnit: stmt*;
stmt:
    assignStmt
    | printStmt
    | relationStmt
    | commentStmt
;
//use REL to represent relational operators
relationStmt: 'REL' variableName '=>' variableName 'as' variableName '=' value;
assignStmt: (primitiveEntity | LET) variableName '=' (arr | value);
printStmt: PRINT value;
commentStmt: comment;

comment
  :  '#' ~( '\r' | '\n' )*
  ;
  
json
    : jsonObject* EOF
    ;

jsonObject
    : '{' (keyValuePair (',' keyValuePair)*)? '}'
    | '{' '}'
    ;


variableName
    : IDENTIFIER
    ;

keyValuePair
    : (IDENTIFIER | STRING) ':' (value | jsonObject)
    ;

    
primitiveEntity
    : 'ENT' //entity
    | 'ACT' //activity
    | 'EVT' //event
    | 'REL' //relation
    ;


LET : 'let';
PRINT : 'print';
INSIDE : 'inside';

value
   : STRING
   | NUMBER
   | jsonObject
   | arr
   | 'true'
   | 'false'
   | 'null'
   | variableName
   ;


arr
   : '[' value (',' value)* ']'
   | '[' ']'
   ;

NUMBER
   : '-'? INT ('.' [0-9] +)? EXP?
   ;
STRING
   : '"' (ESC | SAFECODEPOINT)* '"'
   ;

fragment EXP
   : [Ee] [+\-]? INT
   ;

fragment INT
   : '0' | [1-9] [0-9]*
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