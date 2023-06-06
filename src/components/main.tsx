import Pc from "../asstes/pc.png";
import Cloud from "../asstes/icons8-développement-cloud-94.png";


export const Main = () => {
    return (
        <div id="home" className="grid md:grid-cols-2 text-white items-center justify-center py-[90px] md:pl-[15%] pl-20    px-auto">
            
            <div>
            <img src={Cloud} alt="cloud" className=" relative left-[70%]    " />
           
                

                <h1 className="font-bold text-3xl md:text-4xl">We Build Apps That <br />Get Tranding On Appworld</h1>
                <p className="pt-8 text-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ratione provident deleniti atque consectetur perferendis, et distinctio nobis reiciendis dolorem.</p>
                <button className="border px-5 mx-2 my-8 rounded-md py-2 bg-[#5B4B8A] hover:bg-[#0C134F]">contact us</button>
                <button className="border px-5 mx-2 my-8 rounded-md py-2">about us</button>
            </div>
            <div className="">
           
            <img src={Pc} alt="pc" className="ml-5" />
            </div>
        </div>
    )
}