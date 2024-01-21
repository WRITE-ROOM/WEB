import React, { useState } from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import * as S from "./RecTopic.style"


export default function RecTopic({onToggle}) {
	let [inputWord, setInputWord] = useState('');
	let [displayKeyword, setDisplayKeyword] = useState(false);
	let [displayVoca, setDisplayVoca] = useState(false);
	// let [isBookmarked, setIsBookmarked] = useState(false)

	const handleKeyPressKeyword = (e) => {
		if (e.key === 'Enter') {
			setDisplayKeyword(true);
		}
	}
	const handleKeyPressVoca= (e) => {
		if (e.key === 'Enter') {
			setDisplayVoca(true);
		}
	}
	const RecWord = ({ word }) => {
		const [isBookmarked, setIsBookmarked] = useState(false);
	
		const toggleBookmark = () => {
			setIsBookmarked((prev) => !prev);
		};
		return (
			<S.RecWord>
				<p>{word}</p>
				{isBookmarked ? (
					<FaBookmark color="rgba(181, 169, 148, 1)" onClick={toggleBookmark} />
				) : (
					<FaRegBookmark color="black" onClick={toggleBookmark} />
				)}
			</S.RecWord>
		);
	};

  return (
			<S.Container>
				<S.Left>
					<button onClick={onToggle}>
						<MdKeyboardDoubleArrowRight color='rgba(147, 147, 147, 1)' size='20'/>
					</button>
				</S.Left>
				<S.Right>
					<S.Wrapper>
						<S.Top>
							<S.WordTitle>오늘의 소재</S.WordTitle>
							<button>
								<IoMdRefresh size="30" />
							</button>
						</S.Top>
						<S.RecBottom>
							<RecWord word="첫 눈이 오면" />
							<RecWord word="공통되는 부분" />
							<RecWord word="연예인 vs 배우" />
							<RecWord word="코딩 공부란" />
							<RecWord word="애정에 관하여" />
						</S.RecBottom>
					</S.Wrapper>
						
					<S.Wrapper>
						<S.Top>
							<S.WordTitle>유사 키워드 검색</S.WordTitle>
						</S.Top>
						<S.WordSearch>
							<IoSearch color='rgba(147, 147, 147, 1)' size='23'/>
							<input 
								placeholder='키워드를 검색해 보세요'
								onChange={(e) => {
									setInputWord(e.target.value)}}
								onKeyUp={handleKeyPressKeyword}></input>
						</S.WordSearch>
						{displayKeyword && 
							<S.WordBottom>
								<S.BottomWords>
										<p>산타클로스</p>
										<p>크리스마스 트리</p>
										<p>선물</p>
								</S.BottomWords>
								<S.BottomLine/>
								<S.BottomWords>
									<p>눈</p>
									<p>눈사람</p>
									<p>Holiday</p>
								</S.BottomWords>
							</S.WordBottom>}
					</S.Wrapper>
					
					<S.Wrapper>
						<S.Top>
							<S.WordTitle>유사 어휘 검색</S.WordTitle>					
						</S.Top>
						<S.WordSearch>
							<IoSearch color='rgba(147, 147, 147, 1)' size='23'/>
							<input 
							placeholder='어휘를 검색해 보세요' 
							onChange={(e) => {
								setInputWord(e.target.value)}}
							onKeyUp={handleKeyPressVoca}></input>
						</S.WordSearch>
						{displayVoca && 
							<S.WordBottom>
								<S.BottomWords>
										<p>열정에 빠지다</p>
										<p>매료되다</p>
										<p>빠져들다</p>
								</S.BottomWords>
								<S.BottomLine/>
								<S.BottomWords>
									<p>취하다</p>
									<p>사랑하다</p>
									<p>열망하다</p>
								</S.BottomWords>
							</S.WordBottom>}
					</S.Wrapper>
				</S.Right>
			</S.Container>
  )
}
