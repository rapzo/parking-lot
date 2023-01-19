import { getAvailableParkingSpots } from "@parking-lot/parking-lot-api";
import "./main";

jest.mock("@parking-lot/parking-lot-api", () => ({
  getAvailableParkingSpots: jest.fn(() => Promise.resolve()),
}));

describe("Parking Lot NodeJS App", () => {
  test("getAvailableParkingSpots was called only once", () => {
    expect((getAvailableParkingSpots as jest.Mock).mock.calls.length).toEqual(
      1,
    );
  });
});
