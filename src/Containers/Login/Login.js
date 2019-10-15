import React from 'react'
import {connect} from 'react-redux'
import {Input,Button} from '../../Components'
import {LoginFunc} from '../../Store/Action'
class Login extends React.Component {

    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    onClick=(data,path)=>{
        this.props.LoginFunc(data,path)

    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1>Login</h1>

                <Input type='email' onChange={(e)=>this.setState({email:e.target.value})} placeholder='Enter your email'   style={{width:'400px',padding:'15px'}}/> <br/>
                <br/>
                <Input type='password' onChange={(e)=>this.setState({password:e.target.value})} placeholder='Enter your password'   style={{width:'400px',padding:'15px'}}/>
                <br/><br/>
                <Button style={{padding:'10px',backgroundColor:'blue',color:'white'}} onClick={()=>this.onClick(this.state,this.props.history)}>
                    Login Now
                </Button>


                <p>
                 Have`nt Account   <span  onClick={()=>this.props.history.push('/signup')} style={{color:'blue',textDecoration:'underline',cursor:'pointer'}}>Signup now</span>
                </p>
            </div>
        )
    }
}


const mapStateToProps = state=>{
    return{
        state:state
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        LoginFunc:(data,path)=>dispatch(LoginFunc(data,path))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Login)