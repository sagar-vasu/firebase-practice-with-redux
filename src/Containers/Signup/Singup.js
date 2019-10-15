import React from 'react'
import { connect } from 'react-redux'
import { Input, Button } from '../../Components'
import { SingupFunc } from '../../Store/Action'

class Singup extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.emailInput = React.createRef();
        this.passwordInput=React.createRef();

    }

    onClick = (obj,path) => {
        this.props.SingupFunc(obj,path)
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <span>

                    {
                        this.props.signupErr
                    }

                    
                </span>
                <h1>Singup</h1>     
                <Input type='email' ref={this.emailInput} onChange={(e)=>this.setState({email:e.target.value})} placeholder='Enter your email' style={{ width: '400px', padding: '15px' }} /> <br />
                <br />
                <Input type='password' ref={this.passwordInput} onChange={(e)=>this.setState({password:e.target.value})}  placeholder='Enter your password' style={{ width: '400px', padding: '15px' }} />
                <br /><br />
                <Button style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }} onClick={()=>this.onClick(this.state,this.props.history    )}>
                    Singup Now
                </Button>

                <p>
                 Already Have Account   <span onClick={()=>this.props.history.push('/')} style={{color:'blue',textDecoration:'underline',cursor:'pointer'}}>Login now</span>
                </p>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state.signUpErr)
    return {
        signupErr:state.signupErr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SingupFunc: (data,path)=>dispatch(SingupFunc(data,path))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Singup)