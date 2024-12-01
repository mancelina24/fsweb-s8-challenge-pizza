import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import OrderSuccess from "./Components/OrderSuccess";
import OrderForm from "./Components/OrderForm";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orderform">
          <OrderForm />
        </Route>
        <Route path="/ordersuccess">
          <OrderSuccess />
        </Route>
      </Switch>
    </>
  );
}

export default App;
