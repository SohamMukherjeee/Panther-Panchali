import BgPhoto from "../assets/newTrain.png"
import Charac from "../assets/Charcter.png"
function Parallel(){
    return(
        <>
        <div className="flex  flex-col justify-center items-center border-b-2 border-[#DDE3DD] p-3">
            <img src={BgPhoto} alt=""  className="rounded-lg w-full h-100 object-cover" />
         {/* //    <img src={Charac} alt="" /> */}
        </div>
        
        </>
    )
}
export default Parallel;