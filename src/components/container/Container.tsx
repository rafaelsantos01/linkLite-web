import { cn } from "@/lib/utils";

const Container = ({ children, className }: any) => {
  return (
    <div className={cn("md:px-28 px-6", className)}>
      <div>{children}</div>
    </div>
  );
};

export default Container;
// md:px-6
