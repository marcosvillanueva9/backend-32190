import { Application, config } from "../deps.ts";

import { router } from "./routes/productos.ts";
import { logger } from "./middlewares/index.ts";

const { PORT } = config()

const app = new Application()

app.use(logger) //logger
app.use(router.routes()) //router

console.log(`Escuchando en el puerto ${PORT}`);

await app.listen(`:${PORT}`)
