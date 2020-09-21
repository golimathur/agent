import * as React from "react";
import { useId, useBoolean } from "@uifabric/react-hooks";
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  ContextualMenu,
  Toggle,
  DefaultButton,
  Modal,
  IDragOptions,
  IconButton,
  IIconProps,
} from "office-ui-fabric-react";
import "./virus.css";
import virus from "../images/virus.png";

const dragOptions: IDragOptions = {
  moveMenuItemText: "Move",
  closeMenuItemText: "Close",
  menu: ContextualMenu,
};
const cancelIcon: IIconProps = { iconName: "Cancel" };

export const Covid: React.FunctionComponent = () => {
  const [visible, notVisible] = React.useState(true);

  // Use useId() to ensure that the IDs are unique on the page.
  // (It's also okay to use plain strings and manually ensure uniqueness.)
  const titleId = useId("title");

  return (
    <div>
      <Modal
        titleAriaId={titleId}
        isOpen={visible}
        isBlocking={false}
        containerClassName={contentStyles.container}
      >
        <div className={contentStyles.header}>
          <span className="cvirus" style={{ color: "#FFF" }} id={titleId}>
            COVID-19 ALERT
          </span>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={() => notVisible(false)}
          />
        </div>
        <div className={contentStyles.body}>
          <ul style={{ fontWeight: "bold" }}>
            <li>
              <p>Due to COVID-19 our team has been working from home.</p>&nbsp;
            </li>
            <li>
              <p>
                Use Face Mask, Maintain Social Distancing and Wash Hands
                Frequently.
              </p>
              &nbsp;
            </li>
            <li>
              <p>
                It is advisable to download Aarogya Setu App on your Mobile
                phone.
              </p>
              &nbsp;
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
  },
  header: [
    theme.fonts.xLargePlus,
    {
      flex: "1 1 auto",
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: "flex",
      alignItems: "center",
      fontWeight: FontWeights.semibold,
      padding: "12px 12px 14px 24px",
    },
  ],
  body: {
    flex: "4 4 auto",
    padding: "0 24px 24px 24px",
    overflowY: "hidden",
    selectors: {
      p: { margin: "14px 0" },
      "p:first-child": { marginTop: 0 },
      "p:last-child": { marginBottom: 0 },
    },
  },
});
const toggleStyles = { root: { marginBottom: "20px" } };
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};

export default Covid;
