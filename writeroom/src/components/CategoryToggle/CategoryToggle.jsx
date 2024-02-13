import * as S from "./CategoryToggle.style";
import { FiPlus } from "react-icons/fi";
export const CategoryToggle = ({ name, countNote }) => {
  return (
    <S.CategoryToggle>
      <S.IconWrapper>
        <S.InfoWrapper>
          <h2>{name}</h2>
          <p>({countNote})</p>
        </S.InfoWrapper>
        <FiPlus size={30} />
      </S.IconWrapper>
    </S.CategoryToggle>
  );
};
