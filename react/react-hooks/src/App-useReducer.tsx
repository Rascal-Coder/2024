import { Reducer, useReducer } from "react";

interface Data {
  result: number;
}

interface Action {
  type: "add" | "minus";
  num: number;
}
function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      //   return {
      //     result: state.result + action.num,
      //   };
      //   直接修改原始的 state 返回，是触发不了重新渲染的.必须返回一个新的对象才行
      state.result += action.num;
      return state;
    case "minus":
      return {
        result: state.result - action.num,
      };
    default:
      return state;
  }
}

function App() {
  //   const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0});
  // 另一种重载，通过函数来创建初始数据，这时候 useReducer 第二个参数就是传给这个函数的参数
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    "zero",
    (param) => {
      return {
        result: param === "zero" ? 0 : 1,
      };
    }
  );
  return (
    <div>
      <button onClick={() => dispatch({ type: "add", num: 2 })}>加</button>
      <div>{res.result}</div>
      <button onClick={() => dispatch({ type: "minus", num: 1 })}>减</button>
    </div>
  );
}

export default App;
