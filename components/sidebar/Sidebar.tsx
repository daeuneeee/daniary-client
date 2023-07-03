import styled from '@emotion/styled';
import Image from 'next/image';

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
          // sizes="(max-width: 720px) 100vw, 720px"
        />
        <ProfileContentsBox>
          <IntroduceBox>
            <strong>이다은</strong>
            <p>안녕하세요. 배운 것을 기록합니다. 나만 쓸거야!!!!!!!</p>
          </IntroduceBox>
          <IconBox>
            <a href="https://github.com/daeuneeee" target="_blank">
              <Image
                src="/images/github_white.png"
                alt="github icon"
                width={21}
                height={21}
                style={{ marginTop: '3.5px' }}
              />
            </a>
            <a href="mailto:dxexx2@gmail.com">
              <Image
                src="/images/mail_white3.png"
                alt="mail icon"
                width={27.5}
                height={27.5}
              />
            </a>
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
  );
};

export default Sidebar;

const Container = styled.section`
  width: 12rem;
  margin-right: 5rem;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileContentsBox = styled.div`
  margin-top: 1rem;
`;

const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > strong {
    font-size: 1.5rem;
  }
  > p {
    font-size: 1.125rem;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  list-style: none;
`;

const TagBox = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const TagListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  > p {
    font-family: 'suite300';
    font-size: 0.875rem;
  }
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
`;
