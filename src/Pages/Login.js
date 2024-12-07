import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("./home");
        } catch {
            setNotice("You entered a wrong username or password");
        }
    }
    return (
        <div className="Login">
            <div className="alert">
                {
                    "" !== notice &&
                    <div className="alert">
                        {notice}
                    </div>
                }
            </div>
            <div>
                <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email adress</label>

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>

                <button type="submit" onClick={(e) => loginWithUsernameAndPassword(e)}>Submit</button>
                <span>Need to sign up for an account? <Link to="/signup">Click here.</Link></span>
            </div>

        </div>
    )
}

export default Login; 