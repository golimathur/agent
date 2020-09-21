import React from "react";
import ReactDOM from "react-dom";
import TaskDate from "./TaskDate";
import TaskText from "./TaskText";
import TaskDrop from "./TaskDrop";
import TaskChecked from "./TaskChecked";
import Comments from "../modalquotes/Comments";
import TaskButton from "./TaskButton";
export const ModalTaskPop = ({ isShowing, hide }) =>
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
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h3 style={{ marginTop: -24 }}>Add a New Task</h3>
              <hr />
              <p>Type</p>
              <div style={{ marginTop: -42, marginLeft: 40 }}>
                <TaskDrop />
              </div>
              <div style={{ marginTop: 20, marginLeft: 100 }}>
                <TaskChecked />
              </div>
              <p>Title</p>
              <div style={{ marginTop: -40, marginLeft: 40 }}>
                <TaskText />
              </div>
              <p>Start Date</p>
              <div>
                <TaskDate />
              </div>
              <p>End Date</p>
              <div>
                <TaskDate />
              </div>
              <hr />
              <div>
                <Comments />
              </div>
              <hr />
              <div style={{ marginLeft: 300 }}>
                <TaskButton />
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default ModalTaskPop;
