import { useEffect, useState } from "react";
import "./App.css";
import { getReviewApi } from "./components/api";
import ReviewList from "./components/ReviewList";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = async () => {
    const { reviews } = await getReviewApi();
    console.log(reviews);
    setItems(reviews);
  };
  return (
    <div className="App">
      <ReviewList items={items} />
    </div>
  );
}

export default App;
