import PropsTypes from "prop-types";

function UserGreeting(props) {
  const welcomeMassage = (
    <h2 className='welcome-message'>Welcome back {props.username}</h2>
  );

  const loginPrompt = (
    <h2 className='login-prompt'>Please Login to our website</h2>
  );

  return props.isLoggedIn ? welcomeMassage : loginPrompt;
}

UserGreeting.PropsTypes = {
  isLoggedIn: PropsTypes.bool,
  username: PropsTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
