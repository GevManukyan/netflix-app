import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/login/Login.jsx";
import Main from "../components/main/Main.jsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/login'/>}/>
                <Route element={<Login />} path="/login" />
                <Route element={<Main />} path="/home" />
            </Routes>
        </BrowserRouter>
    )
}