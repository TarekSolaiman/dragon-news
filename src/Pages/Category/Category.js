import { useLoaderData } from "react-router-dom";
import NewsCart from "../Shared/NewsCart/NewsCart";

const Category = () => {
  const allNews = useLoaderData();
  return (
    <div>
      {allNews.map((news) => (
        <NewsCart key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
