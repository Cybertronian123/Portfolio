type SectionHeaderProps = {
  title: string;
  heading: string;
};

export function SectionHeader({ title, heading }: SectionHeaderProps) {
  return (
    <div>
      <p className="section-title">{title}</p>
      <h2 className="section-heading">{heading}</h2>
    </div>
  );
}
