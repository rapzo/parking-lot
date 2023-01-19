import { getAvailableParkingSpots } from "@parking-lot/parking-lot-api";

console.time("ParkingLot");
getAvailableParkingSpots().catch(console.error);
console.timeEnd("ParkingLot");
