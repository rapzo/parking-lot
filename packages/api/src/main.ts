import * as express from "express";
import * as path from "path";

import { createRoutes } from "./routes";

// Server config
const port = process.env.PORT;
const prefix = process.env.PREFIX;

// API config
const name = process.env.NAME || "Craftable";
const sections = Number(process.env.SECTIONS) || 5;
const spotsPerSection = Number(process.env.SPOTS_PER_SECTION) || 20;

if (!port) {
  console.error(`PORT not defined as env var: ${port}`);
  process.exit(0);
}

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(`/${prefix}`, createRoutes({ name, sections, spotsPerSection }));

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/${prefix}`);
});
server.on("error", console.error);
