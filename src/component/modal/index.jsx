import styled from "styled-components";

export const Modal = () => {
  const handleYesClick = () => {
    window.location.href = "https://example.com"; //好きなリンクを設定する
  };

  const handleNoClick = () => {};

  return (
    <StyledModal>
      <StyledText>リンク先に飛びますか？</StyledText>
      <StyledBottuns>
        <StyledBottun onClick={handleYesClick}>Yes</StyledBottun>
        <StyledBottun onClick={handleNoClick}>No</StyledBottun>
      </StyledBottuns>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  border: 1px solid #b6e1fb;
  border-radius: 10px;
  width: fit-content;
  padding: 0 10px 10px;
  background-color: #b6e1fb;
  color: #292c2d;
`;

const StyledText = styled.p`
  font-weight: 700;
`;

const StyledBottuns = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const StyledBottun = styled.button`
  background-color: white;
  border-radius: 10px;
  &:hover {
    background-color: #dae1e8;
  }
`;
