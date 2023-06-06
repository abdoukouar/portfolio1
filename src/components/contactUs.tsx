export const Contact= () => {
    return(
        <div id="contact" className="grid md:grid-cols-3 mb-11 mx-6 sm:mx-[15%]">
            <div className="col-span-1 pb-5">
                <h1 className="text-white font-bold text-xl sm:text-2xl">Get Updates </h1>
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, neque.</p>
            </div>
            <div  className="col-span-2 md:pl-10 my-auto">
                <input type="text" placeholder="  Write your message here...!" className="rounded-md mb-2 mr-1 h-10 w-[400px]" />
                <button className="h-10 px-6 rounded-md bg-[#5B4B8A] text-gray-300 ">submit</button>
            </div>

        </div>
    )
}