import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const nav = useNavigate();

    return (
        <>
            <h1>
                404
            </h1>
            <button onClick={() => nav(-1)}>
                back
            </button>
        </>
    )
}