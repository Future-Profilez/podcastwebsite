import { Component } from "react";
import { Api, ApiallowFile } from "./Api";

class Listing extends Component {
  async Login(data) {
    return Api.post("/user/login", data);
  }
  
  async PodcastGet() {
    return Api.get("/podcast/get")
  }
  
  async PodcastDetail(data) {
    return Api.get(`/podcast/get/${data}`);
  }
  
  async PodcastAdd(data) {
    return Api.post("/podcast/add", data);
  }

  async EpisodeAdd(data) {
    return Api.post("/file/add", data);
  }

  async EpisodeUpdate(id,data) {
    return Api.post(`/file/update/${id}`, data);
  }

  async EpisodeDelete(id) {
    return Api.post(`/file/delete/${id}`);
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