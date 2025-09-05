type MarginProps = "none" | "small" | "medium" | "large";

const marginMap: Record<MarginProps, string> = {
  none: "my-0",
  small: "my-5",
  medium: "my-8",
  large: "my-12",
};

export default function AuthCard({
  title,
  subtitle,
  children,
  className = "",
  font = "",
  value = "",
  mySubtitle = "medium",
  colorSubtitle = "",
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  font?: string;
  value?: string | number;
  mySubtitle?: MarginProps;
  colorSubtitle?: string;
}) {
  const marginClass = marginMap[mySubtitle];

  return (
    <div
      className={`rounded-2xl drop-shadow-sm  w-full max-w-[455px] mx-auto bg-white ${className}`}
    >
      <div className="p-6 md:p-8">
        {(title || subtitle) && (
          <div className="text-center ">
            {title && (
              <h2
                className={`${
                  font || "text-[45px]"
                } font-medium text-[#3D4045]`}
              >
                {title} <br /> <p className="font-bold">{value}</p>
              </h2>
            )}
            {subtitle && (
              <p className={` ${marginClass} ${colorSubtitle} `}>{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
