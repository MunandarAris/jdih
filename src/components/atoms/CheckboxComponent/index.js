import { Checkbox } from "antd";

const CheckboxComponent = ({ value, onChange }) => {
  return (
    <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} />
  );
};

export default CheckboxComponent;
