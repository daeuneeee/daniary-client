'use client'

import Header from '@components/header/Header'
import styled from '@emotion/styled'

interface IPostsLayoutProps {
  children: React.ReactNode
}

const PostsLayout = ({ children }: IPostsLayoutProps) => {
  return (
    <html lang="ko">
      <Body>
        <Header />
        {children}
      </Body>
    </html>
  )
}

export default PostsLayout

const Body = styled.body`
  padding: 0 10rem;
`
