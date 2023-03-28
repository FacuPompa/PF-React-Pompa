import React from "react";
import { LeapFrog } from "@uiball/loaders";

function Loader(props) {
  return <LeapFrog size={40} speed={2.5} color={props.color || "orange" } />;
}

export default Loader;
