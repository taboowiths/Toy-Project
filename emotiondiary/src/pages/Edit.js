import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log("id: ", id);
  console.log("mode: ", mode);

  return (
    <div>
      <h1>Edit</h1>
      <button onClick={() => setSearchParams({ who: "jeong" })}>QS바꾸기</button>
      <button onClick={() => navigate("/home")}>HOME</button>
      <p>이곳은 Edit 페이지 입니다.</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
