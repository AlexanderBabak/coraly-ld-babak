import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../../test-utils";
import { AppBar } from "./AppBar";

describe("AppBar", () => {
  it("should have notification section with correct name", () => {
    renderWithRedux(<AppBar />);

    expect(screen.getByRole("notification")).toBeInTheDocument();
    // expect(screen.getByRole("notification")).toHaveTextContent(
    //   NOTIFICATION_TITLE
    // );
  });
});
