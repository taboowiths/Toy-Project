import React, { useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const [state, setState] = useState({
    author: "",
    contents: "",
    emotion: 1,
  });

  const authorInput = useRef();
  const contentsInput = useRef();

  useEffect(() => {
    console.log("DiaryEditor 렌더");
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();

      return;
    }

    if (state.contents.length < 5) {
      contentsInput.current.focus();
      return;
    }
    onCreate(state.author, state.contents, state.emotion);
    alert("저장 성공!");
    setState({
      author: "",
      contents: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} name="author" value={state.author} placeholder="작성자" onChange={handleChangeState} />
      </div>
      <div>
        <textarea ref={contentsInput} name="contents" value={state.contents} placeholder="내용" onChange={handleChangeState} />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleSubmit}>저장하기</button>
    </div>
  );
};

export default React.memo(DiaryEditor);
