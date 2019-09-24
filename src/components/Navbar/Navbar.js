// import React from "./node_modules/react";
import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="bg-dark navbar-dark container-fluid text-center pt-1 pb-1">
      <div className="row">
        <div className="col-md-4">
          <h2><a href="." className="text-white nounderline" id="app-name">The Clicky Game</a></h2>
        </div>
        <div className={"col-md-4 " + (props.gameStatus === "2" ? " text-danger" : (props.gameStatus === "1" ? " text-success" : " text-info"))}>
          
        </div>
      </div>
    </div>
);

export default Navbar;
