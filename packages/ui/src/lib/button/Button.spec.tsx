import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button>hi</Button>);
    expect(baseElement).toBeTruthy();
    expect(baseElement.textContent).toEqual("hi");
  });
});
