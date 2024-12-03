import React from "react";

import { Info } from "./Info";
import { Hello } from "./Hello";
import { Provider } from "./components/ui/provider";

export const App = () => (
  <Provider>
    <h1>Welcome to Meteor To the test!</h1>
    <Hello />
    <Info />
  </Provider>
);
