import React, { useEffect } from "react";
import "../component/Util.css";
import capsitech from "../images/capsitech.png";
import BellIcon from "react-bell-icon";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import * as ReactIcons from "@fluentui/react-icons";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import {
  IPersonaSharedProps,
  Persona,
  PersonaInitialsColor,
  PersonaSize,
} from "office-ui-fabric-react/lib/Persona";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import ModalPersona from "../persona/ModalPersona";
import useModal from "../persona/useModal";
// import { Settings, ThemeProvider } from "../panel/Settings";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Panel } from "office-ui-fabric-react/lib/Panel";
import { useConstCallback } from "@uifabric/react-hooks";
import { SwatchColorPicker } from "office-ui-fabric-react/lib/SwatchColorPicker";
import { useState } from "react";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import { Bubble } from "react-chartjs-2";
import { Button } from "react-bootstrap";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Calendar } from "@fluentui/react";
import Covid from "../uicomponent/Covid";

initializeIcons(/* optional base url */);

const colorCells = [
  { id: "a", label: "red", color: "#a4262c" },
  { id: "b", label: "orange", color: "#ca5010" },
  { id: "c", label: "orangeYellow", color: "#986f0b" },
  { id: "d", label: "yellowGreen", color: "#8cbd18" },
  { id: "e", label: "green", color: "#0b6a0b" },
  { id: "f", label: "cyan", color: "#038387" },
  { id: "g", label: "cyanBlue", color: "#004e8c" },
  { id: "i", label: "magentaPink", color: "#9b0062" },
  { id: "j", label: "black", color: "#000000" },
  { id: "k", label: "gray", color: "#7a7574" },
  { id: "l", label: "gray20", color: "#69797e" },
  { id: "h", label: "magenta", color: "#881798" },
];

const Header = () => {
  const [previewColor, setPreviewColor] = React.useState<string>();
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));

  React.useEffect(() => setModalVisible(true), [modalVisible]);

  const swatchColorPickerOnCellHovered = (id: string, color: string) => {
    setPreviewColor(color);
  };
  return (
    <div className="topheader" style={{ background: previewColor }}>
      <h3></h3>
      <img
        src={capsitech}
        alt="Logo"
        style={{
          height: 50,
          float: "left",
          marginLeft: -26,
          width: 206,
          marginTop: -40,
        }}
      />
     
      <div style={{ float: "right", marginRight: -400, marginTop: -30 }}>
        <PersonaInitialsExample />
      </div>
      {/* <Settings /> */}
      <div>
        <Icon
          iconName="settings"
          onClick={openPanel}
          style={{
            height: 200,
            width: 100,
            color: "white",
            float: "right",
            marginRight: -370,
            marginTop: -22,
          }}
        />

        <Panel
          headerText="Settings"
          isOpen={isOpen}
          onDismiss={dismissPanel}
          closeButtonAriaLabel="Close"
        >
          <div>
            <SwatchColorPicker
              columnCount={4}
              cellShape={"square"}
              colorCells={colorCells.map((x) => x)}
              cellHeight={60}
              cellWidth={60}
              cellBorderWidth={3}
              onColorChanged={(id: any, color: any) =>
                swatchColorPickerOnCellHovered(id, color)
              }
            ></SwatchColorPicker>
          </div>
          <ThemeProvider />
        </Panel>

        <BellPanel />
        <div style={{ marginTop: -10, color: "#FFF" }}>
          <DateTime />
        </div>
        {modalVisible && <Covid />}
      </div>
    </div>
  );
};

export const BellPanel: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));

  return (
    <div>
      <BellIcon
        width="40"
        active={true}
        animate={true}
        color={"white"}
        onClick={openPanel}
        style={{
          float: "right",
          marginTop: -26,
          marginRight: -300,
          height: 25,
        }}
      />

      <Panel
        headerText="Notifications"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
      >
        <Icon
          iconName="ringer"
          style={{
            fontSize: 80,
            color: "grey",
            marginTop: 100,
            textAlignLast: "center",
            marginLeft: 100,
          }}
        />

        <h3 style={{ textAlignLast: "center" }}>Notifications </h3>
        <p style={{ textAlignLast: "center" }}>
          Here you will see the list of new Notifications.
        </p>
      </Panel>
    </div>
  );
};

const examplePersona: IPersonaSharedProps = {
  secondaryText: "Designer",
  tertiaryText: "In a meeting",
  optionalText: "Available at 4:00pm",
};

const personaWithInitials: IPersonaSharedProps = {
  ...examplePersona,
  text: "Maor Sharett",
  imageInitials: "MS",
};


export const PersonaInitialsExample: React.FunctionComponent = () => {
  const { isShowing, toggle } = useModal();
  const personaStyle={
    root: {
     marginLeft: 10
    }
  }
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Persona
        {...examplePersona}
        size={PersonaSize.size32}
        initialsColor={PersonaInitialsColor.darkGreen}
        onClick={toggle}
        styles = {personaStyle}
      />
      

      <ModalPersona isShowing={isShowing} hide={toggle} />
    </Stack>
  );
};

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };
const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);
const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#000" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#000";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <Toggle onChange={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </Toggle>
    </ThemeContext.Provider>
  );
};

const DateTime = () => {
  const [dateTime, setDateTime] = React.useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <h4>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h4>
  );
};
export default Header;
