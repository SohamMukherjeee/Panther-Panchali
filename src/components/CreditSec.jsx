import Charc from "./Charc";
import writer from "../assets/writer.jpeg";
import writerSign from "../assets/writerSign.jpeg";
import director from "../assets/director1.png";
import directorSign from "../assets/directorSign.png";

function CreditSec() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-4 py-10 sm:py-16 md:py-20 border-b-2 border-[#DDE3DD]">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10">
          The Minds Behind Pather Panchali
        </h1>

        {/* Two-column layout on larger screens */}
        <div className="flex flex-col sm:flex-row w-full max-w-6xl gap-8 sm:gap-12">
          {/* Writer Section */}
          <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
            <Charc
              pfp={writer}
              signature={writerSign}
              role="Writer"
              name="Bibhutibhushan Bandyopadhyay"
              pfpClassName="w-1/4 sm:w-1/4 lg:w-1/2 p-5 sm:p-0 "
              signatureClassName="w-1/2 sm:w-1/3 mt-4"
            />
          </div>

          {/* Director Section */}
          <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
            <Charc
              pfp={director}
              signature={directorSign}
              role="Director"
              name="Satyajit Ray"
              pfpClassName="w-3/4 sm:w-1/2 lg:w-full  "
              signatureClassName="w-1/2 sm:w-1/3 mt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreditSec;
