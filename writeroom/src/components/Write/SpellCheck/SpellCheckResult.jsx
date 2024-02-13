import React from "react";
import { StyledButton } from "../../../pages/Write.style";
import * as S from "./SpellCheckResult.style";
import { useState, useEffect } from "react";
import axios from "axios";

const SpellCheckResult = ({
  content,
  showResult,
  setShowResult,
  setContent,
}) => {
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const textContent = doc.body.textContent || "";

    // 줄바꿈
    // const doc = html.replace(/<\/[^>]+>/g, "\n");
    // const text = new DOMParser().parseFromString(doc, "text/html");
    // const textContent = text.body.textContent || "";

    return textContent;
  };

  const [suggestions, setSuggestions] = useState("");
  const [originalContent, setOriginalContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mora-bot.kr/api/v1/grammar?string=${encodeURI(
            stripHtmlTags(content)
          )}`
        );
        const json = response.data;
        console.log(`라이선스 : ${json.license}`);
        console.log(`원래 문장 : ${json.original}`);
        console.log(`틀린 부분 : ${json.wrong}`);
        console.log(`추천 : ${json.suggestions}`);
        console.log(`해설 : ${json.more}`);
        // setSuggestions(json.suggestions);
        setOriginalContent(json.original);
        setSuggestions(json.suggestions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [content]);
  // const replaceWrongWords = () => {
  //   const originalWords = originalContent.split(/\s+/);
  //   const suggestionWords =
  //     typeof suggestions === "string" ? suggestions.split(/\s+/) : [];

  //   const replacedContent = originalWords
  //     .map((word, index) => {
  //       const suggestion = suggestionWords[index] || word;
  //       return suggestion;
  //     })
  //     .join(" ");

  //   return replacedContent;
  // };

  // const handleApply = () => {
  //   // Replace the wrong words with suggestions in the original content
  //   const replacedContent = replaceWrongWords();

  //   // Handle the replaced content as needed (e.g., save it or update the state)
  //   console.log("Replaced Content:", replacedContent);
  //   setContent(replacedContent);

  //   // Close the SpellCheckResult component
  //   setShowResult(false);
  // };

  return (
    showResult && (
      <S.Background>
        <S.Container>
          <h3>맞춤법 결과를 보여드릴게요!</h3>

          <S.Result>
            <p>{suggestions}</p>
          </S.Result>

          <div className="buttons">
            <StyledButton
              $backgroundColor="#fff"
              $border="1px solid #e5e5e5"
              fontWeight="300"
              $width="210px"
              onClick={() => {
                setShowResult(false);
              }}
            >
              닫기
            </StyledButton>

            <StyledButton
              $backgroundColor="#B5A994"
              fontWeight="300"
              $width="200px"
              $color="white"
              onClick={() => {
                setShowResult(false);
                // handleApply();
              }}
            >
              적용
            </StyledButton>
          </div>
        </S.Container>
      </S.Background>
    )
  );
};

export default SpellCheckResult;
