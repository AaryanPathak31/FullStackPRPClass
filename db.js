const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/sectiond',{})

.then((data)=>console.log("Databse Connected"))
.catch((err)=> console.log("Error" + err));