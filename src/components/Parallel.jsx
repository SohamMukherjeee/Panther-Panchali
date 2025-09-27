import BgPhoto from "../assets/BgFoto.png"
function Parallel(){
    return(
        <>
        <div className="flex  flex-col justify-center items-center border-b-2 border-[#DDE3DD] p-3">
            <img src={BgPhoto} alt="" srcset="" className="rounded-lg w-full h-100 object-cover" />
        </div>
        
        </>
    )
}
export default Parallel;