import './App.css'
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { BooksPage } from "./pages/BooksPage.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/books'} element={<BooksPage />} />
                <Route path={'/*'} element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
