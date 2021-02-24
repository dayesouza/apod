import checkPropTypes from "check-prop-types";

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
