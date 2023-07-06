'use client';

import styled from '@emotion/styled';
import { useMoveToPage } from 'hooks/useMoveToPage';
import Image from 'next/image';

const Header = () => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Container>
      <Logo>
        <Image
          src="/images/daniary_logo2.png"
          alt="blog logo"
          width={120}
          height={50}
          onClick={onClickMoveToPage('/posts')}
          priority
          style={{ cursor: 'pointer' }}
        ></Image>
      </Logo>
      <IconBox>
        <Image
          src="/images/write_icon.png"
          alt="write"
          width={25}
          height={25}
          style={{ cursor: 'pointer' }}
          onClick={onClickMoveToPage('/posts/new')}
        />
        <Image
          src="/images/search_icon.png"
          alt="search"
          width={25}
          height={25}
          style={{ cursor: 'pointer' }}
        />
      </IconBox>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  width: 100%;
  height: 64px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;
