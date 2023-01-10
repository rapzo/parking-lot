import {
  getAvailableParkingSpots,
  getSections,
  getSensorsFrom,
  getSensorStatus,
} from "./main"

describe("Parking Lot Tests", () => {

  describe("getSection", () => {
    it("should get all the available sections from the parking lot", () => {
      expect(getSections()).resolves.toStrictEqual(["A", "B", "C", "F"])
    })
  })

  describe("getSensorsFrom", () => {
    it("should get the available sensors from section #A", () => {
      expect(getSensorsFrom("A")).resolves.toStrictEqual([1, 2])
    })

    it("should get the available sensors from section #B", () => {
      expect(getSensorsFrom("B")).resolves.toStrictEqual([5])
    })

    const cases = ["c", "d", "f"]
    cases.forEach(sectionId => {
      it(`should get the available sensors from section #${sectionId.toLocaleUpperCase()}`, () => {
        expect(getSensorsFrom(sectionId)).resolves.toStrictEqual([])
      })
    });

    it("should throw an error when sectionId is not found", () => {
      const dummySection = "X"
      expect(
        () => getSensorsFrom(dummySection)
      ).rejects.toThrowError(
        `Parking Lot Section #${dummySection} doesn't exist`
      )
    })
  })

  describe('getSensorStatus', () => {
    it('should return true when the sensor is active', () => {
      expect(getSensorStatus("A", 1)).resolves.toStrictEqual(true)
    })
  })

  describe("getAvailableParkingSpots", () => {
    it("should return the list of available parking spots", async () => {
      const expected = ["A#1", "A#2", "B#5"]
      const result = await getAvailableParkingSpots()

      expect(result).toStrictEqual(expected)
    })
  })
})
