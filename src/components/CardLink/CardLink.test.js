import { shallow } from "enzyme";
import CardLink from "./CardLink";
import { checkProps } from "../../tests/testUtils";

const defaultProps = {
  link: "link",
  title: "title",
  description: "Des",
};

const mockHistory = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistory,
  }),
}));

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CardLink {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(CardLink, defaultProps);
});

test("renders without errors", () => {
  const wrapper = setup();
  const component = wrapper.find(".t-card-link");
  expect(component.length).toBe(1);
});

test("click on back button and trigger history", () => {
  const wrapper = setup();
  const component = wrapper.find(".t-card-link");
  component.simulate("click");
  expect(mockHistory).toHaveBeenCalled();
});
