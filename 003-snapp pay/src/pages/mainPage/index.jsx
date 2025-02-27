import { useEffect, useRef, useState } from "react";
import UserCard from "../../components/userCard/index.jsx";

export default function MainPage() {
    const [users, setUsers] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const inputRef = useRef(null);

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
    }, []);

    function handleSearchChange() {
        const searchVal = inputRef.current.value.toLowerCase();
        const filterUsers = users.filter(item => {
            return (
                item.name?.first?.toLowerCase().includes(searchVal) ||
                item.name?.last?.toLowerCase().includes(searchVal) ||
                item.name?.title?.toLowerCase().includes(searchVal) ||
                item.cell?.includes(searchVal)
            );
        });
        setSearchResult(filterUsers);
    }

    return (
        <>
            <input
                className="block border p-2 m-4"
                placeholder="search user"
                type="text"
                ref={inputRef}
                onChange={handleSearchChange}
            />
            <div className="grid grid-cols-8">
                {(searchResult.length > 0 ? searchResult : users).map(user => (
                    <UserCard
                        key={`${user.id?.value || 'id'}-${user.cell}`}
                        userName={user.name}
                        imagesObj={user.picture}
                        cell={user.cell}
                    />
                ))}
            </div>
        </>
    );
}