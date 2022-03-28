export default class Visitor {
    objects = {};
    relations = {};
    arrays = {};

    visitChildren(ctx) {
        // handle error
           if(!ctx.children){
             let line = ctx.start.line;
             let column = ctx.start.column;
             let message = ctx.message;
             console.log(`Error at line ${line} column ${column} : ${message}`);
           }

        if (!ctx) {
            return;
        }
        if (ctx.children) {
            return ctx.children.map(child => {
                if (child.children && child.children.length !== 0) {

                    if (child.constructor.name === 'AssignStmtContext') {
                        let primitiveType = child.children[0].text;
                        let objName = child.children[1].text;
                        let objValues = child.children[3].text;

                        if (child.children[0].constructor.name === 'PrimitiveEntityContext') {

                            let obj = {
                                name: objName,
                                type: primitiveType,
                                values: JSON.parse(objValues)
                            }
                            this.objects[objName] = obj;
                        }

                        if (child.children[3].constructor.name === 'ArrContext') {
                            let arrValues = child.children[3].text.slice(1, -1).split(',');

                            let arr = {
                                name: objName,
                                type: "array",
                                values: arrValues.map(value => {
                                    if (this.objects[value]) {
                                        return this.objects[value].values;
                                    }
                                    if (this.arrays[value]) {
                                        return this.arrays[value].values;
                                    }
                                    if (this.relations[value]) {
                                        return this.relations[value].values;
                                    }
                                })
                            }
                            this.arrays[objName] = arr;
                        }

                    }
                    if (child.constructor.name === 'RelationStmtContext') {
                        let primitiveType = child.children[0].text;
                        let relationENT1 = child.children[1].text;
                        let relationType = child.children[2].text;
                        let relationENT2 = child.children[3].text;
                        let relationName = child.children[5].text;
                        let relationValue = child.children[7].text;

                        let relation = {
                            name: relationName,
                            type: primitiveType,
                            entity1: relationENT1,
                            entity2: relationENT2,
                            values: JSON.parse(relationValue)
                        }

                        this.relations[relationName] = relation;
                    }
                    if (child.constructor.name === 'PrintStmtContext') {
                        let printValue = child.children[1].text;

                        if (this.objects[printValue]) {
                            console.log(this.objects[printValue]);
                        }

                        if (this.relations[printValue]) {
                            console.log(this.relations[printValue]);
                        }
                        if (this.arrays[printValue]) {
                            console.log(this.arrays[printValue]);
                        }

                    }

                    return child.accept(this);
                } else {
                    return child.text;
                }
            });
        }

    }
    getObjects() {
        return this.objects;
    }
    getRelations() {
        return this.relations;
    }
    getArrays() {
        return this.arrays;
    }

}

