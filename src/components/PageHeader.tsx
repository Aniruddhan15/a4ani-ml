interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="h-1 w-24 bg-gradient-primary mx-auto mt-6 rounded-full" />
    </div>
  );
};

export default PageHeader;
