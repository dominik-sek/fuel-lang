# Fuel Language
fuel language is a simple DSL based on this [model]().
Using [ANTLR4](https://www.antlr.org/) :
* I wrote a simple [grammar](https://github.com/gothic459/fuel-lang/blob/main/front/src/parser/Fire.g4)
* Used [antlr4ts](https://github.com/tunnelvisionlabs/antlr4ts) to generate a [parser](https://github.com/gothic459/fuel-lang/blob/main/front/src/parser/FireParser.ts) and a [lexer](https://github.com/gothic459/fuel-lang/blob/main/front/src/parser/FireLexer.ts) targetting TypeScript
* In order to output the errors to my custom console I had to customize the ANTLR basic error listener avaliable [here ](https://github.com/gothic459/fuel-lang/blob/main/front/src/parser/FireErrorListener.ts)
* I used the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern) so I used the package to [generate it as well](https://github.com/gothic459/fuel-lang/blob/main/front/src/parser/FireVisitor.ts)

After generating the parser, lexer and a basic visitor I implemented a [custom visitor](https://github.com/gothic459/fuel-lang/blob/main/front/src/parser/Visitor.ts) that allowed to 
traverse the parse tree and output valid code.


 
# Documentation


## Types
according to the [model]() we distinguish between 4 primitive types:

* **ENT**
defines an Entity
eg.
```
    ENT KONTENER_0001 = {
        "entity_type": "Kontener",
        "entitiy_name": "Kontener nr1"
    }
```
		
* **ACT**
defines an Activity, requires **result** and **entitiy** field
```
    ACT POMIAR_TEMPERATURY_0002 = {
        "type":"pomiar temperatury",
        "result":"25",
        "entity": "CZUJNIK_0002"
    }
```
* **EVT**
defines an Event
requires a **goal** field
```
    EVT ALERT_0002 = {
        "name":"alert nr2 sredni stopien zagrozenia",
        "goal":"powiadom ochrone",
        "location": "ul. Warszawska 15A, 42-200 Częstochowa, I piętro, pierwszy kontener od okna",
        "subject": "CZUJNIK_0002",
        "state": "active"
    }
```
* **REL [ENT] => [ENT] as**
defines a Relation between two entity objects
```
    REL PALIWO_0002 => KONTENER_0002 as REL_0004 = {
        "name": "Paliwo 2 znajduje sie w Kontenerze 2",
        "state": "active"
    }
```
---
### *Other types*
* number
* int
* bool
* string
* number
* array
* object



## Statements
* assignment
	*  `let` **variableName** `=` **array | value**
* print
	* `print` **definedVariable**
* relation
	* ` REL` **definedVariable** `=>` **definedVariable** `as` **newVariableName**
* ifThenDo
	* `IF `**ACT**`.`**fieldRef** `operator` **numberType** `DO` **EVT**`.`**fieldRef**
```
IF POMIAR_TEMPERATURY_0001.result > 30
DO ALERT_0001.goal 
```
results in
```
invoker: CZUJNIK_0001
activity: POMIAR_TEMPERATURY_0001
event: alert nr1 najwyzszy stopien zagrozenia
eventGoal: powiadom ochrone, straz pozarna, wojsko
eventLocation: ul. Warszawska 15A, 42-200 Częstochowa, I piętro, pierwszy kontener od okna
invokerDesc: Czujnik1 znajduje sie w Kontenerze 1
```

## Comments
`//this is a single line comment`
`/*
this is a multi-line comment 
*/`


