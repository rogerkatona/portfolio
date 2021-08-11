import { useState, useEffect } from 'react'


export default function useForm () {

        const [formData, setFormData] = useState('')
        const [showSuccess, setShowSuccess] = useState(false)

        const handleInputChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }


    const handleSubmit = () => {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json; charset=utf-8'
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
        return { formData, showSuccess, handleInputChange };
    }
