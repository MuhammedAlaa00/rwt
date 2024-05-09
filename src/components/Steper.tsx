import React from "react";
import {
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  Text
} from "@chakra-ui/react";
type step = {
  title: string;
  description: string;
};
function Steper({
  steps,
  activeStep
}: {
  steps: step[];
  activeStep: number;
}): any {
  const StepItem: any = Step;
  const StepSeperator: any = StepSeparator;
  return (
    <Stack>
      <Stepper
        width={["100%", "100%", "650px"]}
        size="sm"
        index={activeStep}
        _horizontal={{ gap: "0" }}
      >
        {steps.map((step, index) => (
          <StepItem key={index} _horizontal={{ gap: "0" }}>
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeperator _horizontal={{ ms: "0px", me: "0px" }} />
          </StepItem>
        ))}
      </Stepper>
      <Stepper
        width={["100%", "100%", "650px"]}
        m={"auto"}
        size="md"
        index={activeStep}
      >
        {steps.map((step, index) => (
          <Text color={"gray.500"} textAlign={"center"} key={index}>
            {step.description}
          </Text>
        ))}
      </Stepper>
    </Stack>
  );
}
export default Steper;
