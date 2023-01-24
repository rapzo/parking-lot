import { Router } from "express";
import { ParkingLotConfig } from "@parking-lot/types";

import { createRootRoutes } from "./root";
import { createSectionsRoutes } from "./sections";

export const createRoutes = ({
  // name,
  sections,
}: // spotsPerSection,
ParkingLotConfig) => {
  const routes = Router();

  routes.use(createRootRoutes);
  routes.use(createSectionsRoutes);

  return routes;
};
