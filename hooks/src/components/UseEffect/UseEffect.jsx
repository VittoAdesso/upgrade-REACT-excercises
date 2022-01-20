import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  //usamos useState para definir mouseEvent y su setter
  let [mouseEvent, setMouseEvent] = useState(0);

  useEffect(() => {
    //useEffect se ejecutará después del render y en él establecemos el listener
    document.addEventListener("mousemove", setMouseEvent, false);
  }, []);

  return (
   <fieldset>
   <h2>UseEffect</h2>
      <div>
        X: { mouseEvent.clientX }
    </div>
    <div>
        Y: { mouseEvent.clientX }
      </div>
    </fieldset>);
}

export default UseEffectComponent;