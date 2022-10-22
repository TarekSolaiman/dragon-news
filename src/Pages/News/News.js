import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { image_url, title, total_view, details, rating, author, category_id } =
    news;
  const { name, img, published_date } = author;
  return (
    <div>
      <Card className="my-5 ">
        <Card.Body>
          <img className="img-fluid" src={image_url} alt="" />
          <Card.Title className="my-3">{title}</Card.Title>
          <div className="d-flex justify-content-between">
            <div>
              <p>Author : {name}</p>
            </div>
            <div>
              <p>Published Date : {published_date}</p>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <p>
                  {rating.number}
                  <FaStar className="text-warning m-0"></FaStar>
                </p>
              </div>
            </div>
          </div>
          <Card.Text className="my-4">{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button>All news in this category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
