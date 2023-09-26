import { JSX } from "react";
import { Form1, Form2 } from "./FormsTypes";

type FormTypes = "form1" | "form2";
interface FormsProviderProps {
  formTypes: FormTypes;
}
export const FormsProvider = ({
  formTypes,
}: FormsProviderProps): JSX.Element => {
  const forms = {
    form1: <Form1 />,
    form2: <Form2 />,
    default: <></>,
  };
  return <>{forms[formTypes || "default"]}</>;
};
