
function Charc({pfp,signature,role,name,pfpClassName="",signatureClassName="",nameSpace=""}){
    return(
        <>
  <h1>{role}</h1>
  <img src={pfp} alt="writer"         
  className={`filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out ${pfpClassName}`}
 />
   <h2 className={`${nameSpace}`}>{name}</h2>
  <img src={signature} alt="" srcSet="" className={`w-1/2 ${signatureClassName}`}
 />
        

        </>
    )
}
export default Charc;