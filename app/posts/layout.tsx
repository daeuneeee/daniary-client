'use client';

import Header from '@components/header/Header';
import Sidebar from '@components/sidebar/Sidebar';
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';

interface IPostsLayoutProps {
  children: React.ReactNode;
}

const PostsLayout = ({ children }: IPostsLayoutProps) => {
  const pathName = usePathname();
  const HIDDEN_LAYOUT = ['/posts/new'];

  const hiddenLayout = HIDDEN_LAYOUT.includes(pathName);

  return (
    <html lang="ko">
      {hiddenLayout ? (
        <NewBody>
          <MainContainer>{children}</MainContainer>
        </NewBody>
      ) : (
        <Body>
          <Header />
          <MainContainer>
            <Sidebar />
            {children}
          </MainContainer>
        </Body>
      )}
    </html>
  );
};

export default PostsLayout;

const Body = styled.body`
  padding: 0 10rem;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`;

const NewBody = styled.body`
  padding: 0 3rem;
`;
