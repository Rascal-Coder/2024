import { useRef } from "react";
import { useEffect } from "react";
import React, { useImperativeHandle } from "react";

interface RefProps {
  $focus: () => void;
}

const Guang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        $focus() {
          inputRef.current?.focus();
        },
      };
    },
    [inputRef]
  );

  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  );
};

const WrapedGuang = React.forwardRef(Guang);

function App() {
  const ref = useRef<RefProps>(null);

  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.$focus();
  }, []);

  return (
    <div className="App">
      <WrapedGuang ref={ref} />
    </div>
  );
}

export default App;
