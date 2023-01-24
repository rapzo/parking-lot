import { Router } from "express";
import { getAvailableParkingSpots } from "@parking-lot/parking-lot-api";
import type { ParkingLotConfig } from "@parking-lot/types";

export const createRootRoutes = ({
  name,
  sections,
  spotsPerSection,
}: ParkingLotConfig) => {
  const router = Router();

  router.get("/", async (_req, res) => {
    return res.json({
      name,
      sections,
      spotsPerSection,
    });
  });

  router.get("/status", async (_req, res) => {
    return res.json(await getAvailableParkingSpots());
  });

  return router;
};
