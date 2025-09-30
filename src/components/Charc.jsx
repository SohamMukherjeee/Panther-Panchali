
function Charc({pfp,signature,role,name}){
    return(
        <>
  <h1>{role}</h1>
  <img src={pfp} alt="writer" className="filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out" />
   <h2>{name}</h2>
  <img src={signature} alt="" srcset="" className="w-1/2" />
        

        </>
    )
}
export default Charc;