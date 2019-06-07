import React from 'react';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
} from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: ''
      }
    }
  }
  toggle = () => {
    this.props.showLogin()
  }
  inputChangeHandler = (event) => {
    const value = event.target.value;
    const targetName = event.target.name;
    this.setState(prevState =>({
      ...prevState,
      form: {
        ...prevState.form,
        [targetName]: value
      }
    }))
  }
  submitForm = () => {
    if (this.state.form.password && this.state.form.username) {
      const user = { ...this.state.form }
      localStorage.setItem('user', JSON.stringify(user));
      this.setState(prevState => ({
        ...prevState,
        form: {
          username: '',
          password: ''
        }
      }));
      this.props.showLogin()
      window.location.reload();
    }
  }

  render() {
    return (
      <div>
        <p style={{ textDecoration: 'underline', cursor: 'pointer', fontSize: '2rem'}} onClick={this.toggle}>Log in to view the content</p>
        <Modal isOpen={this.props.showModal} toggle={this.props.showLogin} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input type="email" name="username" id="exampleEmail" placeholder="Username" 
            value={this.state.username}
            onChange={this.inputChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" 
            onChange={this.inputChangeHandler}
            value={this.state.password} />
          </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submitForm}>Login</Button>{' '}
            <Button color="secondary" onClick={this.props.showLogin}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;