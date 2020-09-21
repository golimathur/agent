import { IButtonProps } from "office-ui-fabric-react/lib/Button";
import {
  CommandBar,
  ICommandBarItemProps,
} from "office-ui-fabric-react/lib/CommandBar";
import * as React from "react";
//import Button from "../uicomponent/Button";
import Chat from "../uicomponent/Chat";
import Footer from "../uicomponent/Footer";
import Header from "../uicomponent/Header";
import Navigation from "../uicomponent/Navigation";
import Search from "../uicomponent/Search";
import TestLogin from "./TestLogin";


const Deadlines = (props) => {

  return (
    <div>
     
      {/* <Button /> */}
      <div style={{ float: "right", marginTop: 5, marginRight: 200 }}>
        <Search />
      </div>
      <Header />
      <p className="rep">Deadlines</p>
      <Command />
      <div style={{ marginLeft: 600 }}>
        <TestLogin />
      </div>
      <div style={{ marginTop: "-370px", marginLeft: 8 }}>
        <Navigation />
      </div>
      <div>
        {/* <Readas /> */}
      </div>
      <Footer />
      <Chat />
      
    </div>
  );
};

const Command: React.FunctionComponent = () => {
  const overflowProps: IButtonProps = { ariaLabel: "More commands" };

  return (
    <div style={{ marginLeft: "500px", marginTop: "30px" }}>
      <CommandBar
        items={_items}
        overflowItems={_overflowItems}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      ></CommandBar>
    </div>
  );
};

export function handleUpload() {
  return <input type="file" id="upload" />;
}

const _items: ICommandBarItemProps[] = [
  {
    key: "newItem",
    text: "New",
    cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
    iconProps: { iconName: "Add" },
    subMenuProps: {
      items: [
        {
          key: "emailMessage",
          text: "Email message",
          iconProps: { iconName: "Mail" },
          href: "https://www.google.com/intl/en-GB/gmail/about/#",
        },
        {
          key: "calendarEvent",
          text: "Calendar event",
          iconProps: { iconName: "Calendar" },
        },
      ],
    },
  },

  {
    key: "upload",
    text: "Upload",
    name: "handleUpload",
    type: "file",
    iconProps: { iconName: "Upload" },
    onClick: () => {
      handleUpload();
    },
  },

  {
    key: "share",
    text: "Share",
    iconProps: { iconName: "Share" },
    onClick: () => alert("share"),
  },
  {
    key: "download",
    text: "Download",
    iconProps: { iconName: "Download" },
    onClick: () => alert("Download"),
  },
];

const _overflowItems: ICommandBarItemProps[] = [
  {
    key: "move",
    text: "Move to...",
    onClick: () => console.log("Move to"),
    iconProps: { iconName: "MoveToFolder" },
  },
  {
    key: "copy",
    text: "Copy to...",
    onClick: () => console.log("Copy to"),
    iconProps: { iconName: "Copy" },
  },
  {
    key: "rename",
    text: "Rename...",
    onClick: () => console.log("Rename"),
    iconProps: { iconName: "Edit" },
  },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: "tile",
    text: "Grid view",
    ariaLabel: "Grid view",
    iconOnly: true,
    iconProps: { iconName: "Tiles" },
    onClick: () => console.log("Tiles"),
  },
  {
    key: "info",
    text: "Info",
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "Info" },
    onClick: () => console.log("Info"),
  },
];

export default Deadlines;
