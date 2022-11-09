import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../../../test-utils";
import { ProcessPage } from "./ProcessPage";

describe("Process", () => {
  it("should have progressbar", () => {
    renderWithRedux(<ProcessPage />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
