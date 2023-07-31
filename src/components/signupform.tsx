'use client';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'



export const SignUpForm: React.FC = () => {
    
        const Router = useRouter();

        const [inputEmail, setEmail] = useState('');
        const [inputPassword, setPassword] = useState('');
      
        const submitData = async (e: React.SyntheticEvent) => {
           
          e.preventDefault();
          try {

            const body = { inputEmail, inputPassword };


            await fetch('/api/users/create', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),

            });
            await Router.push('/drafts');

          } catch (error) {
            console.error(error);
          }
        }; 
   
  return (
        <Container className="form-signin w-300 m-auto">
            <form className="form-signin" onSubmit={submitData}>

                <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                <h2 className="h3 mb-3 font-weight-normal">BUT THERE IS NO SECURITY DONT USE A REAL PASSWORD</h2>


                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input 
                    type="email" 
                    id="inputEmail" 
                    name="inputEmail" 
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control" 
                    placeholder="Email address" 
                    value={inputEmail}                    
                    required 
                    autoFocus 
                />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input 
                    type="password" 
                    id="inputPassword" 
                    name="inputPassword" 
                    onChange={(e) => setPassword(e.target.value)}                    
                    className="form-control" 
                    placeholder="Password" 
                    value={inputPassword}                      
                    required 
                />
                <button disabled={!inputEmail || !inputPassword} className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
            </form>

        </Container>




  );
};



