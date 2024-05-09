import React, { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const AdvertiseContext = createContext<any>(null);
function AdvertiseProvider({ children }: { children: React.ReactNode }) {
  const schema = yup
    .object({
      make: yup.string().required("Please select a make from the list"),
      model: yup.string().required("Please select a model from the list"),
      year: yup.string().required("Please select a year from the list"),
      img: yup.array().min(1, "Please select at least one image")
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    setError,
    watch
  } = useForm({
    defaultValues: {
      make: "",
      model: "",
      year: "",
      img: []
    },
    resolver: yupResolver(schema),
    mode: "all",
    criteriaMode: "all"
  });
  return (
    <AdvertiseContext.Provider
      value={{
        control,
        errors,
        handleSubmit,
        register,
        setValue,
        setError,
        watch
      }}
    >
      {children}
    </AdvertiseContext.Provider>
  );
}
export default AdvertiseProvider;
export const useAdvertiseContext = () => useContext(AdvertiseContext);
