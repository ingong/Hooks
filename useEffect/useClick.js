// todo
// 1. App 내부 title 변수 선언, useClick 함수의 반환값 갖도록한다
// 2. 이 때 console.log(Hello 를 넘겨준다)
// 3. useClick 에서는 useRef 와 useEffect 를 활용해서 eventListener 를
// 더 하고, 제거하는 방식을 취한다
// 4. useClick 의 return 값에 대해서 생각해보기!

// ! 중요해
// useEffect [] dependency 를 주면 update 될때만 실행된다!
// useEffect 에서 function을 return 한다면 componentwillunMount 될 때 호출될 것이다

export const useClick = (onClick) => {
  // if (typeof onClick !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListenr("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
  return (
    <div className='App'>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
