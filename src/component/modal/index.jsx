import React, { useState } from "react"; //ここでuseStateをimport
import styled from "styled-components";

export const Modal = () => {
  //useStateを定義。showModalが状態を表す変数, setShowModalがshowModalを更新する関数
  const [showModal, setShowModal] = useState(true); //デフォルトでshowModalはtrue

  const handleYesClick = () => {
    window.location.href = "https://example.com";
  };

  const handleNoClick = () => {
    setShowModal(false); //Noをクリックすると、showModalをfalseにセットする
  };

  return (
    <StyledModal showModal={showModal}>
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
  display: ${(
    props //渡されたプロパティをpropsに格納
  ) => 
    //propsが持つshowModalという値 = props.showModal
    //三項演算子でスタイルを分ける
    props.showModal ? "block" : "none"};
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
