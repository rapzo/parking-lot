import { render } from "@testing-library/react";

import Tab from "./Tab";

describe("Tab", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Tab name="test" href="test" current={true} />);
    expect(baseElement).toBeTruthy();
  });
});
