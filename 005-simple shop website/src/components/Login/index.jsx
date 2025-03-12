export default function Login({ setFirstMeet }) {
  function handleStartClick() {
    localStorage.setItem("isFirstMeet", "false");
    setFirstMeet(false);
  }
  return (
    <>
      <div className="bg-[#400d54] flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen z-10">
        <div className="flex items-center justify-center">
          <img src="src/imges/Annotation 2025-03-06 123521.png" alt="" />
        </div>
        <div className="flex justify-center items-center w-full p-4">
          <div
            onClick={handleStartClick}
            className="bg-amber-50 rounded-2xl w-full max-w-96 "
          >
            <p className="text-gray-500 text-center p-4  font-bold">
              Get Start
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
