import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "hyd",
      },
    };
  }
  componentDidMount() {
    console.log("didmount");
    this.timer = setInterval(() => {
      console.log("Hit");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("didupdate");
    if (this.prevState.count !== prevState.count) {
    }
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("render");
    const { name, location } = this.state.userInfo;

    return (
      <div>
        <h1>Profile class Compoenent</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default ProfileClass;
