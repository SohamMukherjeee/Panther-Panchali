function ActorChar({
  imgSource,
  titleActor,
  paraActor,
  customClass = "",
  customBorder = "",
}) {
  return (
    <>
      <div
        className={`flex items-center justify-center border-b-2 pb-2  border-[#DDE3DD] w-full ${customClass}`}
      >
        <div className={`w-1/2 border-[#DDE3DD] ${customBorder}`}>
          <img
            src={imgSource}
            alt=""
            srcSet=""
            className="mask-y-from-80% mask-x-from-70%"
          />
        </div>

        <div className="w-1/2  gap-y-12 flex flex-col">
          <h1>{titleActor}</h1>
          <p>{paraActor}</p>
        </div>
      </div>
    </>
  );
}
export default ActorChar;
