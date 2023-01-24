// // obter lista de IDs das secções
// async getSections(): Promise<string[]>

// // obetr lista de IDs dos sensores ativos
// async getSensorsFrom(sectionId): Promise<number[][]>

// // estado do sensor
// async getSensorStatus(sectonId, sensorId): Promise<boolean>

// // obter lista de lugares livres num formato "flat":
// // ["A#1", "A#2", "B#5"] são os lugares livres
// async getAvailableParkingSpots(): Promise<string[]>

export async function getSections(sections = 5): Promise<string[]> {
  // ASCII range for capital letters: 65->90
  if (sections < 1 || sections > 25) {
    throw new Error("Invalid number of sections");
  }

  return new Array(sections).fill(0).map((_, index) => {
    return String.fromCharCode(65 + index);
  });
}

// [
//   [x, x, x, x],
//   [x, x, x, x],
// ]
export async function getSensorsFrom(sectionId: string): Promise<number[]> {
  const sections = await getSections();

  if (!sections.includes(sectionId.toLocaleUpperCase())) {
    throw new Error(`Parking Lot Section #${sectionId} doesn't exist`);
  }

  switch (sectionId.toLocaleUpperCase()) {
    case "A":
      return [1, 2];
    case "B":
      return [5];
    case "C":
      return [];
    case "D":
      return [];
    case "E":
      return [];
    default:
      throw new Error(`Parking Lot Section #${sectionId} doesn't exist`);
  }
}

export async function getSensorStatus(
  sectonId: string,
  sensorId: number,
): Promise<boolean> {
  return true;
}

export async function getAvailableParkingSpots(): Promise<string[]> {
  const sections = await getSections();
  const sensors = sections.map(async (sectionId) => {
    return await getSensorsFrom(sectionId);
  });

  return Promise.resolve(sections);
}
