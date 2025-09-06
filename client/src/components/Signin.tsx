import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            //send POSt request to API
            const response = await fetch('/api/users/signin', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setEmail("");
                setPassword("");
                navigate('/home');
            } else {
                setError(data.error);
            }
        } catch (err) {
            console.error('Network or server-side error: ', err);
            setError('Unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className = "">
            <div className = "">
                <h2 className = "">Sign In</h2>
                {/* Display success / error message */}
                {message && <div className = "">{message}</div>}
                {error && <div className = "">{error}</div>}

                {/* Form */}
                <form onSubmit={handleSubmit} className = "">

                </form>
            </div>
        </div>
    );
};

export default SignInForm;