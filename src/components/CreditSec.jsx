import Charc from './Charc';
import writer from '../assets/writer.jpeg';
import writerSign from '../assets/writerSign.jpeg';
import director from '../assets/director1.png';
import directorSign from '../assets/directorSign.png';
function CreditSec() {
    return(
        <>
        <div className="flex items-center justify-center flex-col min-h-screen my-3 border-b-2 border-[#DDE3DD]">
            <h1 className="text-4xl h-1/4 text-center pt-14">The Minds Behind Pather Panchali</h1>
            <div className="flex flex-col sm:flex-row w-full h-3/4 ">
                    <div className="writter w-full h-full sm:w-1/2 flex flex-col items-center justify-center">
                           {/* <h1>Writer</h1>
                           <img src={writer} alt="writer" className="filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out" />
                           <h2>Bibhutibhushan Bandyopadhyay</h2>
                           <img src={writerSign} alt="" srcset="" className="w-1/2" /> */}
                           <Charc pfp={writer} signature={writerSign} role={"Writer"} name={"Bibhutibhushan Bandyopadhyay"}/>
                    </div>

                    <div className="director w-full h-full sm:w-1/2 flex flex-col items-center justify-center">
                         <Charc pfp={director} signature={directorSign} role="Director" name="Satyajit Ray" nameSpace="pt-7"  pfpClassName="w-90   " signatureClassName="w-1/2 sm:w-1/3"
/>
                    </div>
            </div>
        </div>
        </>
    )
}
export default CreditSec;