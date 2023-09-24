import { JSX } from "react";

export interface FromTemplate {
  id: string;
  title: string;
  questions: QuestionProps[];
}

export type QuestionTypes =
  | "text"
  | "checkbox"
  | "radio"
  | "select"
  | "default";

export interface QuestionProps {
  id: string;
  type: QuestionTypes;
  label: string;
  name: string;
  result: string | QuestionOptionsprops[];
  options?: QuestionOptionsprops[];
}

export interface QuestionOptionsprops {
  id: string;
  optionLabel: string;
  optionValue: string;
}

export type QuestionComponentsProps = Record<
  QuestionTypes,
  (question: QuestionProps) => JSX.Element
>;
