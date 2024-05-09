import { useAdvertiseContext } from "@/providers/AdvertiseProvider";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { ErrorMessage } from "@hookform/error-message";
function SelectInput({
  Options,
  name,
  label,
  placeholder
}: {
  Options: { label: string; value: string }[];
  name: string;
  label: string;
  placeholder: string;
}) {
  const { control, errors } = useAdvertiseContext();
  return (
    <Box width={["100%", "100%", "48%"]}>
      <Flex flexDirection={"column"} gap={"8px"}>
        <Text
          as={"label"}
          htmlFor="country"
          color={"#000"}
          fontWeight={"bold"}
          textTransform={"capitalize"}
        >
          {label}
        </Text>
        <Controller
          name={name}
          control={control}
          render={({ field: { ref, onChange, value } }) => (
            <Select
              placeholder={placeholder}
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  borderColor: "black",
                  width: "100%",
                  height: "40px",
                  boxShadow: "none",
                  ":hover": {
                    borderColor: "black",
                    outline: "none",
                    boxShadow: "none"
                  },
                  ":active": {
                    borderColor: "black",
                    outline: "none",
                    boxShadow: "none"
                  },
                  ":focus": {
                    borderColor: "black",
                    outline: "none",
                    boxShadow: "none"
                  }
                })
              }}
              options={Options}
              ref={ref}
              value={Options.find((c) => c.value === value)}
              onChange={(e: any) => onChange(e.value)}
            />
          )}
          rules={{ required: true }}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <Text color={"red.500"}>{message}</Text>}
        />
      </Flex>
    </Box>
  );
}

export default SelectInput;
