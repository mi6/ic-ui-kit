import { IcStepTypes } from "@ukic/web-components";
import { stepTypes } from "./types";

export const handleSteps = (step: stepTypes): IcStepTypes | undefined => {
  return step.current
    ? ("current" as IcStepTypes)
    : step.completed
    ? ("completed" as IcStepTypes)
    : step.active
    ? ("active" as IcStepTypes)
    : step.disabled
    ? ("disabled" as IcStepTypes)
    : undefined;
};
