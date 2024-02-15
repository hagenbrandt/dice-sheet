import { Checkbox, CheckboxProps } from './Checkbox';

export const CheckboxGroup = ({
  checkboxes,
  variant = 'round',
}: {
  checkboxes: CheckboxProps[];
  variant?: 'round' | 'bonus';
}) => (
  <section className='checkbox-group flex flex-row w-full justify-around'>
    {checkboxes.map((checkbox) => (
      <Checkbox key={checkbox.name} {...checkbox} />
    ))}
  </section>
);
