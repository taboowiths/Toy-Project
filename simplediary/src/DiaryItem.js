import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ author, contents, created_date, emotion, id }) => {
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const localContentInput = useRef();

  const handleRemove = () => {
    console.log(id);
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContents(contents);
  };

  const handleEdit = () => {
    if (localContents.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContents);
      toggleIsEdit();
    }
  };

  const [localContents, setLocalContents] = useState(contents);

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleDateString()}</span>
      </div>
      <div className="contents">
        {isEdit ? (
          <>
            <textarea ref={localContentInput} value={localContents} onChange={(e) => setLocalContents(e.target.value)} />
          </>
        ) : (
          <div>{contents}</div>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>취소</button>
          <button onClick={handleEdit}>등록</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제</button>
          <button onClick={toggleIsEdit}>수정</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
