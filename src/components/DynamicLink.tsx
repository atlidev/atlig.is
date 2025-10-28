"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type DynamicLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const DynamicLink = ({
  href,
  children,
  className,
}: DynamicLinkProps) => {
  const pathname = usePathname();

  // Handle external links
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  const searchParms = new URLSearchParams({
    from: pathname,
  });
  const dynamicHref = `${href}?${searchParms.toString()}`;
  return (
    <Link href={dynamicHref} className={className}>
      {children}
    </Link>
  );
};
