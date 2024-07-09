import styles from "./ContactMeForm.module.css"
import React, {ReactNode, useEffect, useState} from "react";
import emailjs from '@emailjs/browser';

type error = {
    message: string;
}

export default function ContactMeForm() {

    let [submitted, updateSubmitted] = useState(false);
    let [validated, setValidated] = useState(false);
    let [name, updateName] = useState("");
    let [email, updateEmail] = useState("");
    let [emailValidity, setEmailValid] = useState(false);
    let [message, updateMessage] = useState("");
    let [errors, updateErrors] = useState<error[]>([]);

    function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (validated) {
            emailjs.send("service_b5dql3f", "contact_template", {
                "message": message,
                "from_name": name,
                "from_email": email
            }, "HgiAVmMqxWLsSnqTs").then((result) => {
                updateSubmitted(true);
            }, (error) => {
                updateErrors([Error("Failed to send. Please try again")]);
            });
        }
    }

    function handleName(e: React.SyntheticEvent<HTMLInputElement>) {
        updateName(e.currentTarget.value);
    }

    function handleEmail(e: React.SyntheticEvent<HTMLInputElement>) {
        updateEmail(e.currentTarget.value);
        setEmailValid(e.currentTarget.validity.valid);
    }

    function handleMessage(e: React.SyntheticEvent<HTMLTextAreaElement>) {
        updateMessage(e.currentTarget.value);
    }


    useEffect(validateForms, [submitted, name, email, message, emailValidity]);

    function validateForms() {
        let valid = true;
        let newErrors: Error[] = []
        if (!isNotEmpty(name)) {
            valid = false;
            //newErrors.push(Error("Name empty"));
        }
        if (!isNotEmpty(email)) {
            valid = false;
            //newErrors.push(Error("Email empty"));
        }
        if (!emailValidity) {
            valid = false;
            //newErrors.push(Error("Email Invalid"));
        }
        if (!isNotEmpty(message)) {
            valid = false;
            //newErrors.push(Error("Message empty"));
        }
        setValidated(valid);
        updateErrors(newErrors);
    }

    function isNotEmpty(value: any): boolean {
        if (value == null || typeof value == "undefined") return false;
        return (value.length > 0);
    }

    function getErrors() {
        let content: ReactNode[] = [];

        errors.forEach(function (error) {
            content.push(
                <div className={styles.error} key={error.message}>{error.message}</div>
            )
        })

        return (
            <>
                {content}
            </>
        )

    }

    return (
        <>
            <div className={styles.formHolder}>
                {!submitted ?
                    <>
                        <form onSubmit={submitForm} className={styles.form}>
                            <input type="text" placeholder="Name..." value={name} required={true}
                                   onChange={handleName}/>
                            <input type="email" placeholder="Email..." value={email} required={true}
                                   onChange={handleEmail}/>
                            <textarea placeholder="Message..." value={message} required={true} onChange={handleMessage}>
                    </textarea>
                            <button type="submit"> Contact Me</button>
                        </form>
                        {getErrors()}
                    </>
                    : <div className={styles.submittedResponse}>Thanks for contacting me!</div>}
            </div>
        </>
    )

}
