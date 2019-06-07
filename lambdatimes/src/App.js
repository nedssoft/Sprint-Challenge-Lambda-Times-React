import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import withAuthenticate from './components/hoc/withAuthenticate'
import Login from './components/Login'

const ContentWithAuthenticate = withAuthenticate(Content)(Login);
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isLoggedIn: false
    }
  }
  
  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      isLoggedIn: !!localStorage.getItem('user')
    }))
  }

  showLogin = () => {
    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal,
    }))
  }

  logout = () => {
    localStorage.removeItem('user');
    this.setState(prevState => ({
      ...prevState,
      showModal: true,
      isLoggedIn: false
    }))
    window.location.reload()
  }
  render() {
    return (
      <div className="App">
        <TopBar
          showModal={this.state.showModal}
          showLogin={this.showLogin}
          isLoggedIn={this.state.isLoggedIn}
          logout={this.logout}
        />
        <Header />
        <ContentWithAuthenticate
          showModal={this.state.showModal} showLogin={this.showLogin}
        />
      </div>
    );
  }
}

export default App;
