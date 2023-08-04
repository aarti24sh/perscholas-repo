import React from "react";
//import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./features/store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
