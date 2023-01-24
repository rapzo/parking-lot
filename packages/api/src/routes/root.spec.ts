import { root } from "./root";

describe("root test", () => {
  it("should mock express without us knowing", () => {
    expect(typeof root.get).toBe("function");
  });
});
