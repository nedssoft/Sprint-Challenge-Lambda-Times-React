import React from 'react'

const withAuthenticate = Content => Login => {
  return class extends React.Component {
    state = {
      isLoggedIn: false,
    }
    componentDidMount() {
      this.setState(prevState => ({
        ...prevState,
        isLoggedIn: !!localStorage.getItem('user')
      }))
    }

    render() {
      if (this.state.isLoggedIn) {
        return <Content {...this.props} />
      }
      return <Login {...this.props}/>
    }
  }
}

export default withAuthenticate