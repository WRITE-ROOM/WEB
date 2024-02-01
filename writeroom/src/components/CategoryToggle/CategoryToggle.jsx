import * as S from "./CategoryToggle.style";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
export const CategoryToggle = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.CategoryToggle onClick={handleToggle}>
      <S.ToggleWrapper>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        <h2>{name}</h2>
        <p>(3시간 전)</p>
      </S.ToggleWrapper>
      {isOpen && (
        <S.ButtonWrapper>
          <button>하이</button>
          <button>하이</button>
          <button>하이</button>
        </S.ButtonWrapper>
      )}
    </S.CategoryToggle>
  );
};
