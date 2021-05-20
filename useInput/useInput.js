import React, { useState, useEffect, useRef } from "react";
// todo
// 1. input 을 update 해준다
// 2. input 의 validator 함수를 같이 넘겨줘서 조건을 만족하는 경우에만 update

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// const App = () => {
//   const maxLen = (value) => value.length < 10;
//   const name = useInput("Mr.", maxLen);
//   return (
//     <>
//       <h1>Hello</h1>
//       <input placeholder='Name' {...name} />
//     </>
//   );
// };

// export default App;
