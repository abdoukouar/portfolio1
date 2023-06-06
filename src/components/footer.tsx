import {AiFillInstagram,AiFillYoutube, AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook} from "react-icons/ai"





export const Footer =() => {
    return(
       <div id="footer" className="bg-white mt-10 grid px-[10%] py-11 md:grid-cols-5">
        <div className="col-span-2 text-left  ">
            <h1 className="text-[#5B4B8A] logo font-extrabold text-2xl">Aedux</h1>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque quis assumenda voluptatum dolorem.</p>
             <AiFillInstagram className="inline-block md:mx-1 mr-9 text-[#5B4B8A]"/>
              < AiFillTwitterCircle className="text-[#5B4B8A] md:mx-1 mx-8 inline-block"/>
              <AiFillLinkedin className="text-[#5B4B8A] md:mx-1 mx-9 inline-block"/>
               < AiFillFacebook className="text-[#5B4B8A] md:mx-1  mx-8 inline-block "/>
               <AiFillYoutube className="text-[#5B4B8A] md:mx-1  mx-8 inline-block "/>
        </div>
        <div className="col-span-1 py-4">
            <h1 className="text-[#5B4B8A] font-bold">naviguation</h1>
            <p className="text-sm text-gray-500">home</p>
            <p className="text-sm text-gray-500">about</p>
            <p className="text-sm text-gray-500">services</p>
            <p className="text-sm text-gray-500">teem</p>
            <p className="text-sm text-gray-500">footer</p>

        </div>
        <div className="col-span-1 py-4">
            <h1 className="text-[#5B4B8A] font-bold">naviguation</h1>
            <p className="text-sm text-gray-500">home</p>
            <p className="text-sm text-gray-500">about</p>
            <p className="text-sm text-gray-500">services</p>
            <p className="text-sm text-gray-500">teem</p>
            <p className="text-sm text-gray-500">footer</p>

        </div>
        <div className="col-span-1 py-4 ">
            <h1 className="text-[#5B4B8A] font-bold">naviguation</h1>
            <p className="text-sm text-gray-500">home</p>
            <p className="text-sm text-gray-500">about</p>
            <p className="text-sm text-gray-500">services</p>
            <p className="text-sm text-gray-500">teem</p>
            <p className="text-sm text-gray-500">footer</p>

        </div>
      

       </div>
    )
}