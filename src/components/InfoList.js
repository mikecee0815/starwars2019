import React from 'react'
import Info from '../components/Info'
import PeopleBtn from '../components/PeopleBtn'
import PlanetsBtn from '../components/PlanetsBtn'
import StarshipsBtn from '../components/StarshipsBtn'

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
    
    fetchStuff = (url) => {
        this.setState({
            list:[]
        })
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
            padding:20,
            boxSizing:'borderBox',
            width:'85%',
            margin:'auto',
            boxShadow: '4px 5px 10px',
            marginTop:20,
            marginBottom:20,
            borderRadius:7,
            display:'flex',
            flexDirection:'column',
            imgSmall:{
                width:175,
                height:175,
            }
        }
        let formCSS = {
            width:'',
            display:'flex',
            margin:'auto',
            marginTop:30,
            marginBottom:30,
            padding:10
        }
        let menuBtnCSS = {
            width:'60%',
            display:'flex',
            justifyContent:'space-around',
            margin:'auto',
        }  
        
        let list = [] || 'test'
        this.state.list.forEach((item) => {
            list.push( <Info item={item}/> )   
        })
        const {people,planets,starships} = this.state

        return (    
            <div style={InfoListStyle}>
                <div style={menuBtnCSS}>
                    <PeopleBtn getPeople={() => {this.fetchStuff(people)}}/>
                    <PlanetsBtn getPlanets={() => {this.fetchStuff(planets)}}/>
                    <StarshipsBtn getStarships={() => {this.fetchStuff(starships)}}/>
                </div>    
                <form style={formCSS}>
                    <input style={{padding:10,width:'320px',fontSize:19,borderRadius:'6px'}} type='text' placeholder='live-search'></input>
                </form>
                {list}
            </div>
        )    
    }
}
export default InfoList