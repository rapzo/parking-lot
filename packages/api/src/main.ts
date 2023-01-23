import * as express from "express";
import * as path from "path";

import { routes } from "./app/routes";

const port = process.env.PORT;

if (!port) {
  console.error(`PORT not defined as env var: ${port}`);
  process.exit(0);
}

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/api", routes);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
