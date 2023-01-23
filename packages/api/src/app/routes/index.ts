import { Router } from "express";

import { root } from "./root";
import { sections } from "./sections";

export const routes = Router();

routes.use(root);
routes.use(sections);
