import * as S from "./SearchToggle.style";
import { IoIosArrowDown } from "react-icons/io";

const SearchToggle = ({ icon, label, onClick, isOpen, content }) => {
  return (
    <S.StyledButton onClick={onClick}>
      {icon}
      {label}
      <IoIosArrowDown />
      {isOpen && <div>{content}</div>}
    </S.StyledButton>
  );
};
export default SearchToggle;
