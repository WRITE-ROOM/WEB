import styled from 'styled-components'
import { MdMoreHoriz } from "react-icons/md";

export const Container = styled.div`
    width: 290px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
	border-radius : 0 0 10px 10px;

    background: white;
`

export const Left = styled.div`
    width: 200px;
    height: 16px;
    display: flex;
    // justify-content: space-around;
    align-items: center;
    // background: red;
`

export const Right = styled.div`
    width: 90px;
    height: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // background: green;
`

export const RoomName = styled.p`
    // width: 120px;
    height: 16px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    margin : 0 10px;
    
`
export const editTime = styled.p`
    width: 70px;
    height: 16px;
    display: flex;
    align-items: center;

    color: rgba(159, 159, 159, 1);
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 300;
    text-align: left;
    
`

export const Users = styled.div`
    width: 16px;
    height: 16px;
`
export const Menu = styled(MdMoreHoriz)`
	cursor: pointer;
`

