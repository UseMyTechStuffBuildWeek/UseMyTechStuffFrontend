import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required"),
  description: yup
    .string()
    .min(5,"description must be atleast 5 characters")
    .max(250, "description can't exceed 250 characters")
    .required("description is required"),
  imgUrl: yup
    .string()
    .required("image url is required"),
});