import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto auto-rows-auto",
        className
      )}
    >
      {children}
    </div>
  );
};




export const BentoGridItem = ({
  className,
  title,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col",
        className
      )}
      style={{ marginBottom: '0px', paddingBottom: '0px', height: '100%' }}
    >
      {icon}
      {title ? <h4 className="text-2xl font-bold text-center pt-4">{title}</h4> : null}
    </div>
  );
};
