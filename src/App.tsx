import { Fragment } from "react";
import { formTemplate } from "./assets/backend/form";
import { QuestionComponentsProps, QuestionProps } from "./types/Form.types";
import "./styles/form.css";
import { useForm } from "react-hook-form";
function App() {
  const { title, questions } = formTemplate;
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
    <div className="main-container">
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
    </div>
  );
}

export default App;
