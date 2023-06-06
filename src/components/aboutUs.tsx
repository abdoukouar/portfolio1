import Coding from "../asstes/pexels-olia-danilevich-4974920.jpg"


export const AboutUs= () => {
    return(
        <div id="about" className="py-[80px]  shadow-lg gap-4 grid md:grid-cols-2 mb-[50px] mx-[10%] bg-white rounded-md">
            <div className="items-center justify-center mx-auto pb-10">
                <img src={Coding} alt="poeple-coding" className="w-[350px]  rounded-md" />

            </div>
            <div className="text-left md:pl-0 pl-4">
                <p className="text-[#5B4B8A]">Why choose us...</p>
                <h1 className="font-extrabold text-3xl">We Are Working <br /> With 15 Years of Experience</h1>
                <p className=" text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium <br /> eaque quasi necessitatibus nam, ex optio voluptatibus soluta odit <br /> expedita  autem.</p>
                <button className="rounded-md bg-[#5B4B8A]  py-2 mt-5 text-white text-sm hover:bg-white hover:text-[#5B4B8A] px-2">Learn more</button>
            </div>

        </div>
    )
}