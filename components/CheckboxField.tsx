type CheckboxFieldProps = {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, name, checked, onChange }) => (
    <div className="pb-4 justify-start items-center gap-2 inline-flex">
        <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="w-[18px] h-[18px] relative bg-white border-2 border-blue-700"
        />
        <label htmlFor={name} className="text-blue-700 text-sm font-normal leading-[21px]">
            {label}
        </label>
    </div>
);

export default CheckboxField;
