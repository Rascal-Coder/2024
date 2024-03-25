import { memo, useCallback, useEffect, useMemo, useState } from "react";

function Aaa() {
  const [, setNum] = useState(1);

  const [count, setCount] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  function bbbCallback() {
    console.log("bbb callback");
  }

  const bbbCallback1 = useCallback(function () {
    console.log("bbb callback1");
  }, []);

  const count1 = useMemo(() => {
    return count * 10;
  }, [count]);

  return (
    <div>
      <MemoBbb count={count1} callback={bbbCallback1}></MemoBbb>
    </div>
  );
}

interface BbbProps {
  count: number;
  callback: Function;
}

function Bbb(props: BbbProps) {
  console.log("bbb render");
  //   return <h2 onClick={() => props.callback()}>{props.count}</h2>;
  return <h2>{props.count}</h2>;
}

const MemoBbb = memo(Bbb);

function App() {
  return <Aaa></Aaa>;
}

export default App;
