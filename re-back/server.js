const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

//Database config
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log(
        "Error in MongoDB connection : " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);

//Port config

const PORT = process.env.PORT || 5000

//App config
const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
    res.send("Helloo from server")
})


app.listen(PORT, ()=>console.log(`Server listening from: ${PORT}`))

//Set routes

app.use('/books', require("./routes/bookRouter"))