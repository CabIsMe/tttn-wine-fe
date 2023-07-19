import Icon from "@/components/Icon";

const Textarea = ({
  label,
  placeholder,
  handleChange,
  icon,
  value = "",
}) => {
  return (
    <label className="w-full max-w-[300px] flex flex-col gap-1">
      {label}
      <div className="w-full rounded-md flex items-center overflow-hidden border-2">
        <textarea
          className="w-full py-1.5 px-2 resize-none"
          placeholder={placeholder}
          onChange={handleChange}
          defaultValue={value}
        />
        {icon && <Icon name={`${icon} pl-1 pr-2`} />}
      </div>
    </label>
  );
};

export default Textarea;