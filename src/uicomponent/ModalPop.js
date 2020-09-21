import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import ModalDate  from "../modalquotes/ModalDate";
import ModalDrop from "../modalquotes/ModalDrop";
import ModalText from "../modalquotes/ModalText";
import Comments from "../modalquotes/Comments";
import ModalButton from "../modalquotes/ModalButton";

export const ModalPop = ( {isShowing, hide} ) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h3 style={{marginTop: -24}}>Quotes Letter</h3>
        <hr />
          <p>
            Client
            </p>
          <div style={{marginTop: -42,marginLeft:82}}>
        <SearchBoxUnderlinedExample />
       </div>
       <div>
       <p>
         Date
         </p>
         <ModalDate/>
         <p>
           Expiry Date
          </p>
          <ModalDate/>
          </div>
           <p>
            Acc Manager
            </p>
            <div style={{marginTop: -42,marginLeft:100}}>
            <ModalDrop />
            </div>
            <p>
              Address
              </p>
              <div style={{marginTop: -44,marginLeft:100}}>
             <ModalText />
             </div>
             <hr/>
             <div>
             <Comments />
               </div>
               <hr />
               <div style={{marginLeft:300}}>
           <ModalButton />
           </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export const SearchBoxUnderlinedExample = () => <SearchBox placeholder="Search" underlined={true} />;
export default ModalPop;