import React from 'react'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import * as S from './RecTopicClose.style';


export default function RecTopicClose({onToggle}) {
  return (
    <div style={{margin: '100px'}}>
			<S.Container>
				<MdKeyboardDoubleArrowLeft color='rgba(147, 147, 147, 1)' size='20px'
					onClick={onToggle}
				
				/>
			</S.Container>
    </div>
  )
}
