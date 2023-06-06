export const Work = () => {
    return(
        <div className="grid md:grid-cols-3 px-20 pb-[60px]  mb-11 bg-white">
            <div className="text-center py-7 border-r shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
                <h1 className="font-bold text-[#5B4B8A] text-xl">300 +</h1>
                <p className="text-gray-400">Project</p>
            </div>
            <div  className="text-center py-7  border-r transform hover:scale-110 transition-all duration-300 ease-in-out shadow-lg">
                <h1 className="font-bold text-[#5B4B8A] text-xl">15 Years</h1>
                <p className="text-gray-400">Experience</p>
            </div>
            <div  className="text-center py-7 transform hover:scale-110 transition-all duration-300 ease-in-out  shadow-lg">
                <h1 className="font-bold text-[#5B4B8A] text-xl">2k +</h1>
                <p className="text-gray-400">Reviews</p>
            </div>

        </div>
    )
}