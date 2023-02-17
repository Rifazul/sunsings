import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';

const Signup = () => {
 
       const {  haddlarCreateUser} = useContext(AuthContext)
       

    const handleSignUp = (event)=>{
    
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        
     
        haddlarCreateUser(email,password)  
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err));

      }
    
    return (
      
        <div className="hero w-full my-7">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
               
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-7">
                    <h1 className="text-2xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/signIn">Login</Link> </p>
                </div>
            </div>
        </div>
               
    );
};

export default Signup;