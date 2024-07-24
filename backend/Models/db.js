const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CON;

mongoose.connect(mongo_url)
.then(() =>{
    console.log('MongoDB Connecetd..')
}).catch((err)=>{
    console.log('MongoDB Connected Error:',err);
});
