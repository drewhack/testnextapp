'use client';
import { Container } from 'react-bootstrap';

export const SignUpForm = () => {
  return (
        <Container className="form-signin w-100 m-auto">
            <form className="form-signin" onSubmit={submitData}>
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                <h2 className="h3 mb-3 font-weight-normal">BUT THERE IS NO SECURITY DONT USE A REAL PASSWORD</h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
            </form>

        </Container>




  );
};

const submitData = async (e: React.SyntheticEvent) => {

  };

