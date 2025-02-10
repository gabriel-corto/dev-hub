interface ScreenHeadProps {
  title: string;
  subtitle: string;
}

export function ScreenHead({ title, subtitle }: ScreenHeadProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-rose-400 text-xl custom-font font-semibold">
        {title}
      </span>
      <h1 className="text-foreground text-2xl tracking-normal font-bold max-lg:text-xl">
        {subtitle}
      </h1>
    </div>
  );
}
