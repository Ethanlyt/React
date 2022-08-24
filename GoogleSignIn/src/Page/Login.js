import { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";
import jwt_decode from "jwt-decode";

function Login() {
	let navigate = useNavigate();

	// --->Click function implementation here<---
	function handleCallbackResponse(response) {
		let tempUserObj = {};
		console.log("Endocded JWT ID token: " + response.credential);

		tempUserObj = jwt_decode(response.credential);
		JSON.stringify(tempUserObj);
		console.log("Decoded JWT ID token: " + tempUserObj);
		console.log("Decoded JWT ID token: " + tempUserObj.name);
		console.log("Decoded JWT ID token: " + tempUserObj.email);
		console.log("Decoded JWT ID token: " + tempUserObj.picture);

        //Direct to home page with the user info
		navigate("/home", {
			state: {
				name: tempUserObj.name,
				email: tempUserObj.email,
				image: tempUserObj.picture,
			},
		});
	}

	// initialise the google setting and sign in button
	useEffect(() => {
		//TODO: "global google" is important as react do not have the class "google", the declaration prevent the reporting of error
		/*global google*/
		google.accounts.id.initialize({
			// --->Cliend ID and click function here<---
			client_id:
				"282282975465-todttoqtkqp94k30q6tedmtkpclupver.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			type: "standard",
			theme: "filled_blue",
			size: "large",
			text: "signup_with",
			shape: "pill",
			width: 500,
		});
	}, []);


	return (
		<div>
			<h1>Login</h1>
            
			<div id='signInDiv'></div>
		</div>
	);
}

export default Login;
