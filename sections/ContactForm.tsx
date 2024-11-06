import {NextPage} from "next";
import React, {useState} from "react";
import FormField from "../components/FormField";
import CheckboxField from "../components/CheckboxField";

const ContactForm: NextPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        message: "",
        contactAccepted: false,
        privacyPolicyAccepted: false,
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} = e.target;
        if (type === 'checkbox') {
            const {checked} = e.target as HTMLInputElement;
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!formData.contactAccepted || !formData.privacyPolicyAccepted) {
            setError("You must accept the contact and privacy policy.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    projectType: "",
                    message: "",
                    contactAccepted: false,
                    privacyPolicyAccepted: false,
                });
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Error submitting the form.");
            }
        } catch (error) {
            setError("An error occurred while sending your message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="w-full px-6 py-16 bg-white flex flex-col items-center gap-12">
            <div className="w-full max-w-2xl text-center">
                <h1 className="text-blue-700 text-6xl font-bold font-brockmann leading-tight">
                    Contactez-nous
                </h1>
                <p className="text-blue-500 text-xl font-bold font-brockmann mt-4">
                    Nous sommes là pour répondre à vos questions.
                </p>
            </div>
            <div className="flex self-stretch flex-col md:flex-row justify-center gap-10 md:gap-20">
                <form onSubmit={handleSubmit} className="md:w-1/2 md:px-20 max-w-2xl space-y-6">
                    <FormField label="Nom" type="text" name="name" value={formData.name} onChange={handleChange}/>
                    <FormField label="Email" type="email" name="email" value={formData.email} onChange={handleChange}/>
                    <FormField label="Type de projet" type="text" name="projectType" value={formData.projectType}
                               onChange={handleChange}/>
                    <FormField label="Message" type="textarea" name="message" value={formData.message}
                               onChange={handleChange}/>
                    <CheckboxField label="J'accepte de me faire contacter" name="contactAccepted"
                                   checked={formData.contactAccepted} onChange={handleChange}/>
                    <CheckboxField label="J'accepte la politique de confidentialité" name="privacyPolicyAccepted"
                                   checked={formData.privacyPolicyAccepted} onChange={handleChange}/>

                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-500">Votre message a été envoyé avec succès.</div>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-700 text-white text-xl font-bold py-3 rounded-3xl"
                    >
                        {loading ? "Envoi..." : "Envoyer"}
                    </button>
                </form>
                <div className="md:w-1/2 max-w-2xl text-left space-y-6 mt-8">
                    <div className="flex flex-col">
                        <h2 className="text-blue-700 text-xl font-bold">Email</h2>
                        <p className="text-blue-700">Contactez-nous à tout moment.</p>
                        <a href="mailto:info@fromscript.ca" className="text-blue-500 underline">info@fromscript.ca</a>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-blue-700 text-xl font-bold">Situé à Québec, disponible partout</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
