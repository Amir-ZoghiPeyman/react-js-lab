import { useEffect, useState } from "react";
import UserCard from "./components/userCard/index.jsx";

export default function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('users')) {
            fetch('https://randomuser.me/api/?results=50')
                .then(result => result.json())
                .then(json => {
                    localStorage.setItem('users', JSON.stringify(json.results));
                    setUsers(json.results);
                })
        } else {
            const usersData = JSON.parse(localStorage.getItem('users'));
            setUsers(usersData);
        }
    }, []);

    return (
        <div className="grid grid-cols-8">
            {users.map(user => (
                <UserCard
                    key={user.id.value}
                    userName={user.name}
                    imagesObj={user.picture}
                />
            ))}
        </div>
    );
}