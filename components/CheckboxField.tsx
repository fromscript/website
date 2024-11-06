type CheckboxFieldProps = {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, name, checked, onChange }) => (
    <div className="flex items-center gap-2">
        <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="w-5 h-5 border-2 border-blue-700 rounded-md"
        />
        <label className="text-blue-700 text-sm">{label}</label>
    </div>
);
export default CheckboxField;
