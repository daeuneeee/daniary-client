'use client';

import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IData } from '../page';
import styled from '@emotion/styled';
import { getDate } from 'common/utils/getDate';

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
      <Title>{data?.title}</Title>
      <Date>{getDate(String(data?.createdAt))}</Date>
      <Contents>{data?.contents}</Contents>
    </div>
  );
};

export default Post;

const Title = styled.p`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Date = styled.p`
  color: #d2d2d2;
  margin-bottom: 1rem;
`;

const Contents = styled.p``;
