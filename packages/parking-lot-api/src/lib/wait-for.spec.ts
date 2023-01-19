import { waitFor } from "./wait-for";

describe("waitFor", () => {
  it("should return a promise with the default wait time", () => {
    const result = waitFor();
    expect(result).toBeInstanceOf(Promise);
    expect(result).resolves.toEqual(500);
  });

  it("should return a promise with the custom wait time", () => {
    const result = waitFor(1000);
    expect(result).toBeInstanceOf(Promise);
    expect(result).resolves.toEqual(1000);
  });
});
