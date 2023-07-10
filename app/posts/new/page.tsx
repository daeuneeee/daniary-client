'use client';

import styled from '@emotion/styled';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import Button from '@components/Button';
import { styleSet } from 'app/styleSet';

const New = () => {
  return (
    <Container>
      <TitleBox>
        <Title type="text" placeholder="제목을 입력해주세요." />
      </TitleBox>
      <EditorBox>
        <Editor
          theme="dark"
          placeholder="내용을 입력하시랑게"
          previewStyle="vertical"
          height="100%"
          hideModeSwitch={true}
          toolbarItems={[
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
          ]}
        ></Editor>
      </EditorBox>
      <FooterBox>
        <Button text="< 나가기" hoverBackground="rgba(255, 255, 255, 0.1)" />
        <Button
          text="등록하기"
          background={styleSet.colors.pointColor}
          hoverBackground={styleSet.colors.subPointColor}
        />
      </FooterBox>
    </Container>
  );
};

export default New;

const Container = styled.section`
  height: 100vh;
  width: 100%;
`;

const TitleBox = styled.div`
  padding: 2rem;
`;

const Title = styled.input`
  font-size: 2.4rem;
  display: block;
  width: 100%;
  border: none;

  > :focus {
    border: none;
    outline: transparent;
  }
`;

const EditorBox = styled.div`
  height: calc(100% - 11rem);
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
`;

const RegisterBtn = styled.button``;

const CancelBtn = styled.button``;
