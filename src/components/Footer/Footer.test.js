import { shallow } from "enzyme";
import Footer from "./Footer";

const setup = () => {
  return shallow(<Footer />);
};

test("render component without error", () => {
  const wrapper = setup();
  const footer = wrapper.find(".t-footer");
  expect(footer.length).toBe(1);
});

test("render component with today`s year", () => {
  const wrapper = setup();
  const textSpan = wrapper.find(".t-footer-date");
  expect(textSpan.text()).toContain(new Date().getFullYear());
});
