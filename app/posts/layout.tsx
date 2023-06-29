'use client'

import Header from '@components/header/Header'
import Sidebar from '@components/sidebar/Sidebar'
import styled from '@emotion/styled'

interface IPostsLayoutProps {
  children: React.ReactNode
}

const PostsLayout = ({ children }: IPostsLayoutProps) => {
  return (
    <html lang="ko">
      <Body>
        <Header />
        <MainContainer>
          <Sidebar />
          {children}
        </MainContainer>
      </Body>
    </html>
  )
}

export default PostsLayout

const Body = styled.body`
  padding: 0 10rem;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`
