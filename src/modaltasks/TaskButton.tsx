import {
  DefaultButton,
  IStackTokens,
  PrimaryButton,
  Stack,
} from "office-ui-fabric-react";
import * as React from "react";
import ModalTaskPop from "./ModalTaskPop";
import useModal from "./useModal";
import { useConstCallback } from "@uifabric/react-hooks";
import { useState } from "react";
import { facepilePersonas } from "@uifabric/example-data";

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const TaskButton: React.FunctionComponent = () => {
  const { isShowing, toggle } = useModal();
  const [isOpen, setIsOpen] = React.useState(false);

  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));
  return (
    <div>
      <Stack horizontal tokens={stackTokens}>
        <div>
          <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
          <PrimaryButton onClick={dismissPanel}>Save</PrimaryButton>
        </div>
      </Stack>
      <ModalTaskPop isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default TaskButton;
