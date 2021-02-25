import { shallow } from "enzyme";
import NotFound from "./NotFound";

const setup = () => {
  return shallow(<NotFound />);
};

test("render NotFound without errors", () => {
  const wrapper = setup();
  const notFound = wrapper.find(".t-not-found");
  expect(notFound.length).toBe(1);
});
