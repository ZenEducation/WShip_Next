import React from 'react';
import { Button, Dropdown } from 'components/AfterAuth/ui';

const CustomToggle = () => {
  const onDropdownItemClick = (eventKey, e) => {
    console.log('Dropdown Item Clicked', eventKey, e);
  };

  const Toggle = <Button>Toggle as Button</Button>;

  return (
    <div>
      <Dropdown renderTitle={Toggle}>
        <Dropdown.Item onSelect={onDropdownItemClick} eventKey="a">
          Item A
        </Dropdown.Item>
        <Dropdown.Item onSelect={onDropdownItemClick} eventKey="b">
          Item B
        </Dropdown.Item>
        <Dropdown.Item onSelect={onDropdownItemClick} eventKey="c">
          Item C
        </Dropdown.Item>
        <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default CustomToggle;
