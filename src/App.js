import './App.css';
import SignUp from './Components/SignUp/SignUp';
import User from "./Components/User/User";
import Login from "./Components/Login/Login";

function App() {
    let user = {
        username: 'hangtt',
        password: '1',
        fullname: 'Tran Thi Hang',
        address: 'Duyen Thai, Thuong Tin, Ha Noi',
        dob: new Date(),
        job: 'Student'
    }

    const loginHandler = (userLogin) => {
        console.log("in app. js")
        console.log(userLogin)
    }

    return (
        <div className="App">
            <Login onLogin={loginHandler}/>
            <User userInfo={user}/>
            <SignUp/>
        </div>
    );
};

export default App;
