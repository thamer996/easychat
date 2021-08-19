import React from "react";
import firebase from "./firebaseConfig";

const Main = () => {
    return (
        <main>
            <nav>
                <h1>Easychat</h1>
                <h2> {firebase.auth().currentUser.displayName}</h2>
                <div onClick={() => firebase.auth().signOut()}> <button type="button" class="btn btn-outline-secondary">sign out</button>
                </div>
            </nav>

        </main>
    );
};

export default Main;