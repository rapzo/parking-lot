import { waitFor } from "./wait-for";

// // obter lista de IDs das secções
// async getSections(): Promise<string[]>

// // obetr lista de IDs dos sensores ativos
// async getSensorsFrom(sectionId): Promise<number[][]>

// // estado do sensor
// async getSensorStatus(sectonId, sensorId): Promise<boolean>

// // obter lista de lugares livres num formato "flat":
// // ["A#1", "A#2", "B#5"] são os lugares livres
// async getAvailableParkingSpots(): Promise<string[]>

export async function getSections(): Promise<string[]> {
  await waitFor(3000);

  return ["A", "B", "C", "F"];
}

// [
//   [x, x, x, x],
//   [x, x, x, x],
// ]
export async function getSensorsFrom(sectionId: string): Promise<number[]> {
  await waitFor(3000);

  switch (sectionId.toLocaleUpperCase()) {
    case "A":
      return [1, 2];
    case "B":
      return [5];
    case "C":
      return [];
    case "D":
      return [];
    case "F":
      return [];
    default:
      throw new Error(`Parking Lot Section #${sectionId} doesn't exist`);
  }
}

export async function getSensorStatus(
  sectonId: string,
  sensorId: number,
): Promise<boolean> {
  await waitFor(1500);
  return true;
}

export async function getAvailableParkingSpots(): Promise<string[]> {
  const sections = await getSections();
  const sensors = sections.map(async (sectionId) => {
    return await getSensorsFrom(sectionId);
  });

  return Promise.resolve(sections);
}
