import { menuIcon } from "@config/icons";
import { DrawerContext } from "@config/context";
import { useContext } from "react";

function Navbar() {
    const { isDrawerOpen, setIsDrawerOpenDispatch } = useContext(DrawerContext);
    return (
        <nav className="container bg-gray-800 min-w-full border-b-2 border-blue-800 py-1 px-3 flex justify-between align-center sticky top-0 z-10">
            <div className="leftContainer flex justify-start align-center gap-3">
                <button className="bg-gray-900 rounded-full p-3 border-2 border-blue-700 border-opacity-50 hover:border-opacity-100" onClick={() => {
                    setIsDrawerOpenDispatch()
                }}>{menuIcon}</button>

            </div>
            <div className="rightContainer flex justify-end align-center gap-3">
                <p>username</p>
                <img src="/default.jpg" alt="image" className="rounded-full w-12 h-12 border-2 border-white hover:border-blue-700 cursor-pointer" />
            </div>
        </nav>
    );
}

export default Navbar;