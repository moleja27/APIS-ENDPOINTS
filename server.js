import express from "express"
const app = express();

const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome to our API");
});

app.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "Alejandra Marin" },
        { id: 2, name: "Rodrigo Martinez" },
        { id: 3, name: "Julieta Gomez" }
    ];

    res.json(users); // Envía los usuarios como una respuesta en formato JSON
});

app.post("/users", (req, res) => {
    const newUser = req.body;
    console.log(newUser); // Muestra el nuevo usuario en la consola

    res.json({
        message: "User added successfully",
        user: newUser // Devuelve el usuario enviado en la respuesta
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
