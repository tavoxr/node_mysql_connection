// const express= require('express')
// const app= require('./config/server')
const express= require('express')
const app= require('./config/server')




// Settings
app.set('port',process.env.PORT ||4000)


//Middlewares


//Routes

app.use(require('./app/routes/index'))



//listenning server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})


