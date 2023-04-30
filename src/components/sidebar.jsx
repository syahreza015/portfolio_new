import { Drawer } from "@mui/material";
import { DrawerContext } from "@config/context";
import { useContext } from "react";
import { personIcon, bookIcon } from "@config/icons";

const SideMenu = (props) => {
    const { title, icon } = props;
    return (
        <button className="flex justify-start align-center gap-7 bg-gray-950 bg-opacity-70 border-2 border-blue-700 border-opacity-50 hover:border-opacity-100 px-2 py-1 rounded-sm">
            {icon}
            {title}
        </button>
    )
}

function Sidebar() {
    const { isDrawerOpen, setIsDrawerOpenDispatch } = useContext(DrawerContext);
    return (
        <Drawer open={isDrawerOpen} onClose={() => { setIsDrawerOpenDispatch() }}>
            <div className="container p-2 bg-gray-800 border-r-2 border-blue-800 text-white h-full flex flex-col justify-between align-center text-center">
                <div className="container flex flex-col gap-2">
                    <SideMenu title="about me" icon={personIcon}></SideMenu>
                    <SideMenu title="my works" icon={bookIcon}></SideMenu>
                </div>
                <div className="container flex flex-col gap-1 justify-center align-center">
                    <img src="/default.jpg" alt="image" className="rounded-full w-16 h-16 border-2 border-white hover:border-blue-700 cursor-pointer" />
                    <p className="text-sm">copyright <span className="text-blue-700">&copy;</span> 2023</p>
                </div>
            </div>
        </Drawer>
    );
}

export default Sidebar;