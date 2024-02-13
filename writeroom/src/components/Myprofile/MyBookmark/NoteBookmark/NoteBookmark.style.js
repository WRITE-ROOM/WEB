import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

// export const Container = styled.div`
//   width: 48%;
//   height: 161px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 0.79px solid rgba(229, 229, 229, 1);
//   margin-top: 20px;
//   margin-bottom: 10px;

//   hr {
//     width: 95%;
//     border: 1px solid rgba(229, 229, 229, 1);
//   }
// `;

// export const Top = styled.div`
//   width: 572px;
//   height: 60px;
//   display: flex;
//   align-items: center;
// `;

// export const Image = styled.div`
//   width: 70px;
//   height: 70px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     width: 40px;
//     height: 40px;
//     border-radius: 20px;
//     object-fit: cover;
//   }
// `

// export const InfoBox = styled.div`
//   width: 100px;
//   height: 35px;

//   h3 {
//     font-family: Pretendard;
//     font-size: 12px;
//     font-weight: 500;
//   }
// `

// export const DateAndTag = styled.div`
//   width: 100px;
//   height: 15px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 5px;

//   p {
//     font-family: Pretendard;
//     font-size: 12px;
//     font-weight: 300;
//     color: rgba(147, 147, 147, 1);
//   }
// `
// export const Tag = styled.div`
//   width: 34px;
//   height: 13px;
//   background: rgba(255, 255, 255, 1);
//   box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.24);
//   border-radius: 39.61px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   font-family: Pretendard;
//   font-size: 10px;
//   font-weight: 500;
//   color: rgba(181, 169, 148, 1);
// `
// export const Bookmark = styled.div`
//   // width: 200px;
//   position: relative;
//   left: 380px;
// `
// export const Bottom = styled.div`
//   width: 572px;
//   height: 91px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   h2 {
//     position: relative;
//     bottom: 0.1px;
//     font-family: Pretendard;
//     font-size: 18px;
//     font-weight: 700;
//   }

//   span {  
//     font-family: Pretendard;
//     font-size: 12px;
//     font-weight: 300;
//     line-height: 14px;
//     letter-spacing: 0em;
//     text-align: left;
//   }  
// `;


// export const Wrapper = styled.div`

// `
export const Container = styled.div`
  margin-top: 20px;
  border: 1px solid #e5e5e5;
  width: 48%;

  border-radius: 10px;
  height: 200px;
  display: flex;
`;

export const UserIconWrapper = styled.div`
  position: absolute;
  margin-bottom: 120px;
`;

export const ContentsBox = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // position: relative;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 16px;
    object-fit: cover;
  }
`;

export const Writer = styled.div`
  font-size: 14px;
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Date = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #939393;
`;

export const Right = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 10px;
    font-size: 22px;
    line-height: 30px;
  }
  p {
    font-size: 16px;
    font-weight: 300;

    whitespace: nowrap;
    overflow: hidden;
    textoverflow: ellipsis;
    maxwidth: 1ch;

    span {
      font-weight: 500;
      margin-right: 6px;
      padding-right: 6px;
      border-right: 2px solid black;
    }
  }
`;

export const NoteImg = styled.img`
  width: 35%;
  border-radius: 0 10px 10px 0;
`;