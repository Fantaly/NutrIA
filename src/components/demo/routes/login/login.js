import React from "react";
import styles from './login.module.scss';
import Title from "../../title/title"
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/demo/form');
    };
    
    return (
        <>
            <Title title="Login"/>
            <section className={styles.login__container}>
                <form onSubmit={handleSubmit}>
                        <div>
                            <h5 class="name__label mb-4">Name</h5>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                            <div class="form-text p-0 mb-5 mt-1">Real name not required</div>
                        </div>
                    <Button type="submit">Submit</Button>
                </form>
            </section>
        </>
    );
}

export default Login;