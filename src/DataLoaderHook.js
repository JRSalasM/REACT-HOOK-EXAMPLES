import React, { Component } from 'react'

export default class DataLoaderHook extends Component {
    state = { data:[] }
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
        return this.props.render(this.state.data);
    }
}
