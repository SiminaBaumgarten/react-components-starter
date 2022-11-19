import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import List from "./components/list";
import { useEffect } from "react";
import React, { useState } from "react";


function App() {
  const [cardList, setCardList] = useState([]);
  console.log(cardList);
  // if (!cardList.length) {
  //   return <span>loading</span>;
  // }

  // useEffect(() => {
  //   fetch("https://api.github.com/search/repositories?q=stars:>10000")
  //   .then(
  //     (res) => res.json()
  //   )
  //   .then((data) => setCardList(data.items));
  // }, []);

  return (
    <>
      <Header />
      {/* <main>
        <Form />
        {cardList.length === 0 ? <span>Loading</span> : <List />}
        <List data={data} />
      </main> */}
    </>
  );
}

export default App;
