import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import CoursePage from "./pages/course/course.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import LecturePage from "./pages/lecture/lecture.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//material-UI 



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>

      <Header className = 'header' currentUser={this.state.currentUser} /> 
     
      <div className="content">
               <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/linear1" component={CoursePage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/lecture" component={LecturePage} />

        </Switch>
      </div>
      </>
    );
  }
}

export default App;
