import Sidebar from "@components/sidebar";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import HomeContent from "./pageContent/homeContent";

function Homepage() {
    return (
        <div className='h-full w-full bg-gray-900 text-white flex'>
            <Sidebar></Sidebar>
            <div className="container min-w-full flex flex-col justify-between">
                <Navbar></Navbar>
                <HomeContent></HomeContent>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Homepage;