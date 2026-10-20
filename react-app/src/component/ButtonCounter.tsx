
type ButtonCounterProps = {
  text: string;
  eventOnHandle: () => void;
  disabled?: boolean;
  className?: string;
};

const ButtonCounter = ({
  text,
  eventOnHandle,
  disabled = false,
  className = "add-button",
}: ButtonCounterProps) => {
  return (
    <button
      className={className}
      onClick={eventOnHandle}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonCounter;
