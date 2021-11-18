import jwtDecode from "jwt-decode";
import { HOST_URL } from "../../settings.js";
import * as actionTypes from "./actionTypes";


export const authStart = () => {
	return {
		type: actionTypes.AUTH_START;
	};
};

export const authSuccess = () => {
	return { 
		type: actionTypes.AUTH_SUCCESS;
	}
};
export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error,
	};
};


export const signupStart = () => { 
	return {
		type: actionTypes.SIGNUP_START;
	}
};


export const signupSuccess = () = {
	return { 
		type: actionTypes.SIGNUP_SUCCESS,
	}
};

//remove authentication
export const logout = () => {
	localStorage.removeItem("token");
	
	return {
		type: actionTypes.AUTH_LOGOUT,
	};
};

//automatically logout when token expired 
 
export const checkAuthTimeOutToken = (expirationTime) => {
	return (disptch) => {
		setTimeout(() => {
			dispatch(logout());
			window.location.reload();
		}, expirationTime * 1000);
	};
};

// login or signup

export auth = (name, password, isSignup, email, password2) => {
	return (dispatch) => {
		dispatch(authStart());
		let authData = {
			name : name,
			password: password,
			returnSecureToken: true,
		};
		let url = HOST_URL + "user/Authenticate.php";
		if(isSignup){
			dispatch(signupStart());
			url = HOST_URL + "user/register.php";
			authData = {
				name = name,
				email = email,
				password = password,
				password2 = password2,
				returnSecureToken: true,
			}
		}

		fetch("")
		.then(response => response.json())
		.then(data => {
		if(!isSignup){
			localStorage.setItem("token", data.token);
			window.location.reload();
		}
		else {
			window.location.href = "/email";
			dispatch(signupSuccess());
		}
		});
		.catch(err => {
			dispatch(authFail(err))
		});
	}
}

// check authentication
export const authCheckState = () => {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		if(!token)
			dispatch(logout());
		else {
			const expirationDate  = jwtDecode(token).exp * 1000;
			if(expirationDate > new Date()) 
				dispatch(checkAuthTimeOutToken((expirationDate - new Date().getTime()) / 1000))
		}
	}
}


