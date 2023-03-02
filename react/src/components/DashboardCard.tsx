import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  style: {};
  className: string;
}
export default function DashboardCard({
  title,
  children,
  style,
  className = "",
}: Props) {
  return (
    <div
      className={
        "bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down " +
        className
      }
      style={style}
    >
      {title && <h3 className="text-2xl font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
