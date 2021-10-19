import './loginStyle.css';
import React from "react";
import { Link} from "react-router-dom";
import { useHistory } from 'react-router';

const Login = () => {
let history =useHistory();
    return(
        <>
        
              <form>
                <div className="mainDiv">
                    <p class="h3 mb-3 fw-normal">Please sign in</p>
                    <hr />
                    <div >
                        <label for="floatingInput">Email</label>
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email"  />
                    </div>
                    <div >
                        <label for="floatingPassword">Password</label>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    </div>
                    <div className="SignInButtonDiv">                     
                        <button class="w-50 btn btn-lg btn-primary"  type="submit" onClick={()=>{history.push('/home')}} >Sign in</button>
                    </div>
                    <hr />
                    <Link to="/newUser">New User</Link>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </div>
            </form>
        </>
    );
}

export default Login;