type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-paper-soft/70 px-3 py-1 text-[0.78rem] text-muted transition-colors duration-300 hover:border-forest/40 hover:bg-forest/5 hover:text-forest">
      {children}
    </span>
  );
}
