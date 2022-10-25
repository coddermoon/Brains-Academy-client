import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import SingleCart from "../SingleCard/SingleCart";

const CourseCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://learning-platform-assignment.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <div className="mt-5">
      <div className="courseCategory text-center">
        {categories.map((category) => (
          <Button
            key={category.category}
            variant="outline-primary"
            className="m-2"
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="cards my-4">
        <Row>
            <SingleCart/>
            <SingleCart/>
            <SingleCart/>
        </Row>
      </div>
    </div>
  );
};

export default CourseCard;
