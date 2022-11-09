import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../../test-utils";
import { AppBar } from "./AppBar";

describe("AppBar", () => {
  it("should have button", () => {
    renderWithRedux(<AppBar />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("App snapshot", () => {
    const view = renderWithRedux(<AppBar />);
    expect(view).toMatchSnapshot();
  });
});
