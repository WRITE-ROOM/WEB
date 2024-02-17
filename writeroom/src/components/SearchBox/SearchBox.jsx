import { useState, useEffect } from "react";
import * as S from "./SearchBox.style";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { HiOutlineAdjustments } from "react-icons/hi";
import SearchToggle from "../SearchToggle/SearchToggle";
import SearchResult from "../SearchResult/SearchResult";
import InfiniteScroll from "react-infinite-scroll";
import { setOpenSearchBox } from "../../redux/roomInfo";
import axios from "axios";
import { useDispatch } from "react-redux";
const SearchBox = () => {
  const [isMemberToggleOpen, setIsMemberToggleOpen] = useState(false);
  const [isRangeToggleOpen, setIsRangeToggleOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isSearchType, setIsSearchType] = useState("title");
  const [isData, setIsData] = useState("");
  const dispatch = useDispatch();
  const receivedToken = localStorage.getItem("token");

  const openSearchBox = useSelector((state) => state.roomInfo.openSearchBox);

  useEffect(() => {
    const delayDebounceTimer = setTimeout(async () => {
      try {
        await getSearchData(search, isSearchType);
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    const getSearchData = async (searchWord, searchType) => {
      try {
        const response = await axios.get(
          `/search/?searchWord=${searchWord}&${searchType}`,
          {
            headers: {
              Authorization: `Bearer ${receivedToken}`,
            },
          }
        );
        console.log(response.data.result);
        setIsData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    return () => clearTimeout(delayDebounceTimer);
  }, [search, isSearchType]);

  const searchRange = ["제목", "내용", "태그"];

  const handleMemberToggle = () => {
    setIsMemberToggleOpen(!isMemberToggleOpen);
  };

  const handleRangeToggle = () => {
    setIsRangeToggleOpen(!isRangeToggleOpen);
  };
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const { noteList, writerList } = isData;

  return (
    openSearchBox && (
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
              <IoClose
                size="30"
                color="grey"
                onClick={() => dispatch(setOpenSearchBox(false))}
              />
            </S.IconWrapper>
          </S.InputWrapper>
          <S.Line />
          <S.FilterWrapper>
            <p>결과 {noteList?.length}건</p>
            <S.ButtonWrapper>
              <SearchToggle
                icon={<BsPersonFill />}
                label="멤버"
                onClick={handleMemberToggle}
                isOpen={isMemberToggleOpen}
                content={
                  <S.MemberBox>
                    {writerList?.map((writer, index) => (
                      <div key={index}>{writer}</div>
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
          <S.ResultBox id="infiniteScrollTarget">
            {/* <InfiniteScroll
              dataLength={isData.length}
              next={fetchMoreData}
              hasMore={true}
              scrollableTarget="infiniteScrollTarget"
            >
              {isData.map((text, index) => (
                <SearchResult text={text} key={index} />
              ))}
            </InfiniteScroll> */}
          </S.ResultBox>
        </S.Container>
      </S.Background>
    )
  );
};

export default SearchBox;
