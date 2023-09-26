import { formTemplate } from "./assets/backend/form";
import "./styles/form.css";
import { FormsProvider } from "./components/Forms";
import GenericForm from "./components/GenericForm/GenericForm";

function App() {
  return (
    <div className="main-container">
      <GenericForm form={formTemplate} />
      <FormsProvider formTypes="form1" />
    </div>
  );
}

export default App;
