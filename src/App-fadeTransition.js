import React, { useState, useRef } from "react";
import FadeTransition from "./components/fadeTransition";

export default function App() {

  const fadeRef = useRef(null);
  const [show, setShow] = useState(true);
  return (
    <div>
      <FadeTransition appear nodeRef={fadeRef} in={show}>
        <h1 ref={fadeRef}>显示</h1>
      </FadeTransition>
      <button onClick={()=> setShow(!show)}>切换</button>
    </div>
  );
}
