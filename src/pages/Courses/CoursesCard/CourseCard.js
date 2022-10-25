import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import SingleCart from "../SingleCard/SingleCart";

const CourseCard = () => {
  const [categories, setCategories] = useState([]);
  const [courses,setCourses]= useState([])

  useEffect(() => {
    fetch("https://learning-platform-assignment.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  },[] );



  useEffect(() => {
    fetch("https://learning-platform-assignment.vercel.app/courses")
      .then((res) => res.json())
      .then((data) =>setCourses(data));
  },[]);





 const manageLoadData=  (category) =>{

fetch(`https://learning-platform-assignment-coddermoon-gmailcom.vercel.app/category/${category}`)
.then(res=>res.json())
.then(data=>setCourses(data))

 
 }


  return (
    <div className="mt-5">
      <div className="courseCategory text-center">
        {categories.map((category) => (
          <Button
            key={category.category}
            variant="outline-primary"
            className="m-2"
            onClick={()=>manageLoadData(category.category)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="cards my-4">
        <Row>
           {
            courses.map(course=> <SingleCart
            key={course.id}
            course={course}
            />)
           }
        </Row>
      </div>
    </div>
  );
};

export default CourseCard;
