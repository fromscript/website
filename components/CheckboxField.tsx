type CheckboxFieldProps = {
    label: string;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label }) => (
    <div className="pb-4 justify-start items-center gap-2 inline-flex">
        <input
            type="checkbox"
            className="w-[18px] h-[18px] relative bg-white border-2 border-blue-700"
        />
        <label className="text-blue-700 text-sm font-normal  leading-[21px]">
            {label}
        </label>
    </div>
);
export default CheckboxField;