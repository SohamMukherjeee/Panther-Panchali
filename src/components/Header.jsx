function Header() {
  return (
    <>
      <div className="flex  flex-col justify-center  border-b-2 border-[#DDE3DD] gap-y-5 pl-0 sm:pl-10 pt-30 pb-10 lg:pb-20">
        <h1
          className="text-7xl text-center sm:text-left"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          Panther Panchali
        </h1>

        <p
          className="text-center sm:text-left text-md sm:text-lg"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 200 }}
        >
          Pather Panchali is a landmark in world cinema that captures the
          simplicity,struggles, <br /> and beauty of rural Bengal.
        </p>
      </div>
    </>
  );
}
export default Header;
