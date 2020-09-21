import React from "react";
import ReactDOM from "react-dom";
import { ActionButton, IIconProps } from "office-ui-fabric-react";
import { buttonProperties } from "@fluentui/react";
import { PersonaInitialsExample } from "../uicomponent/Header";

export const icon = { iconName: "AddFriend" };
export const icon2 = { iconName: "MoveToFolder" };
export const ModalPersona = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <h3 style={{ marginTop: -20 }}>
                <div style={{ padding: 10 }}>
                  <PersonaInitialsExample />
                  <hr color="blue" />
                  <p
                    style={{
                      color: "grey",
                      fontSize: 15,
                      fontWeight: "normal",
                      fontFamily: "Helvetica",
                    }}
                  >
                    gaurav.mathur@capsitech.com
                    <br />
                    Web Developer
                  </p>
                </div>
                <div style={{ padding: 20, bottom: 0 }}>
                  <ActionButton iconProps={icon} style={{ float: "right" }}>
                    Profile
                  </ActionButton>
                  <ActionButton iconProps={icon2} style={{ float: "right" }}>
                    Sign-out
                  </ActionButton>
                </div>
              </h3>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default ModalPersona;