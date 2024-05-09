import BasicInformation from "@/components/BasicInformation";
import ImagesUpload from "@/components/ImagesUpload";
import ReviewInformation from "@/components/ReviewInformation";
import Steper from "@/components/Steper";
import StepsButtons from "@/components/StepsButtons";
import TypographyH3 from "@/components/Typography-h3";
import { useAdvertiseContext } from "@/providers/AdvertiseProvider";
import { Box, Flex, useSteps } from "@chakra-ui/react";
import React from "react";
function AddAdvertise() {
  const steps = [
    { title: "First", description: "Basic Information" },
    { title: "Second", description: "Images Upload" },
    { title: "Third", description: "Review Information" }
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length
  });
  const { handleSubmit, setError } = useAdvertiseContext();
  const StepOneRequiredKeys = ["make", "model", "year"];
  const StepTwoRequiredKeys = ["img"];
  const handleTakeStep = (arr: string[], step: number, errors: any) => {
    arr.forEach((key) => {
      if (!(key in errors)) {
        setActiveStep(step);
      } else {
        return;
      }
    });
  };
  const onSubmit = (data: any) => {
    console.log(data);
    setActiveStep(3);
  };
  const handleError = (errors: any) => {
    if (activeStep === 1) {
      handleTakeStep(StepOneRequiredKeys, 2, errors);
      setError("img", "");
    }
    if (activeStep === 2) handleTakeStep(StepTwoRequiredKeys, 3, errors);
  };
  const handleNextSteps = () => handleSubmit(onSubmit, handleError)();
  const handlePrevSteps = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  return (
    <Flex flexDirection={"column"} alignItems={"center"} gap={"64px"}>
      <Box>
        <TypographyH3>Post Your Ad</TypographyH3>
      </Box>
      <Box>
        <Steper steps={steps} activeStep={activeStep} />
      </Box>
      <Box width={["100%", "100%", "75%"]}>
        <Flex flexDirection={"column"} gap={"48px"}>
          {activeStep === 1 && <BasicInformation />}
          {activeStep === 2 && <ImagesUpload />}
          {activeStep === 3 && <ReviewInformation />}
        </Flex>
      </Box>
      <StepsButtons
        handleNextSteps={handleNextSteps}
        handlePrevSteps={handlePrevSteps}
      />
    </Flex>
  );
}
export default AddAdvertise;
