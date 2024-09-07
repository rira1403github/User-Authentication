import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import connectDB from './database/connection.js';
import router from "./Router/routes.js";

const app = express()
const port = 8000

/**App Middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

/**Path where middleware function or routes will be mounted */
app.use('/api',router);

app.get('/', (req, res) => {
  res.status(201).json("Home Get Request")
})

/**Establish the connection only when valid connection is done */
connectDB().then(()=>{
  try{
    app.listen(port, () => {
      console.log(`Server coneected to port http://localhost:${port}`);
    })
  } catch (error){
    console.log("Cannot connect to the server");
    throw error;
  }
}).catch(error =>{
  console.log("Invalid Database connection...!!!",error);
  throw error;
})