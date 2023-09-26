import { Fragment, JSX } from "react";
import { useForm } from "react-hook-form";
import {
  FromTemplate,
  QuestionComponentsProps,
  QuestionProps,
} from "../../types/Form.types";

interface GenericFormProps {
  form: FromTemplate;
}
const GenericForm = ({ form }: GenericFormProps): JSX.Element => {
  const { title, questions } = form;
  const { register, handleSubmit } = useForm();
  const questionComponents: QuestionComponentsProps = {
    text: (question: QuestionProps) => {
      return (
        <Fragment>
          <label>{question.label}</label>
          <div>
            <input
              type="text"
              placeholder={question.label}
              {...register(question.name)}
            />
          </div>
        </Fragment>
      );
    },
    checkbox: (question: QuestionProps) => {
      return (
        <Fragment>
          <label>{question.label}</label>
          <div>
            {question.options?.map((option) => {
              return (
                <div key={option.id}>
                  <span>{option.optionLabel}</span>
                  <input
                    type="checkbox"
                    value={option.optionValue}
                    {...register(question.name)}
                  />
                </div>
              );
            })}
          </div>
        </Fragment>
      );
    },
    radio: (question: QuestionProps) => {
      return (
        <Fragment>
          <label>{question.label}</label>
          <div>
            {question.options?.map((option) => {
              return (
                <div key={option.id}>
                  <span>{option.optionLabel}</span>
                  <input
                    type="radio"
                    value={option.optionValue}
                    {...register(question.name)}
                  />
                </div>
              );
            })}
          </div>
        </Fragment>
      );
    },
    select: (question: QuestionProps) => {
      return (
        <Fragment>
          <label>{question.label}</label>
          <div>
            <select {...register(question.name)}>
              <option value={undefined}>Select</option>
              {question.options?.map((option) => {
                return (
                  <option key={option.id} value={option.optionValue}>
                    {option.optionLabel}
                  </option>
                );
              })}
            </select>
          </div>
        </Fragment>
      );
    },
    default: () => {
      return (
        <Fragment>
          <span>Component error.</span>
        </Fragment>
      );
    },
  };
  const onSubmit = (values: unknown) => {
    alert(JSON.stringify(values));
  };
  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>
      <ul className="question-container">
        {questions.map((question) => (
          <li key={question.id}>
            {questionComponents[question.type](question)}
          </li>
        ))}
      </ul>
      <div>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default GenericForm;
