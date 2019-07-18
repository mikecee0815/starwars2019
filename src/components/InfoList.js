import React from 'react'
import Info from '../components/Info'

//const Data = ['foo',3,'bar','none',7]

class InfoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch('https://swapi.co/api/people')
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
        //console.log(list)
        return (
            
            <div style={InfoListStyle} className="">
                {list}
            </div>
        )    
    }
}
export default InfoList