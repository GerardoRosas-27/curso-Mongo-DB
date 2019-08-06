//---Iniciar Mongo DB =  "mongo"
//-- use clientes
//-- show dbs
//---Crear Usuario DB
db.createUser({
    user: 'bruster',
     pwd: "bruster",
      roles: ['readWrite', 'dbAdmin']
})

//--------INSERTAR----------

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

//------Insertar datos anidados
db.clientes.insert([
    { 
        firstName: 'rodolfo',
        lastName: 'Roas',
        direcion: {
            ciudad: "México",
            colonia: "narvarte"
        }
    },
    { firstName: 'Vianey', lastName: 'Roas'},
    { firstName: 'Elvia', lastName: 'Rodriguez'}  
])


//---------ELIMINAR--------
//----Eliminar un atributo que coincida con la busqueda
db.clientes.remove(
    { firstName : "isabel" }
)

//----Eliminar un atributo que coincida con la busqueda pero solo uno
db.clientes.remove(
    { firstName : "isabel" },
    { justOne: true }
)

//------ACTUALIZAR-----
//---Restar un valor de un atributo.
db.clientes.update(
    {_id: ObjectId("5d486d215237c39f52bafdfe")},
    { $inc: { age: -5 } }
)

//----Actualizar Dato
db.clientes.update(
    { firstName: 'Vianey'},
    { firstName: 'Vianey', lastName: 'Rosas', gender: 'femela'}
)

//----Eliminar un atributo de una colección
db.clientes.update(
    { _id: ObjectId("5d486d215237c39f52bafdfe") },
    { $unset: { age: 1 } }
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

//------------CONSULTAS--------
//--- Buscar datodos
db.clientes.find()

//----Mostrar datos formateados
db.clientes.find().pretty()

//--- Busacar datos con parametro de busqueda
db.clientes.find(
    { lastName: 'Rosas' }
)

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

//---- Consulta Con OR| > O < |
db.clientes.find(
    { $or: [ 
            { age: { $gt: 20 } },
            { age: { $lt: 80 } }
           ]
    } 
)

//---- Consulta Con AND| > Y < |
db.clientes.find(
    { $and: [ 
            { age: { $gt: 20 } },
            { age: { $lt: 80 } }
           ]
    } 
)

//---- Consulta Con AND| >= Y <= |
db.clientes.find(
    { $and: [ 
            { age: { $gte: 20 } },
            { age: { $lte: 80 } }
           ]
    } 
).pretty()

//----Ordenar consulta de menor a mayor
db.clientes.find().sort( { firstName: 1 } )
//----Ordenar consulta de mayor a menor
db.clientes.find().sort( { firstName: -1 } )

//----Consultas anidadas
db.clientes.find(
    { "direccion.ciudad": 'México' }
).pretty()

//-----Consultas con expreciones regulares
db.clientes.find(
    {
    firstName: { $regex: "roberto"  }
    }
).pretty()

//------Metodo Contar 
db.clientes.count()

//------Metodo Contar Con parametros de busqueda
db.clientes.find({ age: {$gt: 20 } }).count()

//------Limitar consulta
db.clientes.find().limit(4)


 



