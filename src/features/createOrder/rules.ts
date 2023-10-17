import { FormRule } from "antd";

export const requiredRules: FormRule[] = [
  {
    required: true,
    message: "This field is required",
  },
];

export const emailRules: FormRule[] = [
  ...requiredRules,
  {
    type: "email",
    message: "Please enter a valid email",
  },
];
