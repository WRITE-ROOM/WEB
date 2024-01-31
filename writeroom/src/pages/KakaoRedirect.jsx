import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios'

export default function Redirect() {
    const code = new URL(window.location.href).searchParams.get("code");
    const api = `http://localhost:8000/kakao?code=${code}`

    let navigate = useNavigate();

    const fetchKakaoData = async() => {
        try {
            const res = await axios.post(api) 
            console.log(res.data)
            navigate('/')
          }
          catch(error){
            console.log(error)
          } 
    }

    useEffect(() => {
        fetchKakaoData()
    }, [])
  return (
    <div>
        <h2> 로그인 중입니다...</h2>
        <button onClick={() => {navigate('/signup')}}>임시이동버튼</button>
    </div>
  )
}
