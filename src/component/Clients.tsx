import React from "react";
import "../App.css";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import {
  IStackTokens,
  Stack,
  IStackProps,
} from "office-ui-fabric-react/lib/Stack";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption,
} from "office-ui-fabric-react/lib/Dropdown";
import Navigation from "../uicomponent/Navigation";
import Chat from "../uicomponent/Chat";
import Header from "../uicomponent/Header";
import Footer from "../uicomponent/Footer";
import Button from "../uicomponent/Button";
import Search from "../uicomponent/Search";
import Table from "../contact/Table";
import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import { Label } from "office-ui-fabric-react/lib/Label";
import { useState, useEffect } from "react";

const Clients = () => {
  const [switchTheme, setSwitchTheme] = React.useState("#0078d4");
  const ThemeContext = React.createContext(switchTheme);
  const theme = React.useContext(ThemeContext);
  return (
    
    <div>
      {/* <Button /> */}
      <div style={{ float: "right", marginTop: 5, marginRight: 200 }}>
        <Search />
      </div>
      <Header />
      <p className="rep" style={{color: "#0078d4"}}>Clients</p>

      <div style={{ marginLeft: 8, marginTop: "-66px" }}>
        <Navigation />
      </div>

      <div style={{ marginLeft: 250, marginTop: -720 }}>
        <Buttons />
      </div>

      <hr style={{ width: "87%", float: "right" }} />

      <div style={{ marginLeft: 610, marginTop: 32 }}>
        <DropdownControlledExample />
      </div>

      <div style={{ marginLeft: 800, marginTop: -32 }}>
        <DropdownList />
      </div>

      <div style={{ marginLeft: 990, marginTop: -32 }}>
        <DropdownService />
      </div>

      <div style={{ marginLeft: 1180, marginTop: -32 }}>
        <DropdownActive />
      </div>

      <div style={{ marginLeft: 1370, marginTop: -32 }}>
        <DropdownManage />
      </div>

      <hr style={{ width: "87%", textAlign: "left", marginLeft: 200 }} />

      <div style={{ marginLeft: 100, color: "blue" }}>
        <Table />
      </div>
      <div style={{ marginTop: 450 }}>
        <Footer />
      </div>

      <Chat />
    </div>
  );
};

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const stackTokens: IStackTokens = { childrenGap: 40 };

const Buttons: React.FunctionComponent<IButtonExampleProps> = (props) => {
  const { disabled, checked } = props;

  const [handleButton] = React.useState("0");

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Stack horizontal tokens={stackTokens}>
        <DefaultButton
          text="Business"
          allowDisabledFocus
          disabled={disabled}
          checked={checked}
          style={{
            border: 0,
            marginLeft: -10,
            opacity: 0.9,
            transition: "0.3s",
            fontWeight: "bold",
          }}
        />
        <DefaultButton
          text="Contacts"
          allowDisabledFocus
          disabled={disabled}
          checked={checked}
          style={{
            color: "#0078d4",
            border: 0,
            marginLeft: -7,
            opacity: 0.9,
            transition: "0.3s",
            fontWeight: "bold",
          }}
        />

        <Icon
          iconName="refresh"
          onClick={refreshPage}
          style={{
            fontSize: 18,
            color: "#0078d4",
            display: "container",
            marginLeft: 0,
            marginTop: 5,
          }}
        />
      </Stack>
    </div>
  );
};

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 180 } };

const dropdownControlledExampleOptions = [
  { key: "businessType", text: "Business type" },
  { key: "limited", text: "Limited" },
  { key: "soleTrader", text: "Sole Trader" },
  { key: "partnership", text: "Partnership" },
];

export const DropdownControlledExample: React.FunctionComponent = () => {
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
      placeHolder="Business Type"
      options={dropdownControlledExampleOptions}
      styles={dropdownStyles}
    />
  );
};

const dropdownListStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 180 },
};

const dropdownList = [
  { key: "paymentStatus", text: "Payment Status" },
  { key: "paid  ", text: "Paid" },
  { key: "notPaid", text: "Not Paid" },
];

export const DropdownList: React.FunctionComponent = () => {
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
      placeHolder="Payment Status"
      options={dropdownList}
      styles={dropdownListStyles}
    />
  );
};

const dropServiceStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 180 },
};

const dropdownService = [
  { key: "Service Type", text: "Service Type" },
  { key: "bookkeeping", text: "Bookkeeping" },
  { key: "payroll", text: "Payroll" },
  { key: "cis", text: "CIS" },
  { key: "vat", text: "VAT" },
  { key: "accounts and tax", text: "Accounts and Tax" },
  { key: "selfassessment", text: "Self Assessment" },
  { key: "confirmationstatement", text: "Confirmation Statement" },
];

export const DropdownService: React.FunctionComponent = () => {
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
      options={dropdownService}
      styles={dropServiceStyles}
    />
  );
};

const dropActiveStyles: Partial<IDropdownStyles> = { dropdown: { width: 180 } };

const dropdownActive = [
  { key: "active", text: "Active" },
  { key: "inactive", text: "Inactive" },
];

export const DropdownActive: React.FunctionComponent = () => {
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

      placeHolder="Active"
      options={dropdownActive}
      styles={dropActiveStyles}
    />
  );
};

const dropManageStyles: Partial<IDropdownStyles> = { dropdown: { width: 180 } };

const dropdownManage = [{ key: "managerUser", text: "Manager User" }];

export const DropdownManage: React.FunctionComponent = () => {
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
      options={dropdownManage}
      styles={dropManageStyles}
    />
  );
};

export const SpinnerClient: React.FunctionComponent = () => {
  // This is just for laying out the label and spinner (spinners don't have to be inside a Stack)
  const rowProps: IStackProps = { horizontal: true, verticalAlign: "center" };

  const tokens = {
    sectionStack: {
      childrenGap: 10,
    },
    spinnerStack: {
      childrenGap: 20,
    },
  };

  return (
    <Stack tokens={tokens.sectionStack}>
      <Stack {...rowProps} tokens={tokens.spinnerStack}>
        <Spinner size={SpinnerSize.small} />
      </Stack>
    </Stack>
  );
};

export default Clients;
