import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

type InputFieldProps = {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({ id, name, label, value, onChange, placeholder }) => (
    <div>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
);