import React from "react";

function Banner() {
  return (
    <div className="flex flex-col justify-center max-w-[500px] px-8">
      <p class="text-4xl text-white">
        We crush your competitors, goals, and sales records - without the B.S.
      </p>
      <button className="bg-[#F28D35] text-[#fdfffe] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 uppercase">
        Get free consultation
      </button>
    </div>
  );
}

export default Banner;
