import { useState } from "react";
import CardProduct from "../../components/CardProducts";
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
        <CardProduct />
      </div>

      {!(firstMeet === false) && <Login setFirstMeet={setFirstMeet} />}
    </>
  );
}
