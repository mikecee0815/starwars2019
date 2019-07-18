import React from 'react'
import Info from '../components/Info'
import PeopleBtn from '../components/PeopleBtn'
import PlanetsBtn from '../components/PlanetsBtn'
import StarshipsBtn from '../components/StarshipsBtn'

//const Data = ['foo',3,'bar','none',7]

class InfoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            people:'people',
            planets:'planets',
            starships:'starships'
        }
    }
    
    fetchPeople = (url) => {
        this.state.list = []
        fetch(`https://swapi.co/api/${url}/`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                list: data.results
            })    
        })
    }
    fetchPlanets = (url) => {
        this.state.list = []
        fetch(`https://swapi.co/api/${url}/`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                list: data.results
            })    
        })
    }
    fetchStarships = (url) => {
        this.state.list = []
        fetch(`https://swapi.co/api/${url}/`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                list: data.results
            })    
        })
    }
     
    render() {
        let InfoListStyle = {
            background:'#03a9f4',
            padding:30,
            boxSizing:'borderBox',
            width:'85%',
            margin:'auto',
            boxShadow: '4px 5px 10px',
            marginTop:20,
            marginBottom:20,
            borderRadius:7,
            imgSmall:{
                width:175,
                height:175,
            }
        }  
        
        let list = []
        this.state.list.forEach((item) => {
            list.push( <Info item={item}/> )   
        })
        const {people,planets,starships} = this.state

        return (    
            <div style={InfoListStyle}>
                <PeopleBtn getPeople={() => {this.fetchPeople(people)}}/>
                <PlanetsBtn getPlanets={() => {this.fetchPlanets(planets)}}/>
                <StarshipsBtn getStarships={() => {this.fetchStarships(starships)}}/>
                {list}
            </div>
        )    
    }
}
export default InfoList