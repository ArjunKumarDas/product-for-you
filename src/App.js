
import React from 'react';

const App = () => {
  return (
    <div>
      hellow
    </div>
  );
};

export default App;
















// import React, { useState } from 'react';
// import './App.css';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';


// firebase.initializeApp(firebaseConfig);
// function App() {
//   const [user, setUser] = useState({
//     isSignIn: false,
//     name: '',
//     email:'',
//     photo: '',
//     password: ''
//   })
//   const provider = new firebase.auth.GoogleAuthProvider();

//    // handle Sign In
//   const handleSignIn = () => {
//     firebase.auth().signInWithPopup(provider)
//     .then(res => {
//       const {displayName, email} = res.user;
//       const signedInInUser = {
//         isSignedIn :  true,
//         name: displayName,
//         email: email

//       }
//       setUser(signedInInUser)
//       console.log(displayName, email)
//     })
//     // error show
//     .catch(err => {
//       console.log(err);
//       console.log(err.message); 
//     })
//   }

//   // handle Sign Out
//   const handleSignOut = () =>{
//     firebase.auth().signOut()
//     .then(res => {
//      const signedOutUser = {
//       isSignedIn: false,
//       name: '',
//       email: ''
//      }
//     setUser(signedOutUser);
//     })
//     // error show
//     .catch(err => {
//       console.log(err);
//       console.log(err.message); 
//     })

//   }
//   const handleBlur = (eve) =>{
//     let isFromValid = true;
//     // email validation
//     if(eve.target.name === 'email'){
//          isFromValid =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(eve.target.value);

//     }
//     if(eve.target.name === 'password'){
//       const isPasswordValid = eve.target.value.length > 8;
//       const passwordHasNumber = /\d{1}/.test(eve.target.value);
//       isFromValid = isPasswordValid && passwordHasNumber;
//     }
//     // passsword validation
//   //   if(eve.target.name ==='password'){
//   //      const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(eve.target.value);
//   //      isFromValid = isPasswordValid;
    
//   // }
//   if (isFromValid){
//     const newUserInfo = {...user};
//     newUserInfo[eve.target.name] = eve.target.value;
//    setUser(newUserInfo);
//   }
// } 
//   const handleSubmit = () =>{

//   }
//   return (
//     <div className="App">
//      {
//        user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button> : <button onClick={handleSignIn}>Sign In</button>
//      }
//      {
//        user.isSignedIn && <div>
//          <p> Hi, {user.name}</p>
//          <p> Your email is : {user.email}</p>
//        </div>
//      }
//       <h1>Log in From </h1>
//      <form onSubmit="handleSubmit">
//      <input type = "text" name="email" onBlur={handleBlur} placeholder=" Your Email" required></input>
//       <br/>
//       <input type="password" name="password" onBlur={handleBlur} placeholder="your password" required></input>
//       <br/>
//       <input type="submit" value="submit"></input>
//      </form>
//     </div>
//   );
// }

// export default App;
