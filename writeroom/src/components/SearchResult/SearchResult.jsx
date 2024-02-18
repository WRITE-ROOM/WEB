import * as S from "./SearchResult.style";

import { HiMiniUserCircle } from "react-icons/hi2";
import { ReactComponent as ProjectImg } from "../../assets/writeRoomLogo.svg";
const SearchResult = (note) => {
  const data = note?.note;
  const datePart = data?.createdAt?.split("T")[0];
  return (
    <S.Container>
      <S.Title>
        <p>{data?.roomName}</p>
      </S.Title>
      <S.Contents>
        <S.Wrapper>
          <S.InnerWrapper>
            <HiMiniUserCircle color={"#696969"} size={40} />
            <div>
              <p>{data?.writer}</p>
              <p>{datePart}</p>
            </div>
            <button>음악</button>
          </S.InnerWrapper>
          <S.PathButton>이동</S.PathButton>
        </S.Wrapper>
        <S.TextBox>
          <h1>{data?.title}</h1>
          <S.TextWrapper>
            <h2>{data?.subtitle}</h2>
            <h2>|</h2>
            <span>{data?.content?.replace(/(<([^>]+)>)/gi, "")}</span>
          </S.TextWrapper>
        </S.TextBox>
      </S.Contents>
    </S.Container>
  );
};

export default SearchResult;
