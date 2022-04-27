const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASE_URL);
const db= mongoose.connection;
db.on('connected', function(){
    console.log(`Connected to ${db.name} at  ${db.host}:${db.port}`)
})

module.exports = mongoose


//Nothing special just mongoose connection like we always had
//importing mongoose and DATABASE_URL From .env