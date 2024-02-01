import { useState } from "react";
import * as S from "./SearchBox.style";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineAdjustments } from "react-icons/hi";
import SearchToggle from "../SearchToggle/SearchToggle";
import SearchResult from "../SearchResult/SearchResult";
const SearchBox = () => {
  const [isMemberToggleOpen, setIsMemberToggleOpen] = useState(false);
  const [isRangeToggleOpen, setIsRangeToggleOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isData, setData] = useState([
    "초기 데이터 1",
    "초기 데이터 2",
    "초기 데이터 3",
    // 추가적인 초기 데이터를 필요한 만큼 추가할 수 있습니다.
  ]);

  const testMemberArray = [
    "박지환",
    "홍수민",
    "장영주",
    "박지환",
    "홍수민",
    "장영주",
    "박지환",
    "홍수민",
    "장영주",
  ];
  const searchRange = ["제목", "내용", "태그"];

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const handleMemberToggle = () => {
    setIsMemberToggleOpen(!isMemberToggleOpen);
  };

  const handleRangeToggle = () => {
    setIsRangeToggleOpen(!isRangeToggleOpen);
  };
  const fetchMoreData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const additionalData = ["새로운 제목1", "새로운 제목2"];
      setData((prevData) => [...prevData, ...additionalData]);
    } catch (error) {
      console.error("error 났다!:", error);
    }
  };
  return (
    <S.Background>
      <S.Container>
        <S.InputWrapper>
          <S.IconWrapper>
            <IoSearchOutline size="30" color="grey" />
          </S.IconWrapper>
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="태그나 노트를 검색해보세요"
          />
          <S.IconWrapper>
            <AiOutlineClose size="30" color="grey" />
          </S.IconWrapper>
        </S.InputWrapper>
        <S.ResultBox id="infiniteScrollTarget">
          <S.FilterWrapper>
            <p>결과 0건</p>
            <S.ButtonWrapper>
              <SearchToggle
                icon={<BsPersonFill />}
                label="멤버"
                onClick={handleMemberToggle}
                isOpen={isMemberToggleOpen}
                content={
                  <S.MemberBox>
                    {testMemberArray.map((member, index) => (
                      <div key={index}>{member}</div>
                    ))}
                  </S.MemberBox>
                }
              />
              <SearchToggle
                icon={<HiOutlineAdjustments />}
                label="검색범위"
                onClick={handleRangeToggle}
                isOpen={isRangeToggleOpen}
                content={
                  <S.MemberBox>
                    {searchRange.map((Range, index) => (
                      <div key={index}>{Range}</div>
                    ))}
                  </S.MemberBox>
                }
              />
            </S.ButtonWrapper>
          </S.FilterWrapper>

          <InfiniteScroll
            dataLength={isData.length}
            next={fetchMoreData}
            hasMore={true}
            scrollableTarget="infiniteScrollTarget"
          >
            {isData.map((text, index) => (
              <SearchResult text={text} key={index} />
            ))}
          </InfiniteScroll>
        </S.ResultBox>
      </S.Container>
    </S.Background>
  );
};

export default SearchBox;
