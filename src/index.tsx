import * as React from "react";
import { render } from "react-dom";
import App from "./apps/App";
import RakutenApi from "./services/rakuten.api";

const rootEl = document.getElementById("root");
const provider = new RakutenApi();

render(<App provider={provider} />, rootEl);
 