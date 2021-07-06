import React, { Component } from 'react';
import './App.css';

import Loading from './components/Loading';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: [],
      loading: true,
    }

    this.assignJson = this.assignJson.bind(this);
  }

  assignJson(dataJson) {
    this.setState({
      user: dataJson.results,
      loading: false,
    });
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const dataJson = await response.json();
      this.assignJson(dataJson);
    } catch(error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const idade = 50;
    return (nextState.user[0].dob.age > idade) ? false : true;
  }

  render() {
    const { user, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div className="App">
        <div>
          { user.map(( person, index ) => <Profile key={ index } person={ person } />) }
        </div>
      </div>
    );
  }
}

export default App;
