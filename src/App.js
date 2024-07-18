import { useEffect } from "react";
import "./App.css";
import { getReviewApi } from "./components/api";

function App() {

  useEffect(() => {
    handleLoad();
  },[])

  const handleLoad = async () => {
    const { reviews } = await getReviewApi();
    console.log(reviews);
  };
  return <div className="App"></div>;
}

export default App;
