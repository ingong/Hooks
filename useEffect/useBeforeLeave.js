// todo logic Flow
// useBeforeLeave 함수 만들기
// 내부에 handle 이라는 함수 만들다. leaving 을 반환한다
// useEffect 사용
// addEventListener, removeEventListener : mouseLeave 를 감지한다
// App 내부 : onBefore 함수 만들기! 떠나지마세요..
const useBeforeLeaeve = () => {
  const handle = () => console.log("Leaving");
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
const App = () => {
  const onBefore = () => console.log("Plz don't leave");
  useBeforeLeaeve();
  return <div className='App'></div>;
};

export default App;
