import { useEffect, useState } from "react";
import "./App.css";
import { getReviewApi } from "./components/api";
import ReviewList from "./components/ReviewList";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  useEffect(() => {
    handleLoad({ order });
  }, [order]);

  const handleLoad = async (option) => {
    const { reviews } = await getReviewApi(option);
    console.log(reviews);
    setItems(reviews);
  };

  const handleOrderClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  return (
    <div className="App">
      <div className="order-button">
        <button className="order" onClick={handleOrderClick}>
          최신순
        </button>
        <button className="order" onClick={handleBestClick}>
          베스트순
        </button>
      </div>
      <ReviewList items={items} />
    </div>
  );
}

export default App;
