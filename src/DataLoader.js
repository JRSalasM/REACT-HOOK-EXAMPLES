import React, { Component } from 'react'

export default class DataLoader extends Component {
    state = {
        data:[{
            id:1,
            title:'asd'
        },{
            id:2,
            title:'wwws'
        }]
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                data
            });
        })
    }
    render() {
        return (
            <div className="card col-6">
                <div className="card-header"><h1>Clasico</h1></div>
                <div className="card-body">
                    <ul>
                        {this.state.data.map(el=>(
                            <li key={el.id}>{el.title}</li>
                        ))}
                    </ul>
                </div>
            </div>            
        )
    }
}
