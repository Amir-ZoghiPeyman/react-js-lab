import { useEffect, useState } from "react";
import api from "../../api/api.js";

export default function Contact() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetcher() {
            const result = await api.get("api/?id=374.131.949-94");
            console.log(result);
            setUser(result.data.results[0]);
            setIsLoading(false);

            return result;
        }

        const result = fetcher();

        // fetch("https://randomuser.me/api/?id=374.131.949-94")
        //   .then((res) => res.json())
        //   .then((json) => {
        //     setIsLoading(false);
        //     setUser(json.results[0]);
        //   });
    }, []);

    if (isLoading) {
        return <h2>loading...</h2>;
    }

    return (
        <>
            <h1>{user?.name?.first}</h1>
        </>
    );
}
