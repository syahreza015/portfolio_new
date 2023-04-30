import Default from "@assets/default.jpg"

const SocialAccounts = (props) => {
    const { image, alt } = props;
    return (
        <div className="bg-gray-900 p-2 rounded-sm flex justify-center align-center hover:bg-gray-950 w-80 cursor-pointer border-2 border-blue-700 border-opacity-50 hover:border-opacity-100">
            <img src={image} alt={alt} className=" rounded-sm" />
        </div>
    )
}

function Footer() {
    return (
        <div className="footer bg-gray-800 px-4 py-3 flex flex-col gap-5 md:flex-row justify-between align-center border-t-2 border-blue-700">
            <div className="leftContainer flex flex-col w-5/6 md:w-1/4 justify-between h-full align-center">
                <div className="topContainer text-justify hidden md:block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias illum quod culpa nisi aliquid odit quae iste tempora accusamus error illo adipisci numquam unde, eum neque voluptate hic debitis!
                </div>
                <div className="container flex flex-col gap-3 justify-center align-center">
                    <span className="font-bold flex flex-col w-full justify-center align-center">
                        <p className="border-b-2 border-blue-800 px-4">Social</p>
                    </span>
                    <div className="container flex gap-2 justify-center align-center">
                        <SocialAccounts image={Default} alt="social"></SocialAccounts>
                        <SocialAccounts image={Default} alt="social"></SocialAccounts>
                        <SocialAccounts image={Default} alt="social"></SocialAccounts>

                    </div>
                </div>
            </div>
            <div className="rightContainer flex flex-col gap-3 w-full md:w-1/4 justify-center align-center">
                <span className="font-bold flex flex-col w-full justify-center align-center">
                    <p className="border-b-2 border-blue-800 px-4">Contact me</p>
                </span>
                <form className="container flex flex-col gap-2 justify-center align-center">
                    <div className="col flex flex-col">
                        <label htmlFor="message">Identity</label>
                        <input type="text" name="message" className="w-96 md:w-72 bg-gray-900 border-2 p-2 border-blue-700 border-opacity-50 focus:border-opacity-100 rounded-sm outline-none text-start text-white text-sm" placeholder="i am..." />
                    </div>
                    <div className="col flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="7" className="w-96 md:w-72 bg-gray-900 border-2 p-2 border-blue-700 border-opacity-50 focus:border-opacity-100 rounded-sm outline-none text-start text-white text-sm" placeholder="my message is..."></textarea>
                    </div>
                    <button className="bg-gray-950 rounded-sm border-blue-700 border-2 border-opacity-50 hover:border-opacity-100 text-blue-700 w-96 md:w-72 py-1">send</button>
                </form>
            </div>
        </div>
    );
}

export default Footer;