import { useAuth } from "../contexts/Auth";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";


export default function Profile() {
    const { user } = useAuth();
    const history = useHistory();



    const goChatPage = () => {
        history.push("/main");
    };


    return (

        <div className="profile-page">
            <div className="nav-bar">
                <div className="logo-tab">Easychat</div>


                <div onClick={goChatPage} className="profile-section">
                <ArrowLeftOutlined /> back to Chat page
                </div>

            </div>
            <h1> Profile Page</h1>
            <div className="user-profile-img">
                <img
                    alt="profileImg"
                    src={user.photoURL}
                    className="user-profile-photo"
                ></img>
            </div>

            <div className="middle-container">
                <h3>• Name: {user.displayName}</h3>
                <h3>• Email: {user.email}</h3>
                <h3>• User id: {user.uid}</h3>
            </div>
        </div>
    );
}
