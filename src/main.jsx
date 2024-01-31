import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/main.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-b8ioc1rh3pzo7zaj.us.auth0.com"
    clientId="7vVxA0jXhJWUitZM7nj90HacZHlg3Anj"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
