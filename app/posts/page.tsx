'use client';

import styled from '@emotion/styled';
import { styleSet } from 'app/styleSet';
import axios from 'axios';
import { useMoveToPage } from 'hooks/useMoveToPage';
import { useEffect, useState } from 'react';

export interface IData {
  id: string;
  title: string;
  contents: string;
  preview: string;
}

const PostPage = () => {
  const [data, setData] = useState<IData[]>([]);
  const { onClickMoveToPage } = useMoveToPage();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:6060/posts');
      setData(result.data);
    };
    void fetchData();
  }, []);

  return (
    <Container>
      {data.map((el) => (
        <ListBox key={el.id} onClick={onClickMoveToPage(`posts/${el.id}`)}>
          <ImageBox></ImageBox>
          <ContentsBox>
            <Title>{el.title}</Title>
            <Preview>{el.preview}</Preview>
            <Tags>#blog-daniary #project</Tags>
          </ContentsBox>
        </ListBox>
      ))}
    </Container>
  );
};

export default PostPage;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem 4%;
  margin-bottom: 5rem;
  padding: 0 8rem;
`;
const ListBox = styled.article`
  width: 30%;
  cursor: pointer;
  @media ${styleSet.breakPoints.tablet} {
    width: 48%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 100%;
  }
`;

const ImageBox = styled.div`
  border: 1px solid tomato;
  aspect-ratio: 2/1;
  background-color: orange;
  border-radius: 5px;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
`;

const Preview = styled.p``;

const Tags = styled.p``;
