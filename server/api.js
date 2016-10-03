import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());


app.post("/feedback", (req, res) => {
    console.log(req.headers);
});


app.listen(27017, () => {
    console.log("server is running");
});