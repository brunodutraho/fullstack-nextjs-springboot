import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAtributes<HTMLInputElement> {
	onChange?: (value) => void;
	label: string;
    id: string;
    columnClasses: string;
}

export const Input: React.FC<InputProps> = ({
	onChange,
	label,
    id,
    columnClasses,
    ...inputProps
    
}: InputProps) => {
	return (
		<div className={`field column ${columnClasses}`}>
			<label htmlFor={id} className="label">
				{label}
			</label>
			<div className="control">
				<input
					id={id}
					{...inputProps}
					onChange={(e) => {
						if (onChange) {
							onChange(e.target.value);
						}
					}}
					className="input"
				/>
			</div>
		</div>
	);
};
