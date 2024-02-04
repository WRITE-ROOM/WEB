import React from 'react'
import MyprofileBox from '../components/Myprofile/MyprofileBox/MyprofileBox'
import Account from '../components/Myprofile/Account/Account'
import { useParams } from 'react-router-dom';
import AccountEmail from '../components/Myprofile/Account/AccountEmail/AccountEmail';

export default function MyprofileAccount() {
  return (
    <div>
      <AccountEmail />
    </div>
  )
}
