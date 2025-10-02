import HeadlineFace from "./HeadlineFace";
import ActorChar from "./ActorChar";
import Apu from "../assets/Apu.jpeg"
import durga from "../assets/durga.jpeg"
function Faces(){
    return(
        <>
         <div className="flex min-h-screen flex-col justify-center  border-b-2 border-[#DDE3DD] gap-y-5 pl-10 pt-10 pb-10 lg:pb-20">
              <HeadlineFace/>
              <ActorChar imgSource={Apu} titleActor="Apu" paraActor="valochele" customBorder="border-r-2" />
              <ActorChar imgSource={durga} titleActor="Apu" paraActor="valochele" customClass="flex-row-reverse" customBorder="border-l-2" />

         </div>
        </>
    )
}
export default Faces;