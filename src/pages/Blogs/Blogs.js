import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../Assets/Hooks/UseTitle";

const Blogs = () => {
  UseTitle('Blog')
  const blogs = useLoaderData();

  return (
    <Container>
      <div>
        <h2>this is blog page</h2>

        {blogs.map((blog) => (
          <>
            <div className="blogs">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      style={{ height: "100%" }}
                      src={blog.img}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">{blog.question}</h5>
                      <p className="card-text">{blog.ans}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
