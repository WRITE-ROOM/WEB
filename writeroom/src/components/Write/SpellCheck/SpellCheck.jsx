import React, { useState } from "react";
import * as S from "./SpellCheck.style";
import SpellCheckResult from "./SpellCheckResult";

const SpellCheck = ({ content }) => {
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <S.SpellCheck onClick={() => setShowResult(true)}>
        <p>맞춤법 검사</p>
      </S.SpellCheck>
      <SpellCheckResult
        content={content}
        showResult={showResult}
        setShowResult={setShowResult}
      />
    </>
  );
};

export default SpellCheck;
