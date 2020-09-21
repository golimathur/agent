import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { Panel } from "office-ui-fabric-react/lib/Panel";
import { useConstCallback } from "@uifabric/react-hooks";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { SwatchColorPicker } from "office-ui-fabric-react/lib/SwatchColorPicker";
import { useState } from "react";
import BellIcon from "react-bell-icon";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import { Bubble } from "react-chartjs-2";
import { Button } from "react-bootstrap";

initializeIcons(/* optional base url */);

export const Settings: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));

  return (
    <div>
      <Icon
        iconName="settings"
        onClick={openPanel}
        style={{
          height: 200,
          width: 100,
          color: "white",
          float: "right",
          marginRight: -330,
          marginTop: -22,
        }}
      />

      <Panel
        headerText="Settings"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
      >
        <SwatchColorPickerBasicExample />
      </Panel>

      <BellPanel />
    </div>
  );
};



const colorCells = [
  { id: "a", label: "red", color: "#a4262c" },
  { id: "b", label: "orange", color: "#ca5010" },
  { id: "c", label: "orangeYellow", color: "#986f0b" },
  { id: "d", label: "yellowGreen", color: "#8cbd18" },
  { id: "e", label: "green", color: "#0b6a0b" },
  { id: "f", label: "cyan", color: "#038387" },
  { id: "g", label: "cyanBlue", color: "#004e8c" },
  { id: "h", label: "magenta", color: "#881798" },
  { id: "i", label: "magentaPink", color: "#9b0062" },
  { id: "j", label: "black", color: "#000000" },
  { id: "k", label: "gray", color: "#7a7574" },
  { id: "l", label: "gray20", color: "#69797e" },
];

export const SwatchColorPickerBasicExample: React.FunctionComponent = () => {
  const [previewColor, setPreviewColor] = React.useState<string>();



  return (
    <div>
      <div
        style={{
          textAlign: "center",
          background: previewColor,
          color: "white",
          width: "100%",
          minHeight: "200px",
        }}
      >
   </div>

      {colorCells.map((colorProp) => {
        return (
          <Button
            onClick={() => setPreviewColor(colorProp.color)}
            style={{ margin: 5, color: "white", background: colorProp.color }}
          >
            {colorProp.label}
          </Button>
        );
      })}

      {/* <SwatchColorPicker
        onCellHovered={() => setPreviewColor()}
        columnCount={4}
        cellShape={"square"}
        cellHeight={60}
        cellWidth={60}
        cellBorderWidth={3}
        colorCells={colors}
      /> */}

      <ThemeProvider />
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
          marginRight: -260,
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

export default Settings;
