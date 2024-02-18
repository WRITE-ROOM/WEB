import { useState, useEffect } from "react";
import * as S from "./SearchBox.style";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineAdjustments } from "react-icons/hi";
import SearchToggle from "../SearchToggle/SearchToggle";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchResult from "../SearchResult/SearchResult";
import { setOpenSearchBox } from "../../redux/roomInfo";
import useDebounce from "../../hooks/useDebounce";

const SearchBox = () => {
  const receivedToken = localStorage.getItem("token");
  const [isMemberToggleOpen, setIsMemberToggleOpen] = useState(false);
  const [isRangeToggleOpen, setIsRangeToggleOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const openSearchBox = useSelector((state) => state.roomInfo.openSearchBox);
  const [isSearchType, setIsSearchType] = useState("title");
  const [result, setResult] = useState([]);
  const [nickName, setNickName] = useState("");
  const dispatch = useDispatch();
  const debounceValue = useDebounce(keyword);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const searchRange = ["제목", "내용", "태그"];

  const handleSearchType = (range) => {
    switch (range) {
      case "제목":
        setIsSearchType("title");
        break;
      case "내용":
        setIsSearchType("content");
        break;
      case "태그":
        setIsSearchType("tag");
        break;
      default:
        setIsSearchType("");
    }
  };

  const getSearchMemberFilter = async () => {
    try {
      const response = await axios.get(
        `/search/withMember/?searchWord=${debounceValue}&${nickName}&${isSearchType}`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      const newData = response.data.result;
      setResult(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearchMemberFilter();
    getSearchNote();
  }, [debounceValue]);

  const getSearchNote = async () => {
    try {
      const response = await axios.get(
        `/search/?searchWord=${debounceValue}&${isSearchType}`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      const newData = response.data.result;
      setResult(newData);
      setNickName(newData.writeList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMemberToggle = () => {
    setIsMemberToggleOpen(!isMemberToggleOpen);
  };

  const handleRangeToggle = () => {
    setIsRangeToggleOpen(!isRangeToggleOpen);
  };
  const { noteList } = result;

  const openSearchBox1 = false;
  // 응답값 이상하게 나옴
  // 멤버가 눌렸을 떄 getSearchMember만 호출 어떻게 할지 로직 수정 필요함
  return (
    openSearchBox1 && (
      <S.Background>
        <S.Container>
          <S.InputWrapper>
            <S.IconWrapper>
              <IoSearchOutline size="30" color="grey" />
            </S.IconWrapper>
            <input
              type="text"
              value={keyword}
              onChange={onChange}
              placeholder="노트나 태그를 검색해보세요"
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
                    {noteList?.map((note, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          getSearchMemberFilter(
                            debounceValue,
                            nickName,
                            isSearchType
                          )
                        }
                      >
                        {note.writer}
                      </div>
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
                      <div key={index} onClick={() => handleSearchType(Range)}>
                        {Range}
                      </div>
                    ))}
                  </S.MemberBox>
                }
              />
            </S.ButtonWrapper>
          </S.FilterWrapper>
          <S.ResultBox id="infiniteScrollTarget">
            <InfiniteScroll
              dataLength={4}
              next={() => getSearchNote(debounceValue, isSearchType)}
              hasMore={true}
              scrollableTarget="infiniteScrollTarget"
              style={{
                width: "900px",
              }}
            >
              {noteList?.map((note) => (
                <SearchResult note={note} key={note?.noteId} />
              ))}
            </InfiniteScroll>
          </S.ResultBox>
        </S.Container>
      </S.Background>
    )
  );
};

export default SearchBox;
