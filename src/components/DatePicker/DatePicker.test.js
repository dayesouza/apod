import { shallow } from "enzyme";
import { checkProps } from "../../tests/testUtils";
import DatePickerComponent from "./DatePicker";

const formatFn = jest.fn(
  (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
);
const handleChangeFn = jest.fn();
const defaultProps = {
  startDate: new Date(1995, 10, 17),
  handleChange: handleChangeFn,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<DatePickerComponent {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(DatePickerComponent, defaultProps);
});

describe("remove day button", () => {
  const wrapper = setup();
  const button = wrapper.find(".t-remove-day");

  test("renders remove day button", () => {
    expect(button.length).toBe(1);
  });

  test("calls handle change with a day less on clicking remove day button", () => {
    button.simulate("click");
    let startDate = defaultProps.startDate;
    startDate.setDate(startDate.getDate() - 1);

    expect(handleChangeFn).toBeCalledWith(startDate);
  });
});

describe("add day button", () => {
  const wrapper = setup();
  const button = wrapper.find(".t-add-day");

  test("renders add day button", () => {
    expect(button.length).toBe(1);
  });

  test("calls handle change with a day more on clicking add day button", () => {
    button.simulate("click");
    let startDate = defaultProps.startDate;
    startDate.setDate(startDate.getDate() + 1);

    expect(handleChangeFn).toBeCalledWith(startDate);
  });
});

describe("add day when date is today", () => {
  const wrapper = setup({ startDate: new Date() });
  const button = wrapper.find(".t-add-day");
  test("add day disabled when start date is today", () => {
    expect(button.prop("disabled")).toBe(true);
  });

  test("does not call handleChange when start date is today", () => {
    button.simulate("click");
    expect(handleChangeFn).toBeCalledTimes(0);
  });
});
