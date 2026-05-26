import React from "react";
import { Consumer } from "./FormContext";

export default function FormButton(props) {
  return (
    <Consumer>
      {(ctx) => {
        return (
          <div>
            <button onClick={()=> ctx.onSubmit()}>{props.children}</button>
          </div>
        );
      }}
    </Consumer>
  );
}
