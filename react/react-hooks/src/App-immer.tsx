import { produce } from "immer";
import { Reducer, useReducer, useState } from "react";

interface Data {
  a: {
    c: {
      e: number;
      f: number;
    };
    d: number;
  };
  b: number;
}

interface Action {
  type: "add";
  num: number;
}

function reducer(state: Data, action: Action) {
  //   switch (action.type) {
  //     case "add":
  //       return {
  //         ...state,
  //         a: {
  //           ...state.a,
  //           c: {
  //             ...state.a.c,
  //             e: state.a.c.e + action.num,
  //           },
  //         },
  //       };
  //     default:
  //       return state;
  //   }
  // 使用immer
  return produce(state, (state) => {
    state.a.c.e += action.num;
  });
}

function App() {
  const [obj, setObj] = useState({
    a: {
      c: {
        e: 0,
        f: 0,
      },
      d: 0,
    },
    b: 0,
  });
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    "zero",
    (param) => {
      const zeroData = {
        a: {
          c: {
            e: 0,
            f: 0,
          },
          d: 0,
        },
        b: 0,
      };
      const oneData = {
        a: {
          c: {
            e: 1,
            f: 1,
          },
          d: 1,
        },
        b: 1,
      };
      return param === "zero" ? zeroData : oneData;
    }
  );

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "add", num: 2 })}>加</button>
        <div>{JSON.stringify(res)}</div>
      </div>
      <div>
        <button
          onClick={() => {
            // obj.a.c.e++;
            // setObj(obj);
            // 使用immer
            return setObj(
              produce(obj, (obj) => {
                obj.a.c.e++;
              })
            );
          }}
        >
          加
        </button>
        <div>{JSON.stringify(obj)}</div>
      </div>
    </>
  );
}

export default App;
