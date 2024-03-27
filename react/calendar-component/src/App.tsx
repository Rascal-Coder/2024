import dayjs from "dayjs";
import "./App.css";
import Calendar from "./Calendar";
function App() {
  return (
    <div className="App">
      <Calendar value={dayjs("2024-03-20")} locale="zh-CN"></Calendar>
    </div>
  );
}

export default App;
