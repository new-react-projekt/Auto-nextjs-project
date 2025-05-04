import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // sehr wichtige Styles
import { config } from "@fortawesome/fontawesome-svg-core";
import "../lib/fontawesome"; // Konfiguration

config.autoAddCss = false; // verhindert doppelte CSS-Injektion

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
