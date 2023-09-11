'use client';

import axios from 'axios';
import { useState } from 'react';

const Post = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:6060/posts/:postId');
      setData(result.data);
    };
  });

  console.log(data);

  return (
    <div>
      <p>포스트내용이다아루알ㅇ</p>
    </div>
  );
};

export default Post;
