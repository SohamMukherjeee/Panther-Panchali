function Charc({
  pfp,
  signature,
  role,
  name,
  pfpClassName = "",
  signatureClassName = "",
  nameSpace = "",
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Role */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">{role}</h1>

      {/* Profile image */}
      <img
        src={pfp}
        alt={role}
        className={`filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out rounded-lg object-cover w-3/4 sm:w-2/3 md:w-1/2 ${pfpClassName}`}
      />

      {/* Name */}
      <h2
        className={`${nameSpace} mt-3 text-base sm:text-lg md:text-xl font-semibold hover:underline hover:cursor-pointer`}
      >
        {name}
      </h2>

      {/* Signature */}
      <img
        src={signature}
        alt={`${name} signature`}
        className={`mt-3 w-1/2 sm:w-1/3 md:w-1/4 ${signatureClassName}`}
      />
    </div>
  );
}

export default Charc;
