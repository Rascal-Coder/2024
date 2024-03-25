import { useState } from "react";
/**
 * 1.useState
 * useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]
 * type SetStateAction<S> = S | ((prevState: S) => S);
 * https://zh-hans.react.dev/reference/react/useState
 */

function App() {
  // 在这个例子中，count 状态变量保存一个数字。点击按钮会将其加一。
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // return (
  //   <button onClick={handleClick}>
  //     You pressed me {count} times
  //   </button>
  // );

  // 在这个例子中，text 状态变量保存一个字符串。
  // 当你输入时，handleChange 从浏览器 input DOM 元素中读取最新的输入值，并调用 setText 来更新状态。
  // 这允许你在下面展示当前的 text。
  // const [text, setText] = useState("hello");

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setText(e.target.value);
  // }

  // return (
  //   <>
  //     <input value={text} onChange={handleChange} />
  //     <p>You typed: {text}</p>
  //     <button onClick={() => setText("hello")}>Reset</button>
  //   </>
  // );

  // 在这个例子中，liked 状态变量保存一个布尔值。
  // 当你点击 input 时，setLiked 会根据浏览器复选框是否选中来更新 liked 状态变量。
  // liked 变量用于渲染复选框下面的文本。
  // const [liked, setLiked] = useState(true);

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setLiked(e.target.checked);
  // }

  // return (
  //   <>
  //     <label>
  //       <input type="checkbox" checked={liked} onChange={handleChange} />I liked
  //       this
  //     </label>
  //     <p>You {liked ? "liked" : "did not like"} this.</p>
  //   </>
  // );

  // 你可以在同一个组件中声明多个状态变量。每个状态变量都是完全独立的。
  // const [name, setName] = useState('Taylor');
  // const [age, setAge] = useState(42);

  // return (
  //   <>
  //     <input
  //       value={name}
  //       onChange={e => setName(e.target.value)}
  //     />
  //     <button onClick={() => setAge(age + 1)}>
  //       Increment age
  //     </button>
  //     <p>Hello, {name}. You are {age}.</p>
  //   </>
  // );
  const [age, setAge] = useState(42);
  // 点击一次后，age 将只会变为 43 而不是 45！
  // 这是因为调用 set 函数 不会更新 已经运行代码中的 age 状态变量。
  // 因此，每个 setAge(age + 1) 调用变成了 setAge(43)。
  // function handleClick() {
  //   setAge(age + 1); // setAge(42 + 1)
  //   setAge(age + 1); // setAge(42 + 1)
  //   setAge(age + 1); // setAge(42 + 1)
  // }

  // 为了解决这个问题，可以向 setAge 传递一个 更新函数，而不是下一个状态
  function handleClick() {
    setAge((prevAge) => prevAge + 1); // setAge(42 => 43)
    setAge((prevAge) => prevAge + 1); // setAge(43 => 44)
    setAge((prevAge) => prevAge + 1); // setAge(44 => 45)
  }
  return <button onClick={() => handleClick()}>{age}</button>;
}

export default App;
