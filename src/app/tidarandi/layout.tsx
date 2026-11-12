import { DynamicLink } from "@/components/DynamicLink";

export default function TidarandiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full overflow-x-clip flex flex-col items-center p-4 md:p-16 gap-8">
      <DynamicLink
        href="/"
        className="absolute top-4 left-4 h-12 w-12 rounded-full bg-amber-200 hover:bg-amber-300 transition-all duration-500 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9v12h14V9" />
          <path d="M10 21v-6h4v6" />
        </svg>
        <span className="sr-only">Heim</span>
      </DynamicLink>
      {children}
    </div>
  );
}
