const express = require("express");
const path = require("path");
const app = express();
require("./src/db/conn");
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));


app.get("/test", (req, res) => {
    res.send("Hello From App Folder");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})