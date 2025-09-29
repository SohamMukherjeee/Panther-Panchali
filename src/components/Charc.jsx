
function Charc({photoPath}){
    return(
        <>
       <div class="max-w-sm mx-auto filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out">
  <div class="overflow-hidden rounded-xl shadow-lg">
    <img
      src={photoPath}
      alt="Nature"
      class="w-full h-56 object-cover "
    />

    <div class="p-4 bg-white">
      <h3 class="text-lg font-semibold text-gray-900">Beautiful Nature</h3>
      <p class="mt-2 text-sm text-gray-600">
        This image starts in black & white, but becomes colorful when you hover.
      </p>
    </div>
  </div>
</div>

        </>
    )
}
export default Charc;