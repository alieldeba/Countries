import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-lg">
      <main className="container flex justify-between items-center h-14">
        <h3 className="text-3xl">Where in the world?</h3>
        <div className="flex items-center w-24 cursor-pointer">
          <b> Dark Mode</b>
        </div>
      </main>
    </header>
  );
}

export default React.memo(Header);
