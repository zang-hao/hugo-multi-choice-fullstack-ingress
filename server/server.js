const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

app.get('/', (req, res) => {
    res.send("Hello World");
})

const db = require("./app/models")
db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(
        ()=>{
            console.log("Connected to the database");
            console.log(db.url)
    })
    .catch(
        ()=>{
            console.log("Cannot connect to the database");
            process.exit();
        });

//set router
require("./app/routes/makeQuiz.route")(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Sever connect to http://localhost:${PORT}`)
})