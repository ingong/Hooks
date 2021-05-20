// todo logic Flow
// Delete the world 라는 버튼을 갖고 있고
// 클릭하면 confirmDelete 를 부른다
// confirmDelete 는 confirm Action 을 부르게 된다
// browser 에게 confirm 을 묻고, 그렇다면 callBack 이 실행된다
// callBack 은 delete the world 라는 함수이다
// 취소를 하면 Abort 라는 함수가 실행된다

const useConfirm = (message, callback, rejected) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejected();
    }
  };
  return confirmAction;
};
const App = () => {
  const deleteWord = () => console.log("Delete the world");
  const aborted = () => console.log("Rejected");
  const confirmDelete = useConfirm("Are you sure", deleteWord, aborted);
  return (
    <div className='App'>
      <button onClick={confirmDelete}>Delete World</button>
    </div>
  );
};

export default App;
