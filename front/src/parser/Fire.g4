
grammar Fire;

compilationUnit: stmt* EOF;
stmt:
    assignStmt
    | printStmt
    | relationStmt
    | ifThenDoStmt
;

//use REL to represent relational operators
relationStmt: 'REL' variableName '=>' variableName 'as' variableName '=' value;
assignStmt: (primitiveEntity | LET) variableName '=' (arr | value);
printStmt: PRINT (STRING | value);
//check if higher lower etc
ifThenDoStmt: 'IF' variableName (objectChildReference) operatorNumberPair 'DO' variableName objectChildReference; 

json
    : jsonObject* EOF
    ;

jsonObject
    : '{' (keyValuePair (',' keyValuePair)*)? '}'
    | '{' '}'
    ;


objectChildReference
    : '.' variableName
    ;
variableName
    : IDENTIFIER
    ;

keyValuePair
    : (IDENTIFIER | STRING) ':' (value | jsonObject)
    ;

valueOperators
    : '<'
    | '<='
    | '>'
    | '>='
    | '=='
    ;

operatorNumberPair   
      : valueOperators value
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
    :   [ \t\r\n]+ -> channel(HIDDEN)
    ;