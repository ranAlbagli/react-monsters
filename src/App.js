import React,{Component} from 'react';
 import './App.css';
 import {CardList} from './components/card-list/card-list.component'
 import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
   constructor(){
     super();
     this.state={
       monsters:[],
       searchField:''
     }
     this.handleChange= this.handleChange.bind(this)
   }
  handleChange(e){
    this.setState({searchField:e.target.value})
  }

    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())  
        .then(users=>this.setState({monsters:users}))       
   }
  render(){
    const {monsters, searchField} = this.state
    const filterdMonsters= monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase())) 
    return(
      <div className="App">
        <h1 className="title" >Monsters Roldex</h1>
        <SearchBox placeholder='search monster'
         handleChange={this.handleChange}>
         </SearchBox>
        <CardList monsters={filterdMonsters}></CardList>

    </div>
    )
  }
}

export default App;
