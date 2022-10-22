import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  const { image_url, title, total_view, details, rating, author, _id } = news;
  const { name, img, published_date } = author;
  // console.log(news);
  return (
    <div>
      <Card className="my-5 ">
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image
              roundedCircle
              className="me-2"
              style={{ height: "60px" }}
              src={img}
            />
            <div>
              <p className="m-0">{name}</p>
              <p className="m-0">{published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="mx-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="mb-3">{title}</Card.Title>
          <img className="img-fluid" src={image_url} alt="" />
          <Card.Text className="my-4">
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "...."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaEye className=" me-2"></FaEye>
            <p className="m-0">{total_view}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="m-0">{rating.number}</p>
            <FaStar className="text-warning ms-2"></FaStar>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCart;
