import React from "react";
import firebase from "./firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

const Main = () => {
    return (
        <main>
            
                <h1>Easychat</h1>
                <h2> {firebase.auth().currentUser.displayName}</h2>

                <Link to="/Signin"
                    onClick={() =>
                        firebase.auth().signOut()
                    }> <button type="button" class="btn btn-outline-secondary">sign out</button>
                </Link>
            

        </main>
    );
};

export default Main;