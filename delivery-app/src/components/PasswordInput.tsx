import { useState } from "react";
import { TextInput, type TextInputProps } from "./TextInput";

import styles from "./PasswordInput.module.scss";

type PasswordInputProps = Omit<TextInputProps, "type">;

export function PasswordInput(props: PasswordInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <div className={styles.passwordContainer}>
            <TextInput type={isPasswordVisible ? "text" : "password"} {...props} />
            <button
                className={styles.togglePasswordVisibilityButton}
                type="button"
                onClick={togglePasswordVisibility}
            >👁️</button>
        </div>
    );
}
