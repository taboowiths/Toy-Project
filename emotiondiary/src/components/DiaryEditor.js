import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(getStringDate(new Date()));
  console.log(getStringDate(new Date()));
  return (
    <div className="DiaryEditor">
      <MyHeader headtext={"새 일기 쓰기"} leftChild={<MyButton text={"Back"} onClick={() => navigate(-1)} />} />
      <div>
        <section>오늘은 언제인가요?</section>
        <div className="input_box">
          <input className="input_date" value={date} type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DiaryEditor;
