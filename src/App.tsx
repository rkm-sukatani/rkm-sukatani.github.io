import React, { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AdArtPage } from "@/components/home/AdArtPage";
import {
  TentangSection,
  LayananSection,
  KeuanganSection,
  PengurusSection,
  AturanSection,
  CatatanSection,
} from "@/components/home/Sections";

const SECTION_PATH_MAP: Record<string, string> = {
  "/tentang": "#tentang",
  "/layanan": "#layanan",
  "/keuangan": "#keuangan",
  "/pengurus": "#pengurus",
  "/aturan": "#aturan",
  "/catatan": "#catatan",
};

function getInitialPath(): string {
  if (typeof window === "undefined") return "/";
  const params = new URLSearchParams(window.location.search);
  if (params.get("page") === "ad-art" || window.location.hash === "#ad-art-page") return "/ad-art";
  const cleaned = window.location.pathname.replace(/\/+$/, "");
  return cleaned === "" ? "/" : cleaned;
}

function scrollToSectionByPath(path: string) {
  if (!path || path === "/" || path === "#beranda") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const selector = path.startsWith("#") ? path : SECTION_PATH_MAP[path] || `#${path.replace(/^\/+/, "")}`;
  setTimeout(() => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, 60);
}

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    if (currentPath === "/ad-art") {
      window.scrollTo({ top: 0 });
      return;
    }
    if (currentPath !== "/" && SECTION_PATH_MAP[currentPath]) scrollToSectionByPath(currentPath);
    else if (window.location.hash) scrollToSectionByPath(window.location.hash);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = getInitialPath();
      setCurrentPath(path);
      if (path === "/ad-art") window.scrollTo({ top: 0, behavior: "smooth" });
      else scrollToSectionByPath(window.location.hash || path);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = useCallback((targetPath: string) => {
    let cleanTarget = targetPath || "/";
    if (cleanTarget === "#beranda") cleanTarget = "/";
    else if (cleanTarget.startsWith("#")) {
      const matched = Object.keys(SECTION_PATH_MAP).find((k) => SECTION_PATH_MAP[k] === cleanTarget);
      cleanTarget = matched || `/${cleanTarget.slice(1)}`;
    }
    setCurrentPath(cleanTarget);
    window.history.pushState({ path: cleanTarget }, "", cleanTarget);
    if (cleanTarget === "/ad-art") window.scrollTo({ top: 0, behavior: "smooth" });
    else scrollToSectionByPath(cleanTarget);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-600 selection:text-white font-sans antialiased">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {currentPath === "/ad-art" ? (
        <main className="flex-1">
          <AdArtPage onBackToHome={() => handleNavigate("/")} />
        </main>
      ) : (
        <main className="flex-1">
          <HeroSection onNavigate={handleNavigate} />
          <TentangSection />
          <LayananSection />
          <KeuanganSection />
          <PengurusSection />
          <AturanSection onOpenAdArt={() => handleNavigate("/ad-art")} />
          <CatatanSection />
        </main>
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
