import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
   componentDidMount() {
    fetch("http://server:5000/posts/data", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        window.localStorage.setItem("userName", data.data)
        
      });
  }
  render() {
    return (
      <div>
        Hello:<p>{window.localStorage.getItem("userName")}</p>
      </div>
    );
  }
}

