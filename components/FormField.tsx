type FormFieldProps = {
    label: string;
    type: "text" | "email" | "textarea";
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField: React.FC<FormFieldProps> = ({ label, type, name, value, onChange }) => (
    <div className="w-full flex-col justify-start items-start gap-2 flex">
        <label className="text-blue-700 text-lg font-bold">{label}</label>
        {type === "textarea" ? (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-3 rounded-3xl border-2 border-blue-700"
                rows={6}
            />
        ) : (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-3 rounded-3xl border-2 border-blue-700"
            />
        )}
    </div>
);
export default FormField;
