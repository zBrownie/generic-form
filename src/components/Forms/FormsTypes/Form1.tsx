import { JSX } from "react";

export const Form1 = (): JSX.Element => {
  return (
    <form className="form-container">
      <h1>form1</h1>
      <input type="text" />
      <select name="" id="">
        <option value="">select</option>
      </select>
      <button>ok</button>
    </form>
  );
};
