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

//----Actualizar Dato
db.clientes.update(
    { firstName: 'Vianey'},
    {firstName: 'Vianey', lastName: 'Rosas', gender: 'femela'}
)

//--- Buscar datodos
db.clientes.find()

//--- Busacar datos con parametro de busqueda
db.clientes.find({lastName: 'Rosas'})

//---Insertar un nuevo atributo
db.clientes.update(
    { _id: ObjectId("5d4796f9b7279d878837b73c")},
    { $set: {age: 60} }
)