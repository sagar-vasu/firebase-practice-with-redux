import React from 'react'
import { connect } from 'react-redux'
import { Button, Input } from '../../Components'
import { Logout,addData,getData,onLoad } from '../../Store/Action'

class Home extends React.Component {

    componentDidMount(){
        this.props.onLoad()
    }
    render() {
        console.log(this.props.history)
        return (
            <div>
                <h1>Home</h1>



                <Button onClick={() => this.props.Logout(this.props.history)}>
                    Logout
                </Button>
                <div>

                    <Input type='text' placeholder='enter Data' onChange={(e) => this.setState({ value: e.target.value })} />

                    <Button onClick={() => this.props.addData(this.state.value)}>
                        Add Data
                    </Button>

                    <br />

                    <Button onClick={() => this.props.getData()}>
                        Get Data
                    </Button>
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addData : (val)=>dispatch(addData(val)),
        Logout: (path) => dispatch(Logout(path)),
        getData:()=>dispatch(getData()),
        onLoad:()=>dispatch(onLoad())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)