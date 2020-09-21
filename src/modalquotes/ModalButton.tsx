import {
  DefaultButton,
  IStackTokens,
  PrimaryButton,
  Stack,
} from "office-ui-fabric-react";
import * as React from "react";
import ModalPop from "../uicomponent/ModalPop";
import useModal from "../uicomponent/useModal";


export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const ModalButton: React.FunctionComponent<IButtonExampleProps> = (
  props
) => {
  const { disabled, checked, } = props;
  const {isShowing,  toggle } = useModal();
  



  return (
    <div>
      <Stack horizontal tokens={stackTokens}>
        <DefaultButton text="Cancel"  onClick={toggle} allowDisabledFocus
          disabled={disabled}/>
        <PrimaryButton
          text="Save"
          allowDisabledFocus
          disabled={disabled}
          checked={checked}
          onClick={toggle}
        />
      </Stack>
          
                <ModalPop
        isShowing={isShowing}
        hide={toggle}
      />
       
    
    </div>

  );
};

export default ModalButton;