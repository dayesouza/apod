import { shallow } from "enzyme";
import Loading from "./Loading";

test("renders component without errors", () => {
  const wrapper = shallow(<Loading />);
  const loading = wrapper.find(".t-loading");
  expect(loading.length).toBe(1);
});
