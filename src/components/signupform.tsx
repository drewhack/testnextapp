'use client';

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
          <div>

                  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                      className="mx-auto h-10 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign up for an account
                    </h2>
                    <h3 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-900">
                        BUT THERE IS NO SECURITY DONT USE A REAL PASSWORD
                    </h3>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="form-signin" onSubmit={submitData}>
                      <div>
                        <label htmlFor="inputEmail" className="block text-sm font-medium leading-6 text-blue-400">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="inputEmail"
                            name="inputEmail"
                            type="email"
                            autoComplete="email"
                            placeholder="Email address" 
                            required
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="inputPassword" className="block text-sm font-medium leading-6 text-blue-400">
                            Password
                          </label>

                        </div>
                        <div className="mt-2">
                          <input
                            id="inputPassword"
                            name="inputPassword"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Password" 
                            required
                            onChange={(e) => setPassword(e.target.value)}                                                
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          disabled={!inputEmail || !inputPassword}
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Sign in
                        </button>
                      </div>
                      </form>

                  </div>
             
                </div>


      </div>



  );
};



