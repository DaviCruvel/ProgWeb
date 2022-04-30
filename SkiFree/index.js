import express from "express";
import router from "./src/router/router.js";
import { engine } from "express-handlebars";

const app = express();
const PORT = 4444;
const morgan = require("morgan");

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/src/views`);

app.use(router);
app.use(morgan("combined"));

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
})