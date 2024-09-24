import { globalConfig } from './config/config';
import { configDotenv } from "dotenv";
const express = require("express");
const cors = require("cors");
const PORT = globalConfig.PORT

const app = express();
configDotenv();

var corsOptions = {
    origin: `http://localhost:{process.env.PORT}`
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req: any, res: any) => {
    res.json({ message: "Welcome to bezkoder application." });
});

const db = require("../models");
db.mongoose
    .connect("", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err: any) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// set port, listen for requests
// const PORT = globalConfig.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});