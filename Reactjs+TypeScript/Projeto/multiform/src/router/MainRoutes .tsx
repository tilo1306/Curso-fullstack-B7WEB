import {useRoutes} from "react-router-dom";

import {FormStep1} from "../pages/FormStep1";
import {FormStep2} from "../pages/FormStep2";
import {FormStep3} from "../pages/FormStep3";

export const MainRoutes = () => {
  return useRoutes([
    {path: "/", element: <FormStep1 />},
    {path: "/step2", element: <FormStep2 />},
    {path: "/step3", element: <FormStep3 />},
  ]);
};
