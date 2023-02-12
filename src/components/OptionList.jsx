import React, { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const OptionList = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <div className="bg-white rounded-md py-3 px-5">
      <select
        value={selectedRegion}
        onChange={(event) => setSelectedRegion(event.target.value)}
        className="block p-1 focus:outline-none"
      >
        <option selected>Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(OptionList);
