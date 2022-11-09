import pagesReducer, { setActivePage } from "modules/process/processSlice";

const initialState = {
  loadingCards: false,
  errorCards: undefined,
  activePageName: null,
  processCards: [],
  isDrawerOpen: false,
  isCardOpen: false,
  tableData: [],
  loadingTableData: false,
  errorTableData: undefined,
};

describe("processSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = pagesReducer(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });

  it("should set active page with 'setActivePage' action", () => {
    const action = { type: setActivePage.type, payload: "Processi" };

    const result = pagesReducer(initialState, action);

    expect(result.activePageName).toBe("Processi");
    expect(result.loadingCards).toBe(false);
    expect(result.errorCards).toBe(undefined);
  });
});
