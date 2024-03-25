import { useEffect, useState } from "react";
// async function queryData() {
//   const data = await new Promise<number>((resolve) => {
//     setTimeout(() => {
//       resolve(666);
//     }, 2000);
//   });
//   return data;
// }

function App() {
  //   const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     queryData().then(data => {
  //       setNum(data);
  //       console.log("🚀 ~ queryData ~ data:", data)
  //     })
  //   }, []);
  // // 这个数组叫做依赖数组，
  // // react 是根据它有没有变来决定是否执行 effect 函数的，如果没传则每次都执行。
  //   return (
  //     <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
  //   );
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("effect");
    const timer = setInterval(() => {
      console.log(num);
    }, 1000);

    return () => {
      console.log("clean up");
      clearInterval(timer);
    };
  }, [num]);

  return <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>;
}

export default App;
