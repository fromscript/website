type FormFieldProps = {
    label: string;
    type: "text" | "email" | "textarea";
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField: React.FC<FormFieldProps> = ({ label, type, name, value, onChange }) => (
    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
        <label htmlFor={name} className="self-stretch text-blue-700 text-lg font-bold -p-3 leading-7">
            {label}
        </label>
        {type === "textarea" ? (
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="self-stretch p-3 rounded-3xl border-2 border-blue-700"
                rows={6}
            />
        ) : (
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="self-stretch p-3 rounded-3xl border-2 border-blue-700"
            />
        )}
    </div>
);

export default FormField;
