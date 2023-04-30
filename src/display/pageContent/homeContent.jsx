import Default from "@assets/default.jpg"
import myPhoto from "@assets/myPhoto.png"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ContentCard = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 550,
        })
    }, [])
    const { alt, img } = props;
    return (
        <div data-aos="zoom-in" className="cardContainer p-3 flex justify-center align-center rounded-sm bg-gray-800 hover:bg-opacity-80 cursor-pointer">
            <img src={img} alt={alt} className="w-48 rounded-sm border-2 border-blue-700 border-opacity-50 hover:border-opacity-100" />
        </div>
    )
}

function HomeContent() {

    return (
        <main className="container flex flex-col gap-16 min-w-full flex-grow px-20 py-10 bg-gradient-to-b from-gray-900 to-gray-700">
            <section id="sectionOne" className="flex flex-col-reverse md:flex-row justify-between gap-5">
                <div className="leftContainer w-full md:w-1/3 text-justify border-b-2 border-blue-700 align-center animate__animated animate__slideInLeft">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam quasi repellendus. Est enim, ipsa modi laborum eius itaque neque vel sint, incidunt ab labore facilis quaerat, fuga beatae ullam!
                </div>
                <div className="rightContainer bg-blue-800 rounded-full p-2 border-2 borer-white overflow-hidden flex justify-center align-center w-64 mx-auto md:mx-0 animate__animated animate__slideInRight">
                    <img src={myPhoto} alt="image" className="w-60 h-60 rounded-md -mb-2" />
                </div>
            </section>
            <section id="sectionTwo" className="flex flex-col gap-5">
                <div className="topContainer w-full md:w-1/2 mx-auto text-center border-t-2 border-blue-700 py-3 animate__animated animate__fadeIn">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quod maxime aspernatur id ducimus. Est doloremque vero ea non nemo. Omnis, sapiente. Corporis accusantium possimus atque est necessitatibus enim hic!
                </div>
                <div className="container bg-gray-950 border-2 border-blue-700 rounded-sm p-3 flex justify-center gap-4 align-start flex-wrap">
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                    <ContentCard img={Default} alt="image"></ContentCard>
                </div>
            </section>
        </main>
    );
}

export default HomeContent;