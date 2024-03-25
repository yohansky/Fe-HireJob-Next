import axios from "axios";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>{JSON.stringify(post)}</div>;
};

export default Test;
