import * as S from "./TagSearchBox.style";
import { IoSearchOutline } from "react-icons/io5";
const TagSearchBox = () => {
  return (
    <S.SearchButton>
      <IoSearchOutline />
      태그 검색
    </S.SearchButton>
  );
};

export default TagSearchBox;
