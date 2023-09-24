import { FromTemplate } from "../../types/Form.types";

export const formTemplate: FromTemplate = {
  id: "form1-pep",
  title: "Form to DEVS",
  questions: [
    {
      id: "1",
      type: "text",
      label: "e-mail",
      result: "bruno@email.com",
      name: "email",
    },
    {
      id: "2",
      type: "radio",
      label: "Question yes or no?",
      name: "yerOrNo",
      options: [
        {
          id: "1",
          optionLabel: "Sim",
          optionValue: "true",
        },
        {
          id: "2",
          optionLabel: "Não",
          optionValue: "false",
        },
        {
          id: "3",
          optionLabel: "N/S",
          optionValue: "unknow",
        },
      ],
      result: "false",
    },
    {
      id: "3",
      type: "checkbox",
      label: "Week Days",
      name: "weekdays",
      options: [
        {
          id: "1",
          optionLabel: "Sunday",
          optionValue: "sunday",
        },
        {
          id: "2",
          optionLabel: "Saturday",
          optionValue: "saturday",
        },
        {
          id: "3",
          optionLabel: "Friday",
          optionValue: "friday",
        },
      ],
      result: [],
    },
    {
      id: "4",
      type: "select",
      label: "User role",
      name: "userRole",
      options: [
        {
          id: "1",
          optionLabel: "Admin",
          optionValue: "admin",
        },
        {
          id: "2",
          optionLabel: "IT",
          optionValue: "it",
        },
        {
          id: "3",
          optionLabel: "HR",
          optionValue: "hr",
        },
      ],
      result: [],
    },
  ],
};
