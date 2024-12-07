import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const signUpWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate("/");
            } catch {
                setNotice("Sorry, something went wrong. Please try again");
            }
        } else {
            setNotice("Passwords don't match. Please try again");
        }
    }

    return (
        <div className="Signup">
            <div className="notice">
                {
                    "" !== notice &&
                    <div className="alert">
                        {notice}
                    </div>
                }
            </div>

            <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Enter an email adress for your username</label>



            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>



            <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label>Confirm password</label>

            <button type="submit" onClick={(e) => signUpWithUsernameAndPassword(e)}>Signup</button>

            <span>Go back to login? <Link to="/login">Click here.</Link></span>

        </div>
    )
}

export default Signup; 