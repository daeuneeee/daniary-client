'use client'

import styled from '@emotion/styled'
import { styleSet } from 'app/styleSet'

const PostPage = () => {
  return (
    <Container>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>daniary 1주차</Title>
          <Contents>13.4.4 버전에 맞게 다시 세팅해보즈아,,</Contents>
          <Tags>#blog-daniary #project</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>
            내용미리보기 내용미리보기 내용미리보기내용미리보기 내용미리보기
            내용미리보기
          </Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
      <ListBox>
        <ImageBox></ImageBox>
        <ContentsBox>
          <Title>제목제목</Title>
          <Contents>내용미리보기</Contents>
          <Tags>#태그 #어쩌구</Tags>
        </ContentsBox>
      </ListBox>
    </Container>
  )
}

export default PostPage

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem 4%;
  margin-bottom: 5rem;
  padding: 0 8rem;
`
const ListBox = styled.article`
  width: 30%;
  @media ${styleSet.breakPoints.tablet} {
    width: 48%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 100%;
  }
`

const ImageBox = styled.div`
  border: 1px solid tomato;
  aspect-ratio: 2/1;
  background-color: orange;
  border-radius: 5px;
`

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.5rem;
`

const Title = styled.p`
  font-size: 1.5rem;
`

const Contents = styled.p``

const Tags = styled.p``
