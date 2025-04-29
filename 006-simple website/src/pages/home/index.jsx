import { NavLink } from "react-router-dom";

export default function Home() {

    return (
        <>
            <NavLink to="/About"
                className={({ isActive }) => isActive ? "active" : ""}
                style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>
                About
            </NavLink>
            <h1>
                home
            </h1>
        </>
    )
}