// todo
// 1. App 내부에 titleupdater 라는 변수에 Hook 을 할당한다
// 2. useTitle 이라는 함수를 만들고, 그 내부에 updateTitle 이라는 함수를 만든다
// 3. useTitle 내부에서 useEffect 를 사용해서, title 이 update 될때만 함수가 실행되게 한다
// 4. return 하는 값이 뭘까 생각해봐

export const useTitle = (initialValue) => {
  const [title, setTitle] = useState(initialValue);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return <div className='App'></div>;
};
