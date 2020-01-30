import axios from "axios";
import apiEndpointsConstants from './apiEndpointsConstants';

export function GetTeam (searchTeam) {
    return new Promise((resolve)=>{
      axios.get(`${apiEndpointsConstants.url.API_GET_TEAM}${searchTeam}`).then(response=>{
          resolve(response);
      })
    });
}