"use strict";

import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
});

app.post("/feedback", (req, res, next) => {

    setTimeout(() => {

        let formData = req.body;

        if(formData.feedback_name.length < 3){
            return next({
                status: 500,
                message: "failed"
            });
        }

        res.json({message: "success"});

    }, 2000);
    
});

app.use((err, req, res, next) => {
    res.status(err.status).send({
        message: err.message
    });
});


app.listen(27017, () => {
    console.log("server is running");
});