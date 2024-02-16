import React, { useState, useEffect } from "react";
import { PiCodepenLogo } from "react-icons/pi";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserList } from "../../redux/userList";
import user, { setUser } from "../../redux/user";
import { GoPlusCircle } from "react-icons/go";
import { DropdownContainer } from "../Header/Dropdown.style";
import * as A from "./AddChallengeMember.style";
import { setSelectedMember } from "../../redux/selectedMember";

const AddChallengeMember = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");

  const accessToken = localStorage.getItem("token");

  const userList = useSelector((state) => state.userList);
  console.log("i u ", userList);

  const [me, setMe] = useState(null);
  console.log("me", me);

  const roomId = useParams().roomId;

  const [showUser, setShowUser] = useState(false);
  const selectedMember = useSelector((state) => state.selectedMember);

  const fetchUserList = async () => {
    try {
      const res = await axios.get(`/rooms/${roomId}/userRoom`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("res.data", res.data);
      console.log(res.data.result.userRoomLists);
      dispatch(setUserList(res.data.result.userRoomLists));
      setMe(
        res.data.result.userRoomLists.find(
          (user) => user.userId === parseInt(userId)
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedList, setSelectedList] = useState([]);
  console.log(selectedList);

  const selectMember = (userId, user) => {
    console.log(userId);
    dispatch(setSelectedMember(userId));
    setSelectedList([...selectedList, user]);
  };
  console.log(selectedMember);

  useEffect(() => {
    fetchUserList();
    dispatch(setSelectedMember(parseInt(userId)));
  }, [roomId]);

  return (
    <A.Container>
      <A.MemberList>
        {me && (
          <A.User>
            <img className="profileImg" src={me.profileImg} alt="" />
            <p>{me.name}</p>
          </A.User>
        )}

        {selectedList &&
          selectedList.map((member, index) => (
            <A.User key={index}>
              <img
                className="profileImg"
                src={member.profileImg}
                alt="profileImg"
              />
              <p>{member.name}</p>
            </A.User>
          ))}
      </A.MemberList>

      <A.AddButton>
        <GoPlusCircle
          color="gainsboro"
          size={40}
          onClick={() => setShowUser(!showUser)}
        />
        {showUser && (
          <DropdownContainer $right="-70px">
            <ul>
              {userList.map((user, index) => (
                <li key={index} onClick={() => selectMember(user.userId, user)}>
                  <p>{user.name}</p>
                </li>
              ))}
            </ul>
          </DropdownContainer>
        )}
      </A.AddButton>
    </A.Container>
  );
};

export default AddChallengeMember;