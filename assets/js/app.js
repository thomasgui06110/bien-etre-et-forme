import React, { useState } from "react";

import AuthContext from "./contexts/AuthContext";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import CustomerPage from "./pages/CustomerPage";
import InvoicesPage from "./pages/InvoicesPage";
import InvoicesPagesSum from "./pages/InvoicesPagesSum";
import InvoicePage from "./pages/InvoicePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Stats from "./pages/Stats";
import AuthAPI from "./services/authAPI";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// any CSS you require will output into a single css file (app.css in this case)

require("../css/app.css");

AuthAPI.setup();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPI.isAuthenticated()
  );
  console.log(isAuthenticated);

  const NavBarWithRouter = withRouter(Navbar);
  const contextValue = {
    isAuthenticated,
    setIsAuthenticated
  };
  return (
    <AuthContext.Provider value={contextValue}>
      <HashRouter>
        <NavBarWithRouter
        // isAuthenticated={isAuthenticated}
        // onLogout={setIsAuthenticated}
        />

        <main className="container-fluid pt-5">
          <Switch>
            <Route
              path="/login"
              render={props => (
                <LoginPage onLogin={setIsAuthenticated} {...props} />
              )}
            />
              <Route
              path="/register"
              isAuthenticated={isAuthenticated}
              component={RegisterPage}
            />
            <PrivateRoute
              path="/invoices/sum"
              isAuthenticated={isAuthenticated}
              component={InvoicesPagesSum}
            />
            <PrivateRoute
              path="/invoices/:id"
              isAuthenticated={isAuthenticated}
              component={InvoicePage}
            />
            } />
            <PrivateRoute
              path="/invoices"
              isAuthenticated={isAuthenticated}
              component={InvoicesPage}
            />
            } />
            <PrivateRoute
              path="/customers/:id"
              isAuthenticated={isAuthenticated}
              component={CustomerPage}
            />
            } />
            <PrivateRoute
              path="/customers"
              isAuthenticated={isAuthenticated}
              component={CustomersPage}
            />
                        <PrivateRoute
              path="/stats"
              isAuthenticated={isAuthenticated}
              component={Stats}
            />
            } />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
      </HashRouter>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </AuthContext.Provider>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
