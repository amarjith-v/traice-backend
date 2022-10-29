const express = require("express");
var imageRouter = require('./routes/image-route');
const app = express();
var cors = require('cors')
const port = 8080;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.static('public/images'));
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use('/api/v1/', imageRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});