// Write all the code here
import { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

const Login = () => {
    const [fillActive, setFillActive] = useState('login');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };

    return (<>
        <MDBTabs fill className='mb-3'>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleFillClick('login')} active={fillActive === 'login'}>
                    Login
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleFillClick('register')} active={fillActive === 'register'}>
                    Register
                </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
            <MDBTabsPane open={fillActive === 'login'}>
                <form className="loginForm">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </MDBTabsPane>
            <MDBTabsPane open={fillActive === 'register'}>
                <form className="registerForm">
                    <h2>Register</h2>
                    <input type="text" name="name" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </MDBTabsPane>
        </MDBTabsContent>
    </>)
};

export default Login;
