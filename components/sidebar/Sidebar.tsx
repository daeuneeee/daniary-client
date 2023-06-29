import styled from '@emotion/styled'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <Container>
      <ProfileBox>
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          width={180}
          height={180}
          style={{ borderRadius: '100%' }}
        />
        <ProfileContentsBox>
          <IntroduceBox>
            <strong>이다은</strong>
            <p>안녕하세요. 배운 것을 기록합니다. 나만 쓸거야!!!!!!!</p>
          </IntroduceBox>
          <IconBox>
            <a>
              <Image
                src="/images/github_white.png"
                alt="github icon"
                width={21}
                height={21}
              />
            </a>
            <Image
              src="/images/mail_white.png"
              alt="mail icon"
              width={27.5}
              height={27.5}
              style={{ marginTop: '1.5px' }}
            />
          </IconBox>
        </ProfileContentsBox>
      </ProfileBox>
      <TagBox>
        <p>태그 목록(20)</p>
        <Underline></Underline>
        <TagListBox>
          <p>태그지롱</p>
          <p>태그지롱</p>
          <p>태그지롱</p>
          <p>태그지롱</p>
          <p>태그지롱</p>
          <p>태그지롱</p>
          <p>태그지롱</p>
        </TagListBox>
      </TagBox>
    </Container>
  )
}

export default Sidebar

const Container = styled.section`
  width: 12rem;
  margin-right: 5rem;
`

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileContentsBox = styled.div`
  margin-top: 1rem;
`

const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > strong {
    font-size: 24px;
  }
  > p {
    font-size: 18px;
  }
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  list-style: none;
`

const TagBox = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`

const TagListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  > p {
    font-family: 'suite300';
    font-size: 14px;
  }
`

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
`
