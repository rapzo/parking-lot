import { render } from "@testing-library/react";
import { TabConfig } from "./Tab";

import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("should render successfully", () => {
    const props: TabConfig[] = [{
      name: "tab1",
      href: "/",
      current: true,
    }, {
      name: "tab2",
      href: "/tab2",
      current: true,
    }]


    const { baseElement } = render(<Tabs tabs={props} />);
    expect(baseElement).toBeTruthy();
  });
});
