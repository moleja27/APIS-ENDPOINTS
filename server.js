import express from "express"
const app = express();

const PORT = 3000;
''
app.get('/', (req, res) => {
    res.send("welcome to our API");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
