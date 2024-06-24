import React from "react";

const adminpage = async ({ params }) => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return (
    <div>
      adminpage {params.userId}
      {data.map((ele) => (
        <li>{ele.title}</li>
      ))}
    </div>
  );
};

export default adminpage;
