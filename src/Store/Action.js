import Firebase from '../Config/Firebase/Firebase'
let database = Firebase.database().ref('/')



const onLoad = ()=>{
    return dispatch => {
        database.child('users').on('child_added',res=>{
            let data = res.val()
            console.log(data,'users Data')
      
        })
 
         dispatch({ type: 'allUsers', payload: "val" })
 
     }}


// User Singup Function

const SingupFunc = (data, path) => {
    return dispatch => {
        Firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
            dispatch({ type: 'signupSuccess' })
            let uid = res.user.uid
            let userObj = {
                email: res.user.email,
                uid,
            }
            database.child(`users/${uid}`).set(userObj)
            path.push('/')
        }).catch(err => {
            dispatch({ type: 'signupErr', payload: err.message })
        })

    }
}


// User Login Function

const LoginFunc = (data, path) => {
    return dispatch => {
        Firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(res => {
            dispatch({ type: 'LoginSuccess', payload: true })

            path.push('/home', { id: res.user.uid })
        }).catch(err => {
            dispatch({ type: 'LoginErr', payload: err.message })

        })

    }
}



// User Logout Function

const Logout = (path) => {
    return dispatch => {

        Firebase.auth().signOut().then(function () {
            console.log('Signed Out');
            dispatch({ type: 'logout' })
            path.push('/')
        }, function (error) {
            console.error('Sign Out Error', error);
        });

    }

}


// RealTime Database Add Data

const addData = (val) => {
    return dispatch => {
        let obj = {
            name: val
        }

        let key = database.child('hjhh').push().key
        obj.id = key
        database.child(`todo/${obj.id}`).set(obj)   // we can use set method as push method by generating id and sset it with custom id
        // database.child('data').set(obj)   /// set method overwrite old data with new data
        // database.child('allData').push(obj)  // push methiod create new obj data in existing node
        dispatch({ type: 'addRealtimeData', payload: val })

    }

}

const getData = ()=>{

    return dispatch => {
       database.child('todo').once('child_added',res=>{
           let data = res.val()
           console.log(data,'jksdhkds')
        for(var key in data){
            console.log(data[key])
        }
       })

        dispatch({ type: 'getRealtimeDatbaseData', payload: "val" })

    }

    
}

export {
    SingupFunc,
    Logout,
    LoginFunc,
    addData,
    getData,
    onLoad
}