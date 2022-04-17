import {MainRoutes} from "./router/MainRoutes ";
import {FormProvider} from "./contexts/FormContext";

const App = () => {
  return (
    <div>
      <FormProvider>
        <MainRoutes />
      </FormProvider>
    </div>
  );
};
export default App;
