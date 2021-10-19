import "./newUserStyle.css";
import React from "react";
import { useHistory } from "react-router";


const NewUser= () => {
    let history = useHistory();
    return(
        <>
              <form>
                <div className="mainDiv">
                    <p class="h3 mb-3 fw-normal">Sign Up</p>
                    <hr />
                    <div >
                        <label for="floatingInput">Name</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="Name"  />
                    </div> 
                    <div >
                        <label for="floatingInput">Email</label>
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email"  />
                    </div>
                    <div >
                        <label for="floatingPassword">Password</label>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    </div>

                    
                    <div className="SignInButtonDiv">                     
                        <button class="w-50 btn btn-lg btn-primary"  type="submit" onClick={()=>{history.push('/')}} >Sign Up</button>
                    </div>
                    <hr />
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </div>
            </form>
        </>
    );
}

export default NewUser;