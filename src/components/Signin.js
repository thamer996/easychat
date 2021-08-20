import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./firebaseConfig";
import { Card } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";




const Signin = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false,
        },
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            // !! ensure boolean
            setIsSignedIn(!!user);
            console.log(user);
        });
    }, []);

    return (
        <div className="Signin" style={{ textAlign: 'center' }}>
            {isSignedIn ? (
                <Redirect to="/main" />

            ) : (
                <div className="login-page">
                    <Card>
                        <h1 style={{color: "Dark Grey"}}> welcome to Easychat <i class="comment alternate outline icon"></i></h1>
                        <StyledFirebaseAuth
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Signin;