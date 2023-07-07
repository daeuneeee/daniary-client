'use client';

import styled from '@emotion/styled';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

const New = () => {
  return (
    <Container>
      <TitleBox>
        <Title type="text" placeholder="제목을 입력해주세요." />
      </TitleBox>
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
