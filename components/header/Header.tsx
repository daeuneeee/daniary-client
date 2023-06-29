'use client'

import styled from '@emotion/styled'
import Image from 'next/image'

const Header = () => {
  return (
    <Container>
      <Logo>
        <Image
          src="/images/daniary_logo2.png"
          alt="blog logo"
          width={120}
          height={50}
        ></Image>
      </Logo>
      <IconBox>
        <Image
          src="/images/write_icon.png"
          alt="write"
          width={25}
          height={25}
        />
        <Image
          src="/images/search_icon.png"
          alt="search"
          width={25}
          height={25}
        />
      </IconBox>
    </Container>
  )
}

export default Header

const Container = styled.section`
  width: 100%;
  height: 64px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Logo = styled.h1`
  display: flex;
  align-items: center;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`
