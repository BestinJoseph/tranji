import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import Routers from "./Routers";

import "./index.css";
import { Footer, Header } from "./Components";

const App = () => (
    <div className="container">
        <BrowserRouter>
            <Header />
            <Routers />
            <Footer />
        </BrowserRouter>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
