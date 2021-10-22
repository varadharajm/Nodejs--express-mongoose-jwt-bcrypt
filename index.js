
const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const cookie = require("cookie-parser");
dotenv.config();

const Routes = require("./app/routes/user.route");

const db = require("./app/models/index");
const e = require("express");
db.mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true}).then(()=>{
        console.log("Database connected successfully");
    }).catch(err =>{
        console.log("Some thing error to connect to db : ", err);
    });

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cookie());

app.use('/',Routes);

const listener = app.listen(process.env.PROT || 3000, () =>{
    console.log(listener.address().port);
});
