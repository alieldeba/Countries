import React from "react";

function Card() {
  return (
    <div className="bg-white w-[300px] pb-5">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png"
        width={300}
        alt="Germany"
      />
      <div className="pb-5 pl-5">
        <b className="py-5 text-xl">Germany</b>
        <h5>Population:</h5>
        <h5>Region:</h5>
        <h5>Capital:</h5>
      </div>
    </div>
  );
}

export default React.memo(Card);
