//---Iniciar Mongo DB =  "mongo"
//-- use clientes
//-- show dbs
//---Crear Usuario DB
db.createUser({
    user: 'bruster',
     pwd: "bruster",
      roles: ['readWrite', 'dbAdmin']
})

//---Insertar un solo dato
db.clientes.insert({
    firstName: 'Gerardo',
    lastName: 'Rosas'
})

//-----Insertar datos
db.clientes.insert([
    { firstName: 'Eduardo', lastName: 'Roas'},
    { firstName: 'Vianey', lastName: 'Roas'},
    { firstName: 'Elvia', lastName: 'Rodriguez'}  
])

db.clientes.insert([
    { firstName: 'Eduardo', lastName: 'Roas'},
    { firstName: 'Vianey', lastName: 'Roas'},
    { firstName: 'santos', lastName: 'Rodriguez', age: 20 },  
    { firstName: 'roberto', lastName: 'Rodriguez', age: 30 },
    { firstName: 'luis', lastName: 'Rodriguez', age: 10 }  
])

//----Actualizar Dato
db.clientes.update(
    { firstName: 'Vianey'},
    { firstName: 'Vianey', lastName: 'Rosas', gender: 'femela'}
)

//--- Buscar datodos
db.clientes.find()

//----Mostrar datos formateados
db.clientes.find().pretty()

//--- Busacar datos con parametro de busqueda
db.clientes.find(
    { lastName: 'Rosas' }
)

//---Insertar un nuevo atributo con su valor
db.clientes.update(
    { _id: ObjectId("5d486d215237c39f52bafdfe")},
    { $set: {age: 60} }
)

//---Incrementar un valor entero de un atributo.
db.clientes.update(
    {_id: ObjectId("5d486d215237c39f52bafdfe")},
    { $inc: { age: 5 } }
)

//---Restar un valor de un atributo.
db.clientes.update(
    {_id: ObjectId("5d486d215237c39f52bafdfe")},
    { $inc: { age: -5 } }
)

//----Eliminar un atributo de una colección
db.clientes.update(
    { _id: ObjectId("5d486d215237c39f52bafdfe") },
    { $unset: { age: 1 } }
)

//----Eliminar un atributo que coincida con la busqueda
db.clientes.remove(
    { firstName : "isabel" }
)

//----Eliminar un atributo que coincida con la busqueda pero solo uno
db.clientes.remove(
    { firstName : "isabel" },
    { justOne: true }
)
 
//-----Actualizar valores de los atributos pero si no esta insertar un nuevo dato
db.clientes.update(
    { firstName: "isabel" },
    { firstName: "isabel", lastName: "cristino"},
    { upsert: true }
) 
//-------Renombrar nombre de atributos de la collecion
db.clientes.update(
    { primerNombre : "isabel" },
    { $rename: { "primerNombre" : "firstName"} }
)
//------------ Consultas Avanzadas--------

//--------Ejemplos OR
db.clientes.find(
    { $or: [ 
             { firstName: 'isabel' },
             { firstName: 'elvia' } 
           ] 
    }
)

//----Menor < que
db.clientes.find(
    { age: { $lt: 30 } }
)

//-----Mayor > que
db.clientes.find(
    { age: { $gt: 30 } }
)








