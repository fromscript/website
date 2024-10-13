type FormFieldProps = {
    label: string;
    type: "text" | "email" | "textarea";
};

const FormField: React.FC<FormFieldProps> = ({ label, type }) => (
    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
        <label className="self-stretch text-blue-700 text-lg font-bold -p-3 leading-7">
            {label}
        </label>
        {type === "textarea" ? (
            <textarea
                className="self-stretch p-3 rounded-3xl border-2 border-blue-700"
                rows={6}
            />
        ) : (
            <input
                type={type}
                className="self-stretch p-3 rounded-3xl border-2 border-blue-700"
            />
        )}
    </div>
);
export default FormField;