import Header from "../components/Header";
import Parallel from "../components/Parallel";
import SideBarPhoto from "../components/SideBarPhoto";
import Charc from "../components/Charc";
import CreditSec from "../components/CreditSec";
import Faces from "../components/Faces";
function LandingPage() {
  return (
    <>
      <div className="h-screen flex">
        <div className="fixOne hidden lg:block w-1/5 bg-[#FEFFFC] border-r-2 border-[#DDE3DD] fixed top-0 left-0 h-screen">
          <SideBarPhoto/>
        </div>

        <div className="ScrollOne w-full lg:w-4/5 ml-0 lg:ml-[20%] bg-[#FEFFFC] flex flex-col overflow-y-auto h-screen">
          <Header/>
          <Parallel />
          <CreditSec/>
         <Faces/>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
