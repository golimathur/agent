import * as React from "react";
import "../App.css";
import Navigation from "../uicomponent/Navigation";
import Chat from "../uicomponent/Chat";
import Header from "../uicomponent/Header";
import Footer from "../uicomponent/Footer";
import Button from "../uicomponent/Button";
import Search from "../uicomponent/Search";
import "../component/Util.css";
import Fetch from "../api/Fetch";
import { IStackTokens, Stack } from "office-ui-fabric-react/lib/Stack";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption,
} from "office-ui-fabric-react/lib/Dropdown";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
} from "office-ui-fabric-react/lib/DetailsList";

import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";
import "office-ui-fabric-react/dist/css/fabric.css";
import {
  IButtonStyles,
  IconButton,
  HighContrastSelector,
  Label,
  IContextualMenuProps,
  IIconProps,
} from "office-ui-fabric-react";

import ModalTaskPop from "../modaltasks/ModalTaskPop";
import useModal from "../modaltasks/useModal";

const Tasks = () => {
  return (
    <div>
      {/* <Button /> */}
      <div style={{ float: "right", marginTop: 5, marginRight: 200 }}>
        <Search />
      </div>

      <Header />

      <p className="rep">Tasks</p>
      <hr style={{ width: "86%", float: "right", marginTop: -12 }} />
      <div style={{ marginLeft: 0, marginTop: "-64px" }}>
        <Navigation />
      </div>
      {/* <p className="aep">Tasks List</p> */}
      <div style={{ marginLeft: 950, marginTop: -740 }}>
        <DropdownAction />
      </div>
      <div style={{ float: "right", marginRight: 50, marginTop: -30 }}>
        <DropdownUpcoming />
      </div>
      <div style={{ float: "right", marginRight: 50, marginTop: -30 }}>
        <DropdownAuthority />
      </div>
      <div style={{ marginLeft: 200, marginTop: -66 }}>
        <ButtonSplitCustomExample />
      </div>
      <hr style={{ width: "86%", float: "right", marginTop: 5 }} />
      <div>
        <TableTasks />
      </div>

      <div style={{ marginTop: 220 }}>
        <Footer />
      </div>
      <Chat />
    </div>
  );
};

//Action Dropdown
const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 150 } };

const dropdownAction = [
  { key: "actionDate", text: "Action Date" },
  { key: "dueDate", text: "Due Date" },
];

export const DropdownAction: React.FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
  const onChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption
  ): void => {
    setSelectedItem(item);
  };

  return (
    <Dropdown
      selectedKey={selectedItem ? selectedItem.key : undefined}
      placeHolder="Action Date"
      options={dropdownAction}
      styles={dropdownStyles}
    />
  );
};

//Upcoming Dropdown
const dropUpcomingStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 180 },
};

const dropdownUpcoming = [
  { key: "upcoming", text: "Upcoming" },
  { key: "completed", text: "Completed" },
  { key: "repeating", text: "Repeating" },
  { key: "deleted", text: "Deleted" },
];

export const DropdownUpcoming: React.FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
  const onChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption
  ): void => {
    setSelectedItem(item);
  };

  return (
    <Dropdown
      selectedKey={selectedItem ? selectedItem.key : undefined}
      // eslint-disable-next-line react/jsx-no-bind

      placeHolder="Service Type"
      options={dropdownUpcoming}
      styles={dropUpcomingStyles}
    />
  );
};

// Authority Dropdown
const dropAuthorityStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 180 },
};

const dropdownAuthority = [
  { key: "anyCategory", text: "Any Category" },
  { key: "monthlyBookeeping", text: "Monthly Bookeeping" },
  { key: "companyClosure ", text: "Company Closure" },
  { key: "dormantCompany", text: "Dormant Company" },
  { key: "barclaysBusiness", text: "Barclays Business" },
  { key: "updateBusiness", text: "Update Business" },
  { key: "selfAssessmentReport", text: "Self Assessment Report" },
  { key: "vatReturn", text: "VAT Return" },
  { key: "monthlyPayroll", text: "Monthly payroll" },
  { key: "payeeRegistration", text: "PAYEE Registration" },
];

export const DropdownAuthority: React.FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
  const onChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption
  ): void => {
    setSelectedItem(item);
  };

  return (
    <Dropdown
      selectedKey={selectedItem ? selectedItem.key : undefined}
      // eslint-disable-next-line react/jsx-no-bind

      placeHolder="Manager User"
      options={dropdownAuthority}
      styles={dropAuthorityStyles}
    />
  );
};

//Tasks Table

const classNames = mergeStyleSets({
  table: {
    margin: "auto",
    fontWeight: "bold",
  },
});

const tableStyle = {
  root: {
    marginLeft: 150,
    marginTop: 60,
  },
};

const operations = [
  {
    SNO: "1",
    Title: "Company Accounts and CT600",
    Client: "VINUM WISDOM LTD",
    Contact: "Weibo JIANG",
    Team: "Central Team",
    Asignee: "Team",
    ActionDate: "",
    DueDate: "",
    Status: "Drafted",
  },
  {
    SNO: "2",
    Title: "Company Accounts and CT600",
    Client: "VINUM WISDOM LTD",
    Contact: "Weibo JIANG",
    Team: "Central Team",
    Asignee: "Team",
    ActionDate: "",
    DueDate: "",
    Status: "Rejected",
  },

  {
    SNO: "3",
    Title: "Company Accounts and CT600",
    Client: "VINUM WISDOM LTD",
    Contact: "Weibo JIANG",
    Team: "Central Team",
    Asignee: "Team",
    ActionDate: "",
    DueDate: "",
    Status: "Rejected",
  },

  {
    SNO: "4",
    Title: "Create Realated Tasks",
    Client: "VINUM WISDOM LTD",
    Contact: "Weibo JIANG",
    Team: "Central Team",
    Asignee: "Team",
    ActionDate: "",
    DueDate: "",
    Status: "Rejected",
  },

  {
    SNO: "5",
    Title: "Company Accounts and CT600",
    Client: "VINUM WISDOM LTD",
    Contact: "Weibo JIANG",
    Team: "Central Team",
    Asignee: "Team",
    ActionDate: "",
    DueDate: "",
    Status: "Rejected",
  },

  {
    SNO: "6",
    Title: "Company Accounts and CT600",
    Client: "VINUM WISDOM LTD",
    Contact: "Weibo JIANG",
    Team: "Central Team",
    Asignee: "Team",
    ActionDate: "",
    DueDate: "",
    Status: "Rejected",
  },

  {
    SNO: "7",
    Title: "Company Accounts and CT600",
    Client: "VINUM WISDOM LTD",
    Contact: "Weibo JIANG",
    Team: "Central Team",
    Asignee: "Team",
    ActionDate: "",
    DueDate: "",
    Status: "Rejected",
  },
];

const columns: IColumn[] = [
  {
    key: "column1",
    name: "SNO",
    fieldName: "SNO",
    minWidth: 300,
    maxWidth: 300,
  },
  {
    key: "column3",
    name: "Client",
    fieldName: "Client",
    minWidth: 300,
    maxWidth: 300,
  },
  {
    key: "column4",
    name: "Contact",
    fieldName: "Contact",
    minWidth: 300,
    maxWidth: 300,
  },
  {
    key: "column5",
    name: "Team",
    fieldName: "Team",
    minWidth: 300,
    maxWidth: 300,
  },
  {
    key: "column6",
    name: "Asignee",
    fieldName: "Asignee",
    minWidth: 300,
    maxWidth: 300,
  },
  {
    key: "column7",
    name: "ActionDate",
    fieldName: "ActionDate",
    minWidth: 300,
    maxWidth: 300,
  },
  {
    key: "column8",
    name: "DueDate",
    fieldName: "DueDate",
    minWidth: 300,
    maxWidth: 300,
  },
  {
    key: "column9",
    name: "Status",
    fieldName: "Status",
    minWidth: 300,
    maxWidth: 300,
  },
];

const TableTasks = () => {
  return (
    <div data-is-scrollable={true}>
      <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
        <DetailsList
          styles={tableStyle}
          items={operations}
          columns = {columns}
          selectionMode={0}
        />
      </div>
    </div>
  );
};

export interface IButtonExampleProps {
  disabled?: boolean;
  checked?: boolean;
}

const customSplitButtonStyles: IButtonStyles = {
  splitButtonMenuButton: {
    backgroundColor: "white",
    width: 28,
    border: "none",
  },
  splitButtonMenuIcon: { fontSize: "7px" },
  splitButtonDivider: {
    backgroundColor: "#c8c8c8",
    width: 1,
    right: 26,
    position: "absolute",
    top: 4,
    bottom: 4,
  },
  splitButtonContainer: {
    selectors: {
      [HighContrastSelector]: { border: "none" },
    },
  },
};

const addIcon: IIconProps = { iconName: "Add" };

export const ButtonSplitCustomExample: React.FunctionComponent<IButtonExampleProps> = (
  props
) => {
  const { disabled, checked } = props;
  const { isShowing, toggle } = useModal();

  return (
    <div className="Mod">
      <IconButton
        split
        iconProps={addIcon}
        aria-roledescription="split button"
        styles={customSplitButtonStyles}
        ariaLabel="Task"
        onClick={toggle}
        disabled={disabled}
        checked={checked}
      />
      <ModalTaskPop isShowing={isShowing} hide={toggle} />
    </div>
  );
};

function _alertClicked(): void {
  alert("Clicked");
}

export default Tasks;
