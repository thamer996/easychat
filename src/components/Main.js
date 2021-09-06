import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../contexts/Auth";
import { auth } from "../contexts/firebaseConfig";
import { UserOutlined } from "@ant-design/icons";

export default function Main() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await auth.signOut();
    history.push("/");
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  const goProfilePage = () => {
    history.push("/profile");
  };
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        history.push("/");
        return;
      }

      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": "5b857675-3119-4e5d-9978-61e59aa52c13",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })

        .then(() => setLoading(false))

        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users/",
                formdata, {
                headers: {
                  "private-key": "e9ed94a0-7faa-48ef-8ffa-daf1c572ff76",
                },
              })
              .then(() => setLoading(false))
              .catch((e) => console.log("e", e.response));
          });
        });
    }
  }, [user, history]);

  if (!user || loading) return <div />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          Easychat</div>

        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
        <div onClick={goProfilePage} className="profile-section">
          <UserOutlined /> Profile
        </div>

      </div>

      <ChatEngine
        height="calc(90vh - 50px)"
        projectID="5b857675-3119-4e5d-9978-61e59aa52c13"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}
