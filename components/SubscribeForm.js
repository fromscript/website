import {useState} from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import Card from "@/components/Card";

const SubscribeForm = ({onClose}) => {
    const [formData, setFormData] = useState({name: '', email: ''});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     const response = await fetch('/api/send-email', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     });
    //
    //     if (response.ok) {
    //         setMessage('Thank you! You will be notified.');
    //     } else {
    //         setMessage('Something went wrong. Please try again.');
    //     }
    // };

    return (
        <Card
            title="Subscribe"
            description="Enter your details to get notified when we launch."
        >
            <form>
                <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mb-4"
                />
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mb-4"
                />
                <Button type="submit" text="Submit"/>
            </form>
            {
                message && <p className="mt-4 text-sm text-green-600">{message}</p>
            }
            <button
                onClick={onClose}
                className="mt-4 text-sm hover:underline"
            >
                Close
            </button>
        </Card>

    )
        ;
};

export default SubscribeForm;
