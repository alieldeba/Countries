import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Card />
    </>
  );
}
export default React.memo(App);
