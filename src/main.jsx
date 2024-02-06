import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/main.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const onRedirectCallback = (appState) => {
  // Use the appState to redirect to the saved location after login
  window.history.replaceState(
    appState,
    document.title,
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-b8ioc1rh3pzo7zaj.us.auth0.com"
    clientId="7vVxA0jXhJWUitZM7nj90HacZHlg3Anj"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    onRedirectCallback={onRedirectCallback}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
