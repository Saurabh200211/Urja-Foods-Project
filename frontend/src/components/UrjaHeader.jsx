import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Mail,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Business",
    href: "/business",
    dropdown: [
      { label: "Cattle & Poultry Feed Manufacturing", href: "/business/feed" },
      { label: "Poultry Contract Farming", href: "/business/poultry" },
      { label: "Bio Fertilizers & Soil Care", href: "/business/bio-fertilizers" },
      { label: "Soya Processing", href: "/business/soya-processing" },
      { label: "Retail & Distribution Network", href: "/business/retail" },
    ],
  },
  {
    label: "Our Products",
    href: "/products",
    dropdown: [
      { label: "Urja Cattle Feeds", href: "/products/cattle-feed" },
      { label: "Poultry Rations", href: "/products/poultry-feed" },
      { label: "Bio Fertilizers", href: "/products/bio-fertilizers" },
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    dropdown: [
      { label: "Agricultural Services", href: "/services/agriculture" },
      { label: "Poultry Integration", href: "/services/poultry" },
      { label: "Farmer Support & Training", href: "/services/farmer-support" },
    ],
  },
  {
    label: "Corporate Actions",
    href: "/corporate-actions",
    dropdown: [
      { label: "Annual Financial Reports", href: "/corporate-actions/reports" },
      { label: "Governance & Policies", href: "/corporate-actions/governance" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

const socialLinkedIn = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
    <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.15 3 3.25 3.9 3.25 5S4.15 7 5.25 7 7.25 6.1 7.25 5 6.35 3 5.25 3ZM20.75 13.18C20.75 9.87 18.99 8.09 16.56 8.09C14.59 8.09 13.71 9.17 13.22 9.93V8.5H9.84V19.5H13.22V14.05C13.22 12.61 13.49 11.21 15.28 11.21C17.05 11.21 17.08 12.87 17.08 14.14V19.5H20.46L20.75 13.18Z" />
  </svg>
);

function BrandMark() {
  return (
    <div className="relative flex h-14 w-[205px] items-center sm:h-16 sm:w-[230px]">
      <div className="absolute left-0 top-1/2 h-12 w-12 -translate-y-1/2 rotate-45 rounded-[2px] bg-lime-600 shadow-[0_8px_22px_rgba(163,230,53,0.2)] transition-transform duration-500 group-hover:rotate-[52deg] sm:h-14 sm:w-14" />

      <div className="absolute left-[5px] top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-700/60 bg-white text-[14px] font-black text-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-105 sm:left-[7px] sm:h-10 sm:w-10">
        U
      </div>

      <div className="absolute left-[56px] top-1/2 -translate-y-[48%] sm:left-[66px]">
        <div className="font-serif text-[24px] font-semibold leading-none tracking-[-0.05em] text-slate-900 sm:text-[28px]">
          urja foods
        </div>
        <div className="mt-1 text-[8px] font-semibold tracking-[0.16em] text-slate-600 sm:text-[9px]">
          Creating Energy....
        </div>
      </div>
    </div>
  );
}

export default function UrjaHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenSubmenu(null);
        setHoveredMenu(null);
        setSearchOpen(false);
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
    setHoveredMenu(null);
  };

  // Search items list
  const allSearchableItems = navigation.flatMap((item) => {
    const items = [{ label: item.label, href: item.href }];
    if (item.dropdown) {
      item.dropdown.forEach((sub) => {
        items.push({ label: `${item.label} → ${sub.label}`, href: sub.href });
      });
    }
    return items;
  });

  const filteredItems = allSearchableItems.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP UTILITY BAR */}
      <div className="relative overflow-hidden bg-lime-600 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,0.10),transparent_28%,transparent_72%,rgba(255,255,255,0.08))]" />

        <div className="relative mx-auto flex min-h-[28px] max-w-[1600px] items-center justify-end px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-wide sm:gap-6 sm:text-[11px]">
            <a href="tel:+917028399900" className="group inline-flex items-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
              <Phone className="h-3 w-3 transition-transform duration-300 group-hover:rotate-12" />
              <span>+91-7028399900</span>
            </a>

            <span className="hidden h-3.5 w-px bg-white/25 sm:block" />

            <a href="mailto:info@urjafoods.net" className="group inline-flex items-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
              <Mail className="h-3 w-3 transition-transform duration-300 group-hover:-rotate-12" />
              <span>info@urjafoods.net</span>
            </a>

            <span className="hidden h-3.5 w-px bg-white/25 sm:block" />

            <a href="#" aria-label="LinkedIn" className="group hidden transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 sm:inline-flex">
              {socialLinkedIn}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className={`relative border-b border-slate-100 bg-white transition-all duration-500 ${scrolled ? "shadow-[0_10px_40px_rgba(15,23,42,0.12)]" : "shadow-[0_4px_18px_rgba(15,23,42,0.05)]"}`}>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-500/60 to-transparent" />

        <div className={`mx-auto flex max-w-[1600px] items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-10 ${scrolled ? "h-[66px]" : "h-[76px]"}`}>
          {/* BRAND */}
          <Link to="/" aria-label="Urja Foods home" onClick={handleNavClick} className="group shrink-0">
            <BrandMark />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden h-full items-center lg:flex" aria-label="Primary navigation">
            <ul className="flex h-full items-center gap-0.5 xl:gap-1">
              {navigation.map((item) => {
                const isActive =
                  location.pathname === item.href ||
                  (item.href !== "/" && location.pathname.startsWith(item.href));

                const isHovered = hoveredMenu === item.label;

                return (
                  <li
                    key={item.label}
                    className="relative h-full"
                    onMouseEnter={() => setHoveredMenu(item.label)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className={`group relative flex h-full items-center gap-1 px-2.5 text-[12px] font-semibold transition-all duration-300 xl:px-3.5 xl:text-[13px] ${isActive ? "text-lime-600" : "text-slate-700 hover:text-lime-600"}`}
                    >
                      <span className="relative z-10">{item.label}</span>

                      {item.dropdown && (
                        <ChevronDown className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 ${isHovered ? "rotate-180 text-lime-600" : "text-slate-400"}`} />
                      )}

                      <span className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-lime-500 transition-all duration-300 ${isActive ? "w-10 opacity-100" : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100"}`} />

                      {isActive && (
                        <span className="absolute inset-x-2 bottom-0 h-4 bg-lime-300/10 blur-xl" />
                      )}
                    </Link>

                    {item.dropdown && isHovered && (
                      <div className="absolute left-0 top-[100%] min-w-64 origin-top-left rounded-b-2xl border border-slate-100 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.14)] animate-[menuDrop_180ms_ease-out]">
                        <div className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-lime-600">
                          {item.label} Modules
                        </div>

                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={handleNavClick}
                            className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:bg-lime-50 hover:text-lime-700"
                          >
                            <span>{subItem.label}</span>
                            <ChevronRight className="h-3.5 w-3.5 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="ml-3 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-lime-300 hover:bg-lime-50 hover:text-lime-600"
            >
              <Search className="h-4 w-4" />
            </button>
          </nav>

          {/* MOBILE ACTION */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-lime-300 hover:bg-lime-50 hover:text-lime-600"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-lime-300 hover:bg-lime-50 hover:text-lime-600"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        <div className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-[850px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="mx-auto max-w-[1600px] px-4 pb-5 pt-3 sm:px-6">
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isActive =
                    location.pathname === item.href ||
                    (item.href !== "/" && location.pathname.startsWith(item.href));

                  const isSubOpen = openSubmenu === item.label;

                  return (
                    <li key={item.label}>
                      <div className="flex items-center gap-2">
                        <Link
                          to={item.href}
                          onClick={handleNavClick}
                          className={`flex min-h-11 flex-1 items-center rounded-xl px-4 text-sm font-semibold transition-all duration-200 ${isActive ? "bg-lime-50 text-lime-600" : "text-slate-700 hover:bg-slate-50 hover:text-lime-600"}`}
                        >
                          {item.label}
                        </Link>

                        {item.dropdown && (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.label} sub-items`}
                            onClick={() => setOpenSubmenu((prev) => (prev === item.label ? null : item.label))}
                            className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-50 hover:text-lime-600"
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSubOpen ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>

                      {item.dropdown && isSubOpen && (
                        <div className="ml-3 mt-1 space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={handleNavClick}
                              className="flex items-center rounded-lg px-4 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-white hover:text-lime-600"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4 sm:grid-cols-2">
              <a href="tel:+917028399900" className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-lime-50 hover:text-lime-600">
                <Phone className="h-4 w-4" />
                <span>+91-7028399900</span>
              </a>

              <a href="mailto:info@urjafoods.net" className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-lime-50 hover:text-lime-600">
                <Mail className="h-4 w-4" />
                <span className="truncate">info@urjafoods.net</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH PANEL */}
      {searchOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center bg-slate-950/45 px-4 pt-24 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
          <div
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.24)] animate-[searchDrop_220ms_ease-out]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
              <Search className="h-5 w-5 text-lime-500" />
              <input
                autoFocus
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search module or page..."
                className="min-w-0 flex-1 bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => {
                      handleNavClick();
                      setSearchOpen(false);
                    }}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-lime-50 hover:text-lime-600"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-300" />
                  </Link>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-sm text-slate-400">No matching page or module found.</div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes menuDrop {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes searchDrop {
          from { opacity: 0; transform: translateY(-12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </header>
  );
}
