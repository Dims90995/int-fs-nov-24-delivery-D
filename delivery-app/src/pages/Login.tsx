import { Link } from "react-router";
import { useCenterRoot } from "../hooks/useCenterRoot";
import { Main } from "../components/Main";
import { PrimaryButton } from "../components/PrimaryButton";
import { Input } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";

import styles from "./Login.module.scss";

export function Login() {
    useCenterRoot();

    async function login(formData: FormData) {
        const user = Object.fromEntries(formData);
        const body = JSON.stringify(user);
        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/json",
            },
        });

        const { token } = await res.json();

        sessionStorage.setItem("token", token);
    }

    return (
        <>
            <nav className={styles.nav}>
                <Link to="/register">Register</Link>
            </nav>
            <Main fitContent>
                <h1>Login</h1>
                <form className={styles.form} action={login}>
                    <Input type="email" id="email" label="Email" name="email" required />
                    <PasswordInput id="password" label="Password" name="password" required />
                    <PrimaryButton>Login</PrimaryButton>
                </form>
            </Main>
        </>
    );
}
