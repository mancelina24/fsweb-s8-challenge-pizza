import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./page/Home";
import OrderForm from "./page/OrderForm";
import OrderSuccess from "./page/OrderSuccess";

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
