import { Component } from "react";
import { Api, ApiallowFile } from "./Api";

class Listing extends Component {
  // async Login(data) {
  //   return Api.post("/user/login", data);
  // }
  async PodcastGet() {
    return Api.get("/podcast/get")
  }
  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default Listing;