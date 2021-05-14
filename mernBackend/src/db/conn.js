const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/Registration",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>{
    console.log(`connection is successful`);
}).catch(() =>{
    console.log(`No Connection`)
})