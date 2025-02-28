import { useEffect, useRef, useState } from "react";
import UserCard from "../../components/userCard/index.jsx";

export default function MainPage() {
    const [users, setUsers] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const inputRef = useRef(null);
    const [clickedCardHistory, setClickedCardHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('users')) {
            fetch('https://randomuser.me/api/?results=50')
                .then(result => result.json())
                .then(json => {
                    localStorage.setItem('users', JSON.stringify(json.results));
                    setUsers(json.results);
                });
        } else {
            const usersData = JSON.parse(localStorage.getItem('users'));
            setUsers(usersData);
        }
        setClickedCardHistory(JSON.parse(localStorage.getItem("clickedCardHistory")));
    }, []);

    function handleSearchChange() {
        setSearchResult(
            users.filter(
                (item) =>
                    item.name?.first
                        ?.toLowerCase()
                        .includes(inputRef.current.value.toLowerCase()) ||
                    item.name?.last
                        ?.toLowerCase()
                        .includes(inputRef.current.value.toLowerCase()) ||
                    item.name?.title
                        ?.toLowerCase()
                        .includes(inputRef.current.value.toLowerCase()) ||
                    item.cell?.includes(inputRef.current.value)
            )
        );
    }

    return (
        <>
            <div className="relative">
                <input
                    className="block border rounded-2xl w-72 p-2 m-6 ml-10"
                    placeholder="Search user"
                    type="text"
                    ref={inputRef}
                    onChange={handleSearchChange}
                    onFocus={() => setShowHistory(true)}
                    onBlur={() => setTimeout(() => setShowHistory(false), 200)}
                />
                {showHistory && clickedCardHistory.length > 0 && (
                    <div className="absolute bg-white border border-black rounded-2xl shadow-2xl w-72 ml-10 -translate-y-5">
                        <ul>
                            {clickedCardHistory.map((id, index) => (
                                <li
                                    key={index}
                                    className="p-2 hover:bg-gray-100 rounded-2xl cursor-pointer transition-all"
                                    onClick={() => {
                                        inputRef.current.value = id;
                                        handleSearchChange();
                                        setShowHistory(false);
                                    }}
                                >
                                    {id}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="m-10 gap-6 grid lg:grid-cols-5 md:grid-cols-4">
                {(searchResult.length > 0 ? searchResult : users).map(user => (
                    <UserCard
                        key={`${user.id?.value || 'id'}-${user.cell}`}
                        id={user.id?.value || `${user.cell}-${user.name.first}`}
                        userName={user.name}
                        imagesObj={user.picture}
                        cell={user.cell}
                    />
                ))}
            </div>
        </>
    );
}
