import * as S from "./SearchResult.style"
import { BsPersonCircle } from "react-icons/bs";
import { ReactComponent as Logo } from "../../assets/logo.svg"
const SearchResult = () => {
    return(
        <S.Container>
            <S.Title>
                <Logo/>
                <p>글쓰기 연습을 위한 공간</p>
            </S.Title>
            <S.Contents>
              <S.Wrapper>
                <S.InnerWrapper>
                    <BsPersonCircle color={"#696969"} size={40}/>
                    <div>
                        <p>제리</p>
                        <p>2024.02.01</p>
                    </div>
                        <button>음악</button>
                </S.InnerWrapper>
              </S.Wrapper>
            </S.Contents>
        </S.Container>
    )

}

export default SearchResult