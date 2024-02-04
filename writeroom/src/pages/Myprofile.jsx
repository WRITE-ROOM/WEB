import React from 'react'
import MyprofileBox from '../components/Myprofile/MyprofileBox/MyprofileBox'
import Account from '../components/Myprofile/Account/Account'
import { useParams } from 'react-router-dom';

export default function Myprofile() {
  return (
    <div>
      <Account />
    </div>
  )
}
