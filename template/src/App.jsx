import React, { useState, useEffect } from "react";
import logo from "./cra-logo.png";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { SetCurrentUser } from "./redux/user/user.actions";
// import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Header from "./components/Header";
const App = (props) => {
  //these variables are used for firebase signin(good examples of using redux to pass the user as a prop to the app.jsx)
  // const { setCurrentUser } = props;
  // const unsubscribeFromAuth = null;

  return (
    <div className="App">
      {/* <Header />
      <Switch>
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/signin" />
      </Switch> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>
          Welcome to my <code>CRA-Template</code>
        </p>
      </header>
    </div>
  );
};

{
  /* this is how we pass props with redux to our App.jsx */
}
{
  /* const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(SetCurrentUser(user)),
}); */
}

export default App;
