// todo logic Flow
// useRef 를 사용하는 경우 element 라는 변수에 useRef 할당 후
// useEffect 사용한다
const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });
  return { ref: element, style: { opacity: 0 } };
};
const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className='App'>
      <h1 {...fadeInH1}>Hello</h1>
      <h1 {...fadeInP}>Hi</h1>
    </div>
  );
};

export default App;
