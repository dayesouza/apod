import { shallow } from "enzyme";
import NavBar from "./NavBar";

const setup = () => {
  return shallow(<NavBar />);
};

test("render NavBar without errors", () => {
  const wrapper = setup();
  const navbar = wrapper.find(".t-navbar");
  expect(navbar.length).toBe(1);
});
