// import { useState, useEffect } from "react";

export default function Feed({posts}) {
  //const [posts, setPosts] = useState([]);
  console.log("hola", posts)
  return <div>Feeds</div>;
}

export async function getServerSideProps() {
  const data = await fetch("https://dev.to/api/articles");
  const json = data.json();

  return {
    props: {
      posts: json,
    },
  };
}
