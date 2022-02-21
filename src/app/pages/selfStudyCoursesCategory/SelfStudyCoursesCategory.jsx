import { MDBDataTableV5 } from "mdbreact";
import { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import "./index.css"

function SelfStudyCoursesCategory() {
  const [posts, setPosts] = useState([]);
  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, []);

  // let deletePost = (postId) => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       var postIndex = posts.findIndex(function (o) {
  //         return o.id === postId;
  //       });
  //       if (postIndex !== -1) {
  //         setPosts(posts.filter((item) => item.id != postId));
  //       }
  //     });
  // };

  useEffect(() => {
    let postsArray = JSON.parse(JSON.stringify(posts));
    let userData = [];
    postsArray.map((item, index) => {
      item.id = (
        <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>{item.id}</div>
      );
      item.action = (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className="uil-trash-alt btn-outline-primary"
            style={{
              cursor: "pointer",
              color: "black",
              fontSize: ".7em",
              padding: ".5rem",
              borderRadius: ".3rem",
              // background: "#fb6262",
            }}
            // onClick={() => deletePost(posts[index].id)}
          >
            Courses
          </div>
        </div>
      );
      userData.push(item);
    });
    setUsersForRender(userData);
  }, [posts]);

  const data = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 270,
      },

      {
        label: "Body",
        field: "body",
        sort: "asc",
        width: 200,
      },
      {
        label: "Action",
        field: "action",
        width: 100,
      },
    ],

    rows: usersForRender,
  };

  return (
    <div className=" card">
      <Row>
        <Col sm="12">
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            //  searchTop
            //  searchBottom={false}
            data={data}
            responsive
            //  hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4}
          />
        </Col>
      </Row>
    </div>
  );
}

export default SelfStudyCoursesCategory;
