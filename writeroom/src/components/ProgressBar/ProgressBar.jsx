import * as S from "./ProgressBar.style";

const ProgressBar = ({ percent }) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar>
        <S.ProgressBarFill percent={percent}>
          <p>{percent}%</p>
        </S.ProgressBarFill>
      </S.ProgressBar>
      <S.ProgressLabel>
        <p>일주일간 3일 글쓰기</p>
      </S.ProgressLabel>
    </S.ProgressBarContainer>
  );
};
export default ProgressBar;
