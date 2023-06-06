import Phone from "../asstes/appdev.png";




export const Appdev = () => {
    return(
        <div id="appdev" className="grid md:mx-[10%] mb-[100px] grid-cols-2">
            <div className="ms-auto items-center my-auto pr-20">
                <img src={Phone} alt="phone" />
            </div>
            <div className="px-3">
                <h1  className="text-white py-4 font-bold text-1xl sm:text-2xl">We Are Succeful Agency For <br /> App Developement</h1>
                <p className="text-gray-400 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eveniet veniam cupiditate magnam voluptates rem neque, tenetur, amet illo repellendus quibusdam tempore omnis quidem sapiente, illum deserunt!</p>
                <button className="text-white rounded-md bg-[#5B4B8A] px-2 py-2 my-5 hover:bg-transparent ">Contact Us</button>
            </div>

        </div>
    )
}