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
      <div className="order-button">
        <button className="order">최신순</button>
        <button className="order">베스트순</button>
      </div>
      <ReviewList items={items} />
    </div>
  );
}

export default App;
