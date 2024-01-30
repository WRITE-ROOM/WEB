import React from "react";
import { StyledButton } from "../../pages/Write.style";
import * as S from "./SpellCheckResult.style";

const SpellCheckResult = ({ content, showResult, setShowResult }) => {
  return (
    showResult && (
      <S.Background>
        <S.Container>
          <h3>맞춤법 결과를 보여드릴게요!</h3>

          <S.Result>
            <p>{content}</p>
          </S.Result>

          <div className="buttons">
            <StyledButton
              $backgroundColor="#fff"
              $border="1px solid #e5e5e5"
              fontWeight="300"
              $width="210px"
              onClick={() => {
                setShowResult(false);
              }}
            >
              닫기
            </StyledButton>

            <StyledButton
              $backgroundColor="#B5A994"
              fontWeight="300"
              $width="200px"
              $color="white"
              onClick={() => {
                setShowResult(false);
              }}
            >
              적용
            </StyledButton>
          </div>
        </S.Container>
      </S.Background>
    )
  );
};

export default SpellCheckResult;
