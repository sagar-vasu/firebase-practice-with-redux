import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Login, Signup, Home } from '../../Containers'
import firebaseApp from '../Firebase/Firebase';
import { NotFound } from '../../Components';






let path = localStorage.getItem('path')
if (!path) {
    path = "/home"
}
else {
    path = JSON.parse(path)
}


function PublicRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to={path} />}
        />
    )
}

function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
        />
    )
}



class BasicRouter extends React.Component {
    constructor() {
        super()
        this.state = {
            auth: false
        }
    }

    componentDidMount() {
        let that = this
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                that.setState({ auth: true })

            } else {
                that.setState({ auth: false })
            }
        });
    }


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route authed={this.state.auth} exact path="/" component={Login} />
                        <Route  path="/signup" component={Signup} />
                        <Route authed={this.state.auth} path="/home" component={Home} />
                        <Route path='*' component={NotFound} />
                    </Switch>

                </Router>

            </div>

        )
    }
}

export default BasicRouter