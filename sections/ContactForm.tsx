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
            const {checked} = e.target as HTMLInputElement; // Explicitly cast as HTMLInputElement
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
        <section id="contact" className="w-full flex px-16 py-28 bg-white flex-col justify-center items-center gap-12">
            <div className="self-stretch pb-8 justify-center items-center gap-4 flex">
                <div className="self-stretch flex-col gap-6 flex">
                    <h1 className="text-center text-blue-700 text-6xl font-bold font-brockmann leading-tight">
                        Contactez-nous
                    </h1>
                    <p className="text-center text-blue-500 text-xl font-bold font-brockmann leading-7">
                        Nous sommes là pour répondre à vos questions.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-start gap-20">
                <form onSubmit={handleSubmit} className="flex justify-center items-start gap-20">
                    <div className="w-[616px] flex-col justify-start items-start gap-6 inline-flex">
                        <FormField label="Nom" type="text" name="name" value={formData.name} onChange={handleChange}/>
                        <FormField label="Email" type="email" name="email" value={formData.email}
                                   onChange={handleChange}/>
                        <FormField
                            label="Type de projet"
                            type="text"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                        />
                        <FormField
                            label="Message"
                            type="textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <CheckboxField
                            label="J'accepte de me faire contacter"
                            name="contactAccepted"
                            checked={formData.contactAccepted}
                            onChange={handleChange}
                        />
                        <CheckboxField
                            label="J'accepte la politique de confidentialité"
                            name="privacyPolicyAccepted"
                            checked={formData.privacyPolicyAccepted}
                            onChange={handleChange}
                        />
                        {error && <div className="text-red-500">{error}</div>}
                        {success && <div className="text-green-500">Votre message a été envoyé avec succès.</div>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 bg-blue-700 rounded-[30px] border-2 border-blue-700 text-red-100 text-xl font-bold font-brockmann leading-7"
                        >
                            {loading ? "Envoi..." : "Envoyer"}
                        </button>
                    </div>
                </form>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                    <div className="self-stretch justify-start items-start gap-6 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-8 h-8 relative"/>
                            <div className="self-stretch h-[92px] flex-col justify-start items-start gap-2 flex">
                                <h2 className="self-stretch text-blue-700 text-xl font-bold font-brockmann leading-7">
                                    Email
                                </h2>
                                <p className="self-stretch text-blue-700 text-base font-normal  leading-normal">
                                    Contactez-nous à tout moment.
                                </p>
                                <a
                                    href="mailto:info@fromscript.ca"
                                    className="self-stretch text-blue-500 text-base font-normal font-['Roboto'] underline leading-normal"
                                >
                                    info@fromscript.ca
                                </a>
                            </div>
                        </div>
                        {/*<div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">*/}
                        {/*    <div className="w-8 h-8 relative"/>*/}
                        {/*    <div className="self-stretch h-[92px] flex-col justify-start items-start gap-2 flex">*/}
                        {/*        <h2 className="self-stretch text-blue-700 text-xl font-bold font-brockmann leading-7">*/}
                        {/*            Téléphone*/}
                        {/*        </h2>*/}
                        {/*        <p className="self-stretch text-blue-700 text-base font-normal  leading-normal">*/}
                        {/*            Appelez-nous pour plus d'infos.*/}
                        {/*        </p>*/}
                        {/*        <a*/}
                        {/*            href="tel:+15550000000"*/}
                        {/*            className="self-stretch text-blue-500 text-base font-normal font-['Roboto'] underline leading-normal"*/}
                        {/*        >*/}
                        {/*            +1 (555) 000-0000*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="h-[148px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-8 h-8 relative"/>
                        <div className="self-stretch h-[100px] flex-col justify-start items-start gap-4 flex">
                            <h2 className="w-[447px] text-blue-700 text-xl font-bold font-brockmann leading-7">
                                Situé à Québec, disponible partout
                            </h2>
                            {/*<p className="self-stretch text-blue-500 text-base font-normal  leading-normal">*/}
                            {/*    Adresse, si on veut la mettre*/}
                            {/*</p>*/}
                            {/*<div className="flex-col justify-start items-start gap-4 flex">*/}
                            {/*    <a*/}
                            {/*        href="#"*/}
                            {/*        className="justify-center items-center gap-2 inline-flex text-blue-700 text-base font-normal  leading-normal"*/}
                            {/*    >*/}
                            {/*        Obtenir l'itinéraire*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};

export default ContactForm;
