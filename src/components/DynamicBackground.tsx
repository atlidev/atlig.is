"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PATH_TO_IMAGE: Record<string, string> = {
  "/lason": `/images/atli.jpeg`,
  "/who": `/images/bjor.jpeg`,
  "/web": `/images/kebab.jpeg`,
  "/past": `/images/koozy.jpeg`,
  "/tidarandi": `/images/snow_atli.png`,
};
const DEFAULT_IMAGE = `/images/atli.jpeg`;

export const DynamicBackground = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const toImageUrl =
    PATH_TO_IMAGE[pathname] ||
    PATH_TO_IMAGE[`/${pathname.split("/")[1]}`] ||
    DEFAULT_IMAGE;

  const [shownUrl, setShownUrl] = useState(toImageUrl);
  const [fadingUrl, setFadingUrl] = useState<string | null>(null);

  useEffect(() => {
    if (toImageUrl === shownUrl) return;
    let cancelled = false;
    const img = new Image();
    img.src = toImageUrl;
    img
      .decode()
      .catch(() => {})
      .then(() => {
        if (cancelled) return;
        setFadingUrl(shownUrl);
        setShownUrl(toImageUrl);
      });
    return () => {
      cancelled = true;
    };
  }, [toImageUrl, shownUrl]);

  useEffect(() => {
    if (!searchParams.has("from")) return;
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("from");
    const query = newParams.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, searchParams, router]);

  useEffect(() => {
    const preload = () =>
      Object.values(PATH_TO_IMAGE).forEach((url) => {
        new Image().src = url;
      });
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(preload);
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(preload, 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div
        style={{
          backgroundImage: `url(${shownUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0"
      />
      {fadingUrl && (
        <div
          key={fadingUrl}
          style={{
            backgroundImage: `url(${fadingUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 fade-out"
          onAnimationEnd={() => setFadingUrl(null)}
        />
      )}
    </div>
  );
};
