import { XCircle } from "lucide-react";

interface AlertProps {
  title: string;
  message: string;
}

export default function Alert({ title, message }: AlertProps) {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <XCircle className="h-6 w-6 text-red-500 mr-4" />
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
