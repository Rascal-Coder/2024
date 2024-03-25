import { useContext, createContext } from "react";
const TestCtx = createContext({
  a: "1111",
});
function Aaa() {
  return (
    <TestCtx.Provider value={{ a: "2222" }}>
      <Bbb></Bbb>
    </TestCtx.Provider>
  );
}
function Bbb() {
  const res = useContext(TestCtx);
  return <div>{JSON.stringify(res)}</div>;
}
function App() {
  return (
    <Aaa></Aaa>
  );
}
export default App;
