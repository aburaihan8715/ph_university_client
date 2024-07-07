import { Input } from 'antd';
import { Controller } from 'react-hook-form';

type TPHInputProps = {
  type: string;
  name: string;
  label: string;
};
const PHInput = ({ type, name, label }: TPHInputProps) => {
  return (
    <div style={{ marginBottom: '6px' }}>
      {label && (
        <label
          style={{ marginBottom: '5px', display: 'inline-block' }}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
