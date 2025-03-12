import { useState } from "react";
import Cardproduct from "../../components/Cardproducts";
import Home from "../../components/Home";
import Login from "../../components/Login";

export default function HomePage() {
  const [firstMeet, setFirstMeet] = useState(
    localStorage.getItem("isFirstMeet") ? false : true
  );

  return (
    <>
      <Home />
      <div className="mb-24">
        <Cardproduct />
      </div>

      {!(firstMeet === false) && <Login setFirstMeet={setFirstMeet} />}
    </>
  );
}
