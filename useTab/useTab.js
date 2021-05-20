import React, { useState, useEffect, useRef } from "react";
// todo
// 1. 초기 tab 과 전체 tab 을 인자로 넘겨준다
// 2. return : 현재 item 과 changeItem 함수를 반환
// 3. index 를 클릭하는 경우 해당 Index 의 tab 을 보여준다

const contents = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) return;
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  console.log(currentItem);
  return (
    <>
      <div>
        <h1>Hello</h1>
        {contents.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
      </div>
      {currentItem.content}
    </>
  );
};
