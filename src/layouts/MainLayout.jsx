import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function MainLayout() {
    return <> <header>
        <Navbar/>
    </header>
    <Outlet></Outlet>
    <footer>
        <h1>Il Footer</h1>
    </footer>
    </>
}
export default MainLayout;