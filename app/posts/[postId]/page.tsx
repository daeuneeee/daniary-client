'use client';

import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IData } from '../page';

const Post = () => {
  const [data, setData] = useState<IData>();
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:6060/posts/${param.postId}`
      );
      setData(result.data);
    };
    void fetchData();
  }, [param.postId]);

  console.log(data);

  return (
    <div>
      <p>{data?.title}</p>
    </div>
  );
};

export default Post;
