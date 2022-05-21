require('dotenv').config()
const express = require("express");
const sequelize = require('./db')

const cors = require("cors");

const router = require('./routes/index')
const path =require("path")

const PORT=process.env.PORT || 5000;
const app = express();
const errorHandler=require('./middleware/ErrorHandlingMiddleware')
app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, "my-app/public")))
}

console.log(__dirname)
console.log(path.join(__dirname, "my-app/public"))
app.use(router);


app.use(errorHandler)

/*app.get('/', (req,res)=>{
    res.status(200).json({message: 'WORKING!'})

})*/

const start = async () => {
    try {
        
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e){
        console.log(e);
    }
}

start()

/*app.listen(PORT, () => console.log(`server started on port ${PORT}`))*/
