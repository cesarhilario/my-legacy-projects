import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { singup, init } from './LoginActions';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirstTime: true,
      email: ''
    }
    
    const { init } = this.props;
    init();
  }

  componentDidMount() {
    document.querySelector('input').addEventListener('keydown', (e) => {
      if (e.keyCode === 13) this.submit();
    });
  }

  playAnimation() {
    const h1 = document.querySelector('.container > h1')
    const input = document.querySelector('.container > input')

    h1.classList.toggle('active');
    input.classList.toggle('show');
    input.focus();
  }

  handleEmail(email) {
    this.setState({ email })
  }

  submit() {
    const { singup } = this.props;
    singup(this.state.email);
  }

  render() {
    return (
      <div className='container'>
        <h1 onClick={(e) => { this.playAnimation() }}>The <strong>iddog</strong></h1>
        <input onChange={e => { this.handleEmail(e.target.value) }} onKeyPress={e => { e.target.style.width = ((e.target.value.length + 1) * 16) + 'px'; }} value={this.state.email} type="text" placeholder='your email' />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ singup, init }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
