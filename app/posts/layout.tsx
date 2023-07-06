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
  const HIDDEN_SIDEBAR = ['/posts/new'];

  const hiddenSidebar = HIDDEN_SIDEBAR.includes(pathName);

  return (
    <html lang="ko">
      <Body>
        <Header />
        <MainContainer>
          {!hiddenSidebar && <Sidebar />}
          {children}
        </MainContainer>
      </Body>
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
