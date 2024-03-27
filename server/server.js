const express = require("express")
const path = require("path")
const app = express()

app.get("/api", (req, res) => {
    res.sendFile(path.join(__dirname,"/09429500_sediment_discharge.json"));
});

app.listen(80, () => {
    console.log("Listening at port http://localhost:80");
})
