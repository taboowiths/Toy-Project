import React, { useEffect, useState } from "react";

const UnmountedTest = () => {
  useEffect(() => {
    console.log("Mount!");
  }, []);
  return <div></div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountedTest />}
    </div>
  );
};

export default Lifecycle;
