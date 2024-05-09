import React, { Fragment } from "react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const TextInput = React.forwardRef(
  (
    {
      label,
      formErrorMessage,
      placeholder,
      type,
      onClick,
      withIcon,
      ...props
    }: {
      label: string;
      type: string;
      placeholder: string;
      onClick?: () => void;
      formErrorMessage?: string;
      withIcon?: boolean;
    },
    ref: any
  ) => {
    return (
      <FormControl>
        <FormLabel>
          {label}{" "}
          <Text as={"span"} size={"sm"} color="red.500">
            *
          </Text>
        </FormLabel>
        <InputGroup>
          <Input
            size="lg"
            type={type}
            placeholder={placeholder}
            fontSize={"16px"}
            borderRadius={"12px"}
            {...props}
            ref={ref}
          />
          {withIcon && (
            <Fragment>
              <InputRightElement
                onClick={onClick}
                height={"100%"}
                cursor={"pointer"}
              >
                {type === "password" ? (
                  <ViewOffIcon color="#000" />
                ) : (
                  <ViewIcon color="#000" />
                )}
              </InputRightElement>
            </Fragment>
          )}
        </InputGroup>
        {formErrorMessage && (
          <Text color={"red.500"} size={"md"}>
            {formErrorMessage}
          </Text>
        )}
      </FormControl>
    );
  }
);
export default TextInput;
