import { Router } from "express";
import { getAvailableParkingSpots } from "@parking-lot/parking-lot-api";

export const root = Router();

root.get("/", async (_req, res) => {
  return res.send("hi");
});

root.get("/status", async (_req, res) => {
  return res.json(await getAvailableParkingSpots());
});
