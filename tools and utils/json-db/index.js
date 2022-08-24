const { JSONdb } = require('./lib/index');

// eslint-disable-next-line no-undef
let db = new JSONdb({
    name: 'database',
    path: __dirname,
    version: '1.0.0'
});

// db.createCollection('users');

// db.getCollection('users').insert({ name: 'César Hilário',  code: 1,});
// db.getCollection('users').insert({ name: 'William Silva', code: 2});
// db.getCollection('users').insert({ name: 'Lucia Luzinete', code: 3});

// db.save();



// const result = db.getCollection('users').findOne();

// const dataToInsert = db.getCollection('users').insert({
//     name: 'Guilherme Robson',
//     code: result.code + 1
// });

// db.save();

// const result1 = db.getCollection('users').findOne();

// console.log(result1);

// console.log(db.getCollection('users').findOne({ code: 1 }).update({

// }));
console.log(db.getCollection('users').update({ code: 2 }, { name: 'WILLIAM SILVA'}));