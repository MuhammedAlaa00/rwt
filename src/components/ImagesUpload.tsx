"use client";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "@chakra-ui/react";
import { useAdvertiseContext } from "@/providers/AdvertiseProvider";
function ImagesUpload() {
  const [files, setFiles] = useState<any>([]);
  const { setValue, errors, watch } = useAdvertiseContext();
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: {
      "image/*": []
    },
    onDrop: (acceptedFiles) => {
      setValue("img", acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    maxFiles: 5,
    maxSize: 2 * 1000000
  });
  useEffect(() => {
    setFiles(
      watch()?.img?.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);
  const thumbs = watch()?.img?.map((file: any) => (
    <Box key={file.name}>
      <Box
        bg={"gray.200"}
        width={["500px", "100%"]}
        p={"3"}
        m={"2"}
        borderRadius={"8px"}
        display={"flex"}
        gap={"8px"}
        alignItems={"center"}
      >
        <Image
          objectFit="cover"
          src={file.preview}
          boxSize={"50px"}
          borderRadius={"8px"}
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <Text as={"span"} color={"gray.600"}>
          {file.name}
        </Text>
      </Box>
    </Box>
  ));
  return (
    <Fragment>
      <Box
        boxShadow="xl"
        width={["100%", "90%"]}
        m="auto"
        p="10"
        rounded="md"
        bg="white"
        display={"flex"}
        flexDirection={["column", "column"]}
        gap={"16px"}
      >
        <Box
          p={"12"}
          bg="gray.100"
          rounded={"md"}
          width={files.length > 0 ? ["100%", "100%"] : "100%"}
          border={"1px"}
          borderColor={"gray.300"}
          borderStyle={"dashed"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"16px"}
            width={"100%"}
          >
            <div {...getRootProps({ className: "dropzone" })}>
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                gap={"16px"}
                justifyContent={"center"}
              >
                <input {...getInputProps()} />
                <ArrowUpIcon h={16} w={16} color={"gray.500"} />
                <p>Drag files to upload</p>
              </Flex>
            </div>
          </Flex>
        </Box>
        <Box>{thumbs}</Box>
      </Box>
      {fileRejections.length > 0 && (
        <Text as={"p"} color={"red.500"} fontWeight={"bold"}>
          {fileRejections[0].errors[0].code === "file-too-large"
            ? "Sorry, Can't Upload file larger than 2MB"
            : " Sorry, Can't Upload More Than Five Files"}
        </Text>
      )}
      {errors?.img && (
        <Text as={"p"} color={"red.500"} fontWeight={"bold"}>
          {errors?.img?.message}
        </Text>
      )}
    </Fragment>
  );
}
export default ImagesUpload;
