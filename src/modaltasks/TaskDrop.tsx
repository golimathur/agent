import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

const dropdownControlledExampleOptions = [
  { key: 'items', text: 'Items to be Selected'},



];

export const TaskDrop: React.FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

  const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    setSelectedItem(item);
  };

  return (
    <Dropdown
    selectedKey={selectedItem ? selectedItem.key : undefined}
      // eslint-disable-next-line react/jsx-no-bind
      //onChange={onChange}
      placeholder="Select an option"
      options={dropdownControlledExampleOptions}
      styles={dropdownStyles}
    />
  );
};

export default TaskDrop;