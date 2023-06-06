import Man1 from "../asstes/man1.jpg";
import Man2 from "../asstes/man2.jpg";
import Girl1 from "../asstes/girl1.jpg";
import Girl2 from "../asstes/girl2.jpg";



export const Members = () => {
    return (
        <div className="bg-white pb-[100px]">
            <div className="py-[40px] text-center">
                <p className="text-[#5B4B8A] font-bold">our teem...</p>
                <h1 className="font-bold text-2xl ">Meet Our Expert Team Members</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex mx-auto justify-center space-x-3">
                    <div className=" w-1/4 md:w-1/12  ">
                        <img src={Man1} alt="man" className="w-full rounded-sm" />
                    </div>
                    <div className="w-1/4 md:w-1/12   ">
                        <img src={Girl1} alt="girl" className="w-full rounded-sm" />
                    </div>
                    <div className="w-1/4 md:w-1/12 ">
                        <img src={Man2} alt="man" className="w-full rounded-sm" />
                    </div>
                    <div className="w-1/4 md:w-1/12  ">
                        <img src={Girl2} alt="girl" className="w-full rounded-sm" />
                    </div>
                </div>

            </div>
            <div className="text-center ">
                <p className="text-[#5B4B8A] text-8xl ">.....</p>
            </div>




        </div>
    )
}