import { useNavigate } from "react-router-dom";

export default function UserCard({ userName, imagesObj, cell, id }) {
    const navigate = useNavigate();

    const handleClick = () => {

        const history = JSON.parse(localStorage.getItem("clickedCardHistory"));

        if (!history.includes(id)) {
            if (history.length >= 4) {
                history.pop();
            }
            history.unshift(id);
            localStorage.setItem("clickedCardHistory", JSON.stringify(history));
            inputRef.current.value = "";
        }
        navigate(`/contact?id=${id}`);
    };

    return (
        <div onClick={handleClick} className="w-full h-full p-6 bg-white text-white border cursor-pointer border-gray-200 rounded-4xl shadow-2xl hover:bg-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-700 transition-all">
            <img className="w-full rounded-full border-2" src={imagesObj.large} alt="" />
            <div className="flex flex-col justify-center items-center text-center mt-4">
                <h2>{userName.title}. {userName.first} {userName.last}</h2>
                <span>{cell}</span>
            </div>
        </div>
    );
}