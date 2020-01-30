import React, { Component } from "react";
import {GetTeam} from '../../api/getTeam'

class TeamPage extends Component {

    constructor(props){
        super(props);
        this.state ={
            teams: []
        }
    }

    componentDidMount(){
        GetTeam('Arsenal').then((response)=>{
            const teams = response.data.teams;
            this.setState({teams});
        });
    }

    render() {
        const teams = this.state.teams;
        const listTeams = teams.map(team=>
            <TeamItem key={team.idTeam} team={team} />)
        return(
            <div className="main">
                <ul>{listTeams}</ul>
            </div>
        );
    }
}

export default TeamPage;


function TeamItem(props) {
    const team = props.team;
    return(
        <React.Fragment>
            <li>Name = {team.strTeam}</li>
            <li>League = {team.strLeague}</li>
            <li>Stadium = {team.strStadium}</li>
            <li>Country = {team.strCountry}</li>
            <li>Stadium Capacity = {team.intStadiumCapacity}</li>
            <li>Website = {team.strWebsite}</li>
            <p></p>
        </React.Fragment>
    )
}

