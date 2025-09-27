import SidePhoto from "../assets/PantherPanchali.jpeg";
function SideBarPhoto(){
    return(
        <>
        <div className="flex justify-center pt-10">
            <img src={SidePhoto} alt="" srcset="" className="h-52 mask-y-from-95% mask-x-from-95% opacity-70" />
        </div>
        </>
    )
}
export default SideBarPhoto;