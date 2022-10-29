const express = require("express");
var imageRouter = require('./routes/image-route');
const app = express();
const port = 8080;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use('/api/v1/', imageRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});