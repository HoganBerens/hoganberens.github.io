import renderer from "react-test-renderer";
import Dashboard from "./dashboard";

describe("Portfolio renders correctly", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
