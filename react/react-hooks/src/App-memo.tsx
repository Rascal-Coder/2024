import { memo, useEffect, useState } from "react";

function Aaa() {
  const [, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  return (
    <div>
      <MemoBbb count={2}></MemoBbb>
    </div>
  );
}

interface BbbProps {
  count: number;
}

function Bbb(props: BbbProps) {
  console.log("bbb render");

  return <h2>{props.count}</h2>;
}
const MemoBbb = memo(Bbb);
function App() {
  return <Aaa></Aaa>;
}
export default App;
