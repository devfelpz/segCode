
type AlertProps = {
  message: string;
  severity?: "success" | "error" | "warning" | "info";
  onClose?: () => void;
};

const Alert = ({ message, severity = "info", onClose }: AlertProps) => {
  const severityColors = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
    <div
      className={`flex items-center justify-between border-l-4 p-4 rounded-md shadow-md ${severityColors[severity]}`}
      role="alert"
    >
      <span className="flex-1 text-sm sm:text-base">{message}</span>
      {onClose && (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button
          onClick={onClose}
          aria-label="Fechar alerta"
          className="ml-4 text-lg font-bold focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
