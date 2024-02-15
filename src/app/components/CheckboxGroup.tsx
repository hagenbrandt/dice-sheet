import { Checkbox, CheckboxProps } from './Checkbox';

export const CheckboxGroup = ({
  checkboxes,
}: {
  checkboxes: CheckboxProps[];
}) => {
  return checkboxes.map((checkbox) => (
    <Checkbox key={checkbox.name} {...checkbox} />
  ));
};
