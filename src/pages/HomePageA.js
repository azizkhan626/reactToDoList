import React, { Component } from 'react'

export default class HomePageA extends Component {

  state = {
    loading: true,
    myarray: []

  }

  async componentDidMount() {
    const url = "http://localhost:1337/api/blogs";

    const res = await fetch(url);
    const mydata = await res.json()
    this.setState(this.state.myarray = mydata.data)

    this.setState(() => this.state.loading = false)
  }



  render() {
    return (
      <div>
        {this.state.loading ? <h1>holloe loading....</h1> : this.state.myarray.map((item) => {
          return <h1 key={item.id}>Name: {item.attributes.title}</h1>
        })}


      </div>
    )
  }

}
