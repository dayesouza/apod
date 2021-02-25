import { shallow } from "enzyme";
import ErrorAlert from "./ErrorAlert";
import { checkProps } from "../../tests/testUtils";

const tryAgainFn = jest.fn();
const defaultProps = {
  tryAgain: tryAgainFn,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ErrorAlert {...setupProps} />);
};

test("does not throw error on default props", () => {
  checkProps(ErrorAlert, defaultProps);
});

test("render ErrorAlert without errors", () => {
  const wrapper = setup();
  const alert = wrapper.find(".t-error-alert");
  expect(alert.length).toBe(1);
});

test("calls try again function on click", () => {
  const wrapper = setup();
  const tryAgainBtn = wrapper.find(".t-try-again-btn");
  tryAgainBtn.simulate("click");
  expect(tryAgainFn).toBeCalledTimes(1);
});
