// const mingo = require('mingo');
const fs = require('fs');

function ObjectID() {
    let timestamp = (new Date().getTime() / 1000 | 0).toString(16);

    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
}

class JSONdb {
    constructor(options, mode = '') {
        this.options = options;

        if (mode === 'create')
            this.db = this.createDatabase();
        else
            this.db = this.load();
    }

    createDatabase() {
        const { name, path, version } = this.options;

        const dbStructure = {
            name: name,
            version: version,
            dateCreated: new Date(),
            dateModified: new Date(),
            collections: []
        };

        fs.writeFileSync(`${path}/${name}.json`, JSON.stringify(dbStructure));

        return dbStructure;
    }

    createCollection(name) {
        const collection = { name: name, data: [] }

        this.db.collections.push(collection);
    }

    editDocument(query){
        
    }

    getCollection(name = '') {
        if (name) {
            let collection;

            this.db.collections.filter((value) => {
                if (value.name == name) collection = value;
            });

            collection.find = () => {
                return collection.data;
            }

            collection.findOne = (query) => { 
                if (!query) {
                    return collection.data[collection.data.length - 1];
                } else {
                    const result = collection.mountQuery(query);

                    return result;
                }
            }

            collection.insert = (document) => {
                document._id = ObjectID();
                collection.data.push(document);
            }

            collection.mountQuery = (query) => {
                const queryKeys = Object.keys(query);
                const queryValues = Object.values(query);
                const result = [];

                collection.data.forEach(document => {
                    let hasProperty = false;

                    queryKeys.map((key, index) => {
                        if(document[key] === queryValues[index]) 
                            hasProperty = true
                    });

                    (hasProperty) ? result.push(document) : false;
                });


                return result;
            }

            collection.update = (query, dataToUpdate) => {
                const data = collection.find();
                const documentToUpdade = collection.findOne(query)[0];
                let indexOfDocumentToUpdate = -1; 


                for(let index = 0; index < data.length; index++){
                    if(data[index]._id == documentToUpdade._id){
                        indexOfDocumentToUpdate = index;
                    }
                }

                for(let property in dataToUpdate){
                    documentToUpdade[property] = dataToUpdate[property];
                }

                data.splice(indexOfDocumentToUpdate, 1, documentToUpdade);

            }

            return collection;
        } else {
            throw 'Please insert a name to get a collection';
        }
    }

    load() {
        const { name, path } = this.options;
        const dbContent = fs.readFileSync(`${path}/${name}.json`, 'utf-8');

        return JSON.parse(dbContent);
    }

    save() {
        const { name, path } = this.options;

        fs.writeFileSync(`${path}/${name}.json`, JSON.stringify(this.db));
    }
}

module.exports = { JSONdb };