// import http from "../http-common";
import axios from "axios";

class TutorialDataService {
  getAll() {
    
    return axios.create({
      baseURL: "http://localhost:8080/api",
      
      
      headers: {
        "Content-type": "application/json",
        
        "Access-Control-Allow-Origin": "*",
        "Authorization":"Bearer "+sessionStorage.getItem("token"),
        "Accept":"application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        
      }
    }).get("/show");
  }
  logout() {
    
    return axios.create({
      baseURL: "http://localhost:8080/api",
      
      
      headers: {
        "Content-type": "application/json",
        
        "Access-Control-Allow-Origin": "*",
    //  "Authorization":"Bearer "+sessionStorage.getItem("token"),
        "Accept":"application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        
      }
    }).get("/logout");
  }

  // get(id) {
  //   return http.get(`/userdata/${id}`);
  // }

  login(data){
 
    return    axios.create({
      baseURL: "http://localhost:8080/api",
      
      headers: {
        "Content-type": "application/json",
   
        "Access-Control-Allow-Origin": "*",
        "Accept":"application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        
      }
    }).post("/authenticate",data);
  }
  create(data) {
    return axios.create({
      baseURL: "http://localhost:8080/api",
      
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization":"Bearer "+sessionStorage.getItem("token"),
        "Accept":"application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        
      }
    }).post("/add", data);
  }
  // createAssignment(data) {
  //   return http.post("/assignment", data);
  // }
  // update(id, data) {
  //   return http.put(`/userdata/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/userdata/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/userdata`);
  // }

  // findByTitle(title) {
  //   return http.get(`/userdata?title=${title}`);
  // }
}

export default new TutorialDataService();