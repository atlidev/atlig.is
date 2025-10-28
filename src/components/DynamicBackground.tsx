"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PATH_TO_IMAGE: Record<string, string> = {
  "/lason": `/images/atli.jpeg`,
  "/who": `/images/bjor.jpeg`,
};
const DEFAULT_IMAGE = `/images/atli.jpeg`;
const DURATION_MS = 100;

export const DynamicBackground = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [fromImageUrl, setFromImageUrl] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  const toImageUrl = PATH_TO_IMAGE[pathname] || DEFAULT_IMAGE;

  // Handle fade logic when route changes
  useEffect(() => {
    const fromParam = searchParams.get("from");
    if (fromParam && PATH_TO_IMAGE[fromParam]) {
      // Found a valid from → start fade animation
      setFromImageUrl(PATH_TO_IMAGE[fromParam]);
      setIsFading(true);

      // Remove "from" from URL after short delay
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("from");
      const query = newParams.toString();
      const newUrl = query ? `${pathname}?${query}` : pathname;

      // Clean up URL after fade completes (100ms)
      const timeout = setTimeout(() => {
        router.replace(newUrl, { scroll: false });
        setFromImageUrl(null);
        setIsFading(false);
      }, DURATION_MS); // match animation duration

      return () => clearTimeout(timeout);
    } else {
    }
  }, [pathname]);

  return (
    <div className="absolute inset-0 -z-10">
      {/* To Background */}
      <div
        style={{
          backgroundImage: `url(${toImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0"
      />

      {/* From Background (fading out) */}
      <div
        style={{
          backgroundImage: `url(${fromImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`absolute inset-0 transition-opacity duration-[${DURATION_MS}ms] ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};
