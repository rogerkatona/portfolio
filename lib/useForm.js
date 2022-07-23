import { useState, useEffect } from 'react'


export default function useForm () {

        const [formData, setFormData] = useState('')
        const [validateName, setValidateName] = useState(false)
        const [validateEmail, setValidateEmail] = useState(false)
        const [showSuccess, setShowSuccess] = useState(false)

        const handleInputChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }



    const validateForm = (e) => {
        e.preventDefault()
            handleSubmit(e)
    }

    useEffect(() => {
        const inputField = document.querySelectorAll('input');
        console.log('This is from useEffect onload')
        inputField[0].addEventListener('focus', () => {
            setValidateName(false)
        });
        inputField[1].addEventListener('focus', () => {
            setValidateEmail(false)
        });
    }, [validateForm])

    const handleSubmit = () => {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.status === 200) {
                setFormData('')
                setShowSuccess(true)
                console.log('It submitted the form')
            }
        })
        };
        return { formData, validateName, validateEmail, showSuccess, handleInputChange, validateForm };
    }
