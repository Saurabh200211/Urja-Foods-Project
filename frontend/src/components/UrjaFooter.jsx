//import React from "react";
//import { Link } from "react-router-dom";
//import {
//  ArrowUpRight,
//  ChevronUp,
//  Mail,
//  MapPin,
//  Phone,
//  Send,
//  Wheat,
//} from "lucide-react";

//const quickLinks = [
//  { name: "About Us", href: "/about" },
//  { name: "Our Business", href: "/business" },
//  { name: "Our Products", href: "/products" },
//  { name: "Our Services", href: "/services" },
//  { name: "Corporate Actions", href: "/corporate-actions" },
//  { name: "Contact Us", href: "/contact" },
//];

//const socialLinks = [
//  {
//    name: "LinkedIn",
//    href: "#",
//    icon: (
//      <svg
//        viewBox="0 0 24 24"
//        fill="currentColor"
//        className="h-4 w-4"
//        aria-hidden="true"
//      >
//        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.15 3 3.25 3.9 3.25 5S4.15 7 5.25 7 7.25 6.1 7.25 5 6.35 3 5.25 3ZM20.75 13.18C20.75 9.87 18.99 8.09 16.56 8.09C14.59 8.09 13.71 9.17 13.22 9.93V8.5H9.84V19.5H13.22V14.05C13.22 12.61 13.49 11.21 15.28 11.21C17.05 11.21 17.08 12.87 17.08 14.14V19.5H20.46L20.75 13.18Z" />
//      </svg>
//    ),
//  },
//  {
//    name: "Instagram",
//    href: "#",
//    icon: (
//      <svg
//        viewBox="0 0 24 24"
//        fill="none"
//        stroke="currentColor"
//        strokeWidth="1.8"
//        className="h-4 w-4"
//        aria-hidden="true"
//      >
//        <rect x="3" y="3" width="18" height="18" rx="5" />
//        <circle cx="12" cy="12" r="4" />
//        <circle
//          cx="17.3"
//          cy="6.7"
//          r="1"
//          fill="currentColor"
//          stroke="none"
//        />
//      </svg>
//    ),
//  },
//  {
//    name: "Facebook",
//    href: "#",
//    icon: (
//      <svg
//        viewBox="0 0 24 24"
//        fill="currentColor"
//        className="h-4 w-4"
//        aria-hidden="true"
//      >
//        <path d="M13.7 21V13.2H16.3L16.7 10.1H13.7V8.1C13.7 7.2 14 6.6 15.3 6.6H16.8V3.8C16.2 3.7 15.5 3.6 14.5 3.6C11.9 3.6 10.1 5.2 10.1 8V10.1H7.5V13.2H10.1V21H13.7Z" />
//      </svg>
//    ),
//  },
//];

//export default function UrjaFooter() {
//  const handleSubmit = (event) => {
//    event.preventDefault();
//  };

//  const handleTop = () => {
//    window.scrollTo({
//      top: 0,
//      behavior: "smooth",
//    });
//  };

//  return (
//    <footer className="relative isolate overflow-hidden bg-[#eff8e6] text-slate-900">
//      {/* =====================================================
//          BACKGROUND EFFECTS
//      ====================================================== */}

//      <div className="pointer-events-none absolute inset-0 -z-10">
//        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-lime-300/30 blur-3xl" />
//        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
//        <div className="absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-lime-200/40 blur-3xl" />

//        <div
//          className="absolute inset-0 opacity-[0.035]"
//          style={{
//            backgroundImage:
//              "linear-gradient(rgba(72,101,45,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(72,101,45,0.10) 1px, transparent 1px)",
//            backgroundSize: "50px 50px",
//          }}
//        />

//        <svg
//          className="absolute bottom-0 left-0 h-auto w-full opacity-[0.06]"
//          viewBox="0 0 1440 280"
//          fill="none"
//          aria-hidden="true"
//        >
//          <path
//            d="M0 228C132 190 205 257 335 214C457 173 548 111 690 153C812 190 883 253 1020 216C1157 179 1245 128 1440 167V280H0V228Z"
//            fill="currentColor"
//          />

//          <path
//            d="M0 242C120 210 228 260 350 228C484 192 550 139 688 169C810 195 884 266 1028 232C1180 196 1265 148 1440 182"
//            stroke="currentColor"
//            strokeWidth="2"
//          />
//        </svg>
//      </div>

//      {/* =====================================================
//          MAIN FOOTER CONTAINER
//      ====================================================== */}

//      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pb-14 lg:pt-20">
//        <div className="mb-12 flex flex-col gap-8 border-b border-slate-900/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
//          <div className="max-w-3xl">
//            <div
//              className="
//                mb-5
//                inline-flex
//                items-center
//                gap-2
//                rounded-full
//                border
//                border-lime-600/15
//                bg-lime-300/30
//                px-4
//                py-2
//                text-xs
//                font-semibold
//                uppercase
//                tracking-[0.22em]
//                text-lime-700
//              "
//            >
//              <Wheat className="h-4 w-4" />
//              Farm To Future
//            </div>

//            <h2
//              className="
//                text-3xl
//                font-extrabold
//                leading-tight
//                tracking-tight
//                text-slate-900
//                sm:text-4xl
//                lg:text-5xl
//              "
//            >
//              Growing stronger communities,
//              <span className="block text-lime-600">
//                one harvest at a time.
//              </span>
//            </h2>

//            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
//              Urja Foods & Agro Pvt. Ltd. connects agriculture, poultry and
//              rural enterprise through responsible, practical and sustainable
//              growth.
//            </p>
//          </div>

//          <Link
//            to="/contact"
//            className="
//              group
//              inline-flex
//              w-fit
//              items-center
//              gap-2
//              rounded-2xl
//              bg-lime-400
//              px-6
//              py-4
//              text-sm
//              font-bold
//              text-slate-950
//              shadow-[0_10px_35px_rgba(132,204,22,0.15)]
//              transition-all
//              duration-300
//              hover:-translate-y-1
//              hover:bg-lime-300
//              hover:shadow-[0_16px_45px_rgba(132,204,22,0.25)]
//            "
//          >
//            Start a Conversation

//            <ArrowUpRight
//              className="
//                h-4
//                w-4
//                transition-transform
//                duration-300
//                group-hover:-translate-y-1
//                group-hover:translate-x-1
//              "
//            />
//          </Link>
//        </div>

//        {/* ==================================================
//            FOOTER COLUMNS
//        =================================================== */}

//        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_1fr] lg:gap-16">
//          <div>
//            <div className="flex items-center gap-3">
//              <div
//                className="
//                  flex
//                  h-12
//                  w-12
//                  items-center
//                  justify-center
//                  rounded-2xl
//                  bg-lime-400
//                  text-slate-950
//                  shadow-lg
//                  shadow-lime-500/10
//                  transition-all
//                  duration-300
//                  hover:scale-105
//                  hover:rotate-6
//                "
//              >
//                <Wheat className="h-6 w-6" />
//              </div>

//              <div>
//                <h3 className="text-2xl font-black tracking-tight text-slate-900">
//                  URJA
//                </h3>

//                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-lime-700">
//                  Foods & Agro
//                </p>
//              </div>
//            </div>

//            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">
//              The odyssey of Urja started with a cattle feed manufacturing
//              unit in the year 2005, from the farm-background family of
//              Mr. Pramod Anandrao Hinge with aspirations to improve stable
//              financial income for farmers in remote rural areas.
//            </p>

//            <div className="mt-7 flex items-center gap-3">
//              {socialLinks.map((social) => (
//                <a
//                  key={social.name}
//                  href={social.href}
//                  aria-label={social.name}
//                  className="
//                    flex
//                    h-10
//                    w-10
//                    items-center
//                    justify-center
//                    rounded-xl
//                    border
//                    border-slate-900/10
//                    bg-white/70
//                    text-slate-600
//                    shadow-sm
//                    backdrop-blur-md
//                    transition-all
//                    duration-300
//                    hover:-translate-y-1
//                    hover:border-lime-400/50
//                    hover:bg-lime-400
//                    hover:text-slate-950
//                  "
//                >
//                  {social.icon}
//                </a>
//              ))}
//            </div>
//          </div>

//          <div>
//            <div className="mb-6 flex items-center gap-3">
//              <span className="h-px w-8 bg-lime-500" />

//              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
//                Quick Links
//              </h3>
//            </div>

//            <nav
//              className="space-y-2"
//              aria-label="Footer navigation"
//            >
//              {quickLinks.map((link) => (
//                <Link
//                  key={link.name}
//                  to={link.href}
//                  className="
//                    group
//                    flex
//                    items-center
//                    justify-between
//                    rounded-xl
//                    px-3
//                    py-3
//                    text-sm
//                    font-medium
//                    text-slate-600
//                    transition-all
//                    duration-300
//                    hover:bg-white/60
//                    hover:text-lime-700
//                  "
//                >
//                  <span
//                    className="
//                      transition-transform
//                      duration-300
//                      group-hover:translate-x-1
//                    "
//                  >
//                    {link.name}
//                  </span>

//                  <ArrowUpRight
//                    className="
//                      h-4
//                      w-4
//                      -translate-x-1
//                      translate-y-1
//                      opacity-0
//                      transition-all
//                      duration-300
//                      group-hover:translate-x-0
//                      group-hover:translate-y-0
//                      group-hover:opacity-100
//                      group-hover:text-lime-600
//                    "
//                  />
//                </Link>
//              ))}
//            </nav>
//          </div>

//          <div>
//            <div className="mb-6 flex items-center gap-3">
//              <span className="h-px w-8 bg-lime-500" />

//              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
//                Get In Touch
//              </h3>
//            </div>

//            <a
//              href="tel:+917028399900"
//              className="
//                group
//                mb-3
//                flex
//                items-start
//                gap-3
//                rounded-2xl
//                border
//                border-slate-900/10
//                bg-white/75
//                p-4
//                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
//                backdrop-blur-md
//                transition-all
//                duration-300
//                hover:-translate-y-1
//                hover:border-lime-400/50
//                hover:bg-white
//              "
//            >
//              <div
//                className="
//                  flex
//                  h-10
//                  w-10
//                  shrink-0
//                  items-center
//                  justify-center
//                  rounded-xl
//                  bg-lime-300/30
//                  text-lime-700
//                  transition-all
//                  duration-300
//                  group-hover:bg-lime-400
//                  group-hover:text-slate-950
//                "
//              >
//                <Phone className="h-4 w-4" />
//              </div>

//              <div>
//                <p className="text-xs text-slate-500">
//                  Call us
//                </p>

//                <p className="mt-1 text-sm font-semibold text-slate-900">
//                  +91-7028399900
//                </p>
//              </div>
//            </a>

//            <a
//              href="mailto:info@urjafoods.net"
//              className="
//                group
//                mb-3
//                flex
//                items-start
//                gap-3
//                rounded-2xl
//                border
//                border-slate-900/10
//                bg-white/75
//                p-4
//                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
//                backdrop-blur-md
//                transition-all
//                duration-300
//                hover:-translate-y-1
//                hover:border-lime-400/50
//                hover:bg-white
//              "
//            >
//              <div
//                className="
//                  flex
//                  h-10
//                  w-10
//                  shrink-0
//                  items-center
//                  justify-center
//                  rounded-xl
//                  bg-lime-300/30
//                  text-lime-700
//                  transition-all
//                  duration-300
//                  group-hover:bg-lime-400
//                  group-hover:text-slate-950
//                "
//              >
//                <Mail className="h-4 w-4" />
//              </div>

//              <div>
//                <p className="text-xs text-slate-500">
//                  Email us
//                </p>

//                <p className="mt-1 text-sm font-semibold text-slate-900">
//                  info@urjafoods.net
//                </p>
//              </div>
//            </a>

//            <div
//              className="
//                flex
//                items-start
//                gap-3
//                rounded-2xl
//                border
//                border-slate-900/10
//                bg-white/75
//                p-4
//                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
//                backdrop-blur-md
//              "
//            >
//              <div
//                className="
//                  flex
//                  h-10
//                  w-10
//                  shrink-0
//                  items-center
//                  justify-center
//                  rounded-xl
//                  bg-lime-300/30
//                  text-lime-700
//                "
//              >
//                <MapPin className="h-4 w-4" />
//              </div>

//              <div>
//                <p className="text-xs text-slate-500">
//                  Location
//                </p>

//                <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
//                  Manchar, Pune, Maharashtra, India
//                </p>
//              </div>
//            </div>

//            <form
//              onSubmit={handleSubmit}
//              className="
//                mt-5
//                rounded-2xl
//                border
//                border-slate-900/10
//                bg-white/75
//                p-2
//                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
//                backdrop-blur-md
//              "
//            >
//              <div className="flex items-center gap-2">
//                <Mail className="ml-3 h-4 w-4 shrink-0 text-slate-500" />

//                <input
//                  type="email"
//                  required
//                  placeholder="Your email address"
//                  className="
//                    min-w-0
//                    flex-1
//                    bg-transparent
//                    px-1
//                    py-3
//                    text-sm
//                    text-slate-900
//                    outline-none
//                    placeholder:text-slate-400
//                  "
//                />

//                <button
//                  type="submit"
//                  aria-label="Subscribe"
//                  className="
//                    flex
//                    h-11
//                    w-11
//                    shrink-0
//                    items-center
//                    justify-center
//                    rounded-xl
//                    bg-lime-400
//                    text-slate-950
//                    transition-all
//                    duration-300
//                    hover:rotate-3
//                    hover:bg-lime-300
//                    hover:shadow-lg
//                    hover:shadow-lime-400/20
//                  "
//                >
//                  <Send className="h-4 w-4" />
//                </button>
//              </div>
//            </form>
//          </div>
//        </div>

//        <div
//          className="
//            mt-12
//            flex
//            flex-col
//            gap-5
//            border-t
//            border-slate-900/10
//            pt-6
//            md:flex-row
//            md:items-center
//            md:justify-between
//          "
//        >
//          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
//            © {new Date().getFullYear()}{" "}
//            <span className="font-semibold text-slate-800">
//              Urja Foods & Agro Pvt. Ltd.
//            </span>{" "}
//            All Rights Reserved.
//          </p>

//          <div className="flex items-center gap-2.5">
//            {socialLinks.map((social) => (
//              <a
//                key={social.name}
//                href={social.href}
//                aria-label={social.name}
//                className="
//                  flex
//                  h-10
//                  w-10
//                  items-center
//                  justify-center
//                  rounded-xl
//                  border
//                  border-slate-900/10
//                  bg-white/70
//                  text-slate-600
//                  shadow-sm
//                  transition-all
//                  duration-300
//                  hover:-translate-y-1
//                  hover:border-lime-400/50
//                  hover:bg-lime-400
//                  hover:text-slate-950
//                "
//              >
//                {social.icon}
//              </a>
//            ))}

//            <button
//              type="button"
//              onClick={handleTop}
//              aria-label="Back to top"
//              className="
//                ml-1
//                flex
//                h-10
//                w-10
//                items-center
//                justify-center
//                rounded-xl
//                bg-slate-900
//                text-white
//                shadow-md
//                transition-all
//                duration-300
//                hover:-translate-y-1
//                hover:bg-lime-400
//                hover:text-slate-950
//              "
//            >
//              <ChevronUp className="h-5 w-5" />
//            </button>
//          </div>
//        </div>
//      </div>

//      <div className="h-1 bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400" />
//    </footer>
//  );
//}

//import React from "react";
//import { Link } from "react-router-dom";
//import {
//  ArrowUpRight,
//  ChevronUp,
//  Mail,
//  MapPin,
//  Phone,
//  Send,
//  Wheat,
//} from "lucide-react";

//const quickLinks = [
//  { name: "About Us", href: "/about" },
//  { name: "Our Business", href: "/business" },
//  { name: "Our Products", href: "/products" },
//  { name: "Our Services", href: "/services" },
//  { name: "Corporate Actions", href: "/corporate-actions" },
//  { name: "Contact Us", href: "/contact" },
//];

//const socialLinks = [
//  {
//    name: "LinkedIn",
//    href: "#",
//    icon: (
//      <svg
//        viewBox="0 0 24 24"
//        fill="currentColor"
//        className="h-4 w-4"
//        aria-hidden="true"
//      >
//        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.15 3 3.25 3.9 3.25 5S4.15 7 5.25 7 7.25 6.1 7.25 5 6.35 3 5.25 3ZM20.75 13.18C20.75 9.87 18.99 8.09 16.56 8.09C14.59 8.09 13.71 9.17 13.22 9.93V8.5H9.84V19.5H13.22V14.05C13.22 12.61 13.49 11.21 15.28 11.21C17.05 11.21 17.08 12.87 17.08 14.14V19.5H20.46L20.75 13.18Z" />
//      </svg>
//    ),
//  },
//  {
//    name: "Instagram",
//    href: "#",
//    icon: (
//      <svg
//        viewBox="0 0 24 24"
//        fill="none"
//        stroke="currentColor"
//        strokeWidth="1.8"
//        className="h-4 w-4"
//        aria-hidden="true"
//      >
//        <rect x="3" y="3" width="18" height="18" rx="5" />
//        <circle cx="12" cy="12" r="4" />
//        <circle
//          cx="17.3"
//          cy="6.7"
//          r="1"
//          fill="currentColor"
//          stroke="none"
//        />
//      </svg>
//    ),
//  },
//  {
//    name: "Facebook",
//    href: "#",
//    icon: (
//      <svg
//        viewBox="0 0 24 24"
//        fill="currentColor"
//        className="h-4 w-4"
//        aria-hidden="true"
//      >
//        <path d="M13.7 21V13.2H16.3L16.7 10.1H13.7V8.1C13.7 7.2 14 6.6 15.3 6.6H16.8V3.8C16.2 3.7 15.5 3.6 14.5 3.6C11.9 3.6 10.1 5.2 10.1 8V10.1H7.5V13.2H10.1V21H13.7Z" />
//      </svg>
//    ),
//  },
//];

//export default function UrjaFooter() {
//  const handleSubmit = (event) => {
//    event.preventDefault();
//  };

//  const handleTop = () => {
//    window.scrollTo({
//      top: 0,
//      behavior: "smooth",
//    });
//  };

//  return (
//    <footer className="relative isolate overflow-hidden bg-[#eff8e6] text-slate-900">

//      {/* =====================================================
//          AGRICULTURE BACKGROUND BANNER
//      ====================================================== */}

//      <div
//        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
//        style={{
//          backgroundImage:
//            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85')",
//        }}
//      />

//      {/* Dark green overlay */}
//      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#163b20]/95 via-[#eff8e6]/90 to-[#eff8e6]/98" />

//      {/* Soft white-green overlay */}
//      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/30 via-transparent to-lime-100/40" />

//      {/* =====================================================
//          BACKGROUND EFFECTS
//      ====================================================== */}

//      <div className="pointer-events-none absolute inset-0 -z-10">

//        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-lime-300/30 blur-3xl" />

//        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

//        <div className="absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-lime-200/40 blur-3xl" />

//        <div
//          className="absolute inset-0 opacity-[0.035]"
//          style={{
//            backgroundImage:
//              "linear-gradient(rgba(72,101,45,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(72,101,45,0.10) 1px, transparent 1px)",
//            backgroundSize: "50px 50px",
//          }}
//        />

//        <svg
//          className="absolute bottom-0 left-0 h-auto w-full opacity-[0.06]"
//          viewBox="0 0 1440 280"
//          fill="none"
//          aria-hidden="true"
//        >
//          <path
//            d="M0 228C132 190 205 257 335 214C457 173 548 111 690 153C812 190 883 253 1020 216C1157 179 1245 128 1440 167V280H0V228Z"
//            fill="currentColor"
//          />

//          <path
//            d="M0 242C120 210 228 260 350 228C484 192 550 139 688 169C810 195 884 266 1028 232C1180 196 1265 148 1440 182"
//            stroke="currentColor"
//            strokeWidth="2"
//          />
//        </svg>
//      </div>

//      {/* =====================================================
//          MAIN FOOTER CONTAINER
//      ====================================================== */}

//      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pb-14 lg:pt-20">

//        {/* =====================================================
//            TOP FOOTER BANNER
//        ====================================================== */}

//        <div className="mb-12 overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 p-6 shadow-[0_25px_80px_rgba(22,59,32,0.15)] backdrop-blur-xl sm:p-8 lg:p-10">

//          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

//            <div className="max-w-3xl">

//              <div
//                className="
//                  mb-5
//                  inline-flex
//                  items-center
//                  gap-2
//                  rounded-full
//                  border
//                  border-lime-600/15
//                  bg-lime-300/30
//                  px-4
//                  py-2
//                  text-xs
//                  font-semibold
//                  uppercase
//                  tracking-[0.22em]
//                  text-lime-700
//                "
//              >
//                <Wheat className="h-4 w-4" />
//                Farm To Future
//              </div>

//              <h2
//                className="
//                  text-3xl
//                  font-extrabold
//                  leading-tight
//                  tracking-tight
//                  text-slate-900
//                  sm:text-4xl
//                  lg:text-5xl
//                "
//              >
//                Growing stronger communities,
//                <span className="block text-lime-600">
//                  one harvest at a time.
//                </span>
//              </h2>

//              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
//                Urja Foods & Agro Pvt. Ltd. connects agriculture, poultry and
//                rural enterprise through responsible, practical and sustainable
//                growth.
//              </p>
//            </div>

//            <Link
//              to="/contact"
//              className="
//                group
//                inline-flex
//                w-fit
//                items-center
//                gap-2
//                rounded-2xl
//                bg-lime-400
//                px-6
//                py-4
//                text-sm
//                font-bold
//                text-slate-950
//                shadow-[0_10px_35px_rgba(132,204,22,0.15)]
//                transition-all
//                duration-300
//                hover:-translate-y-1
//                hover:bg-lime-300
//                hover:shadow-[0_16px_45px_rgba(132,204,22,0.25)]
//              "
//            >
//              Start a Conversation

//              <ArrowUpRight
//                className="
//                  h-4
//                  w-4
//                  transition-transform
//                  duration-300
//                  group-hover:-translate-y-1
//                  group-hover:translate-x-1
//                "
//              />
//            </Link>

//          </div>
//        </div>

//        {/* ==================================================
//            FOOTER COLUMNS
//        =================================================== */}

//        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_1fr] lg:gap-16">

//          {/* ==================================================
//              COMPANY
//          =================================================== */}

//          <div>

//            {/* REAL URJA LOGO */}
//            <div className="mb-6 inline-flex items-center rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-[0_15px_45px_rgba(22,59,32,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(22,59,32,0.18)]">

//              <img
//                src="./images/logo.png"
//                alt="Urja Foods"
//                className="h-auto w-[2px] object-cover sm:w-[26px]"
//              />

//            </div>

//            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600  ">
//              The odyssey of Urja started with a cattle feed manufacturing
//              unit in the year 2005, from the farm-background family of
//              Mr. Pramod Anandrao Hinge with aspirations to improve stable
//              financial income for farmers in remote rural areas.
//            </p>

//            <div className="mt-7 flex items-center gap-3">

//              {socialLinks.map((social) => (
//                <a
//                  key={social.name}
//                  href={social.href}
//                  aria-label={social.name}
//                  className="
//                    flex
//                    h-10
//                    w-10
//                    items-center
//                    justify-center
//                    rounded-xl
//                    border
//                    border-slate-900/10
//                    bg-white/70
//                    text-slate-600
//                    shadow-sm
//                    backdrop-blur-md
//                    transition-all
//                    duration-300
//                    hover:-translate-y-1
//                    hover:border-lime-400/50
//                    hover:bg-lime-400
//                    hover:text-slate-950
//                  "
//                >
//                  {social.icon}
//                </a>
//              ))}

//            </div>
//          </div>

//          {/* ==================================================
//              QUICK LINKS
//          =================================================== */}

//          <div>

//            <div className="mb-6 flex items-center gap-3">
//              <span className="h-px w-8 bg-lime-500" />

//              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
//                Quick Links
//              </h3>
//            </div>

//            <nav
//              className="space-y-2"
//              aria-label="Footer navigation"
//            >
//              {quickLinks.map((link) => (
//                <Link
//                  key={link.name}
//                  to={link.href}
//                  className="
//                    group
//                    flex
//                    items-center
//                    justify-between
//                    rounded-xl
//                    px-3
//                    py-3
//                    text-sm
//                    font-medium
//                    text-slate-600
//                    transition-all
//                    duration-300
//                    hover:bg-white/60
//                    hover:text-lime-700
//                  "
//                >

//                  <span
//                    className="
//                      transition-transform
//                      duration-300
//                      group-hover:translate-x-1
//                    "
//                  >
//                    {link.name}
//                  </span>

//                  <ArrowUpRight
//                    className="
//                      h-4
//                      w-4
//                      -translate-x-1
//                      translate-y-1
//                      opacity-0
//                      transition-all
//                      duration-300
//                      group-hover:translate-x-0
//                      group-hover:translate-y-0
//                      group-hover:opacity-100
//                      group-hover:text-lime-600
//                    "
//                  />

//                </Link>
//              ))}
//            </nav>
//          </div>

//          {/* ==================================================
//              GET IN TOUCH
//          =================================================== */}

//          <div>

//            <div className="mb-6 flex items-center gap-3">

//              <span className="h-px w-8 bg-lime-500" />

//              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
//                Get In Touch
//              </h3>

//            </div>

//            {/* PHONE */}

//            <a
//              href="tel:+917028399900"
//              className="
//                group
//                mb-3
//                flex
//                items-start
//                gap-3
//                rounded-2xl
//                border
//                border-slate-900/10
//                bg-white/75
//                p-4
//                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
//                backdrop-blur-md
//                transition-all
//                duration-300
//                hover:-translate-y-1
//                hover:border-lime-400/50
//                hover:bg-white
//              "
//            >

//              <div
//                className="
//                  flex
//                  h-10
//                  w-10
//                  shrink-0
//                  items-center
//                  justify-center
//                  rounded-xl
//                  bg-lime-300/30
//                  text-lime-700
//                  transition-all
//                  duration-300
//                  group-hover:bg-lime-400
//                  group-hover:text-slate-950
//                "
//              >
//                <Phone className="h-4 w-4" />
//              </div>

//              <div>

//                <p className="text-xs text-slate-500">
//                  Call us
//                </p>

//                <p className="mt-1 text-sm font-semibold text-slate-900">
//                  +91-7028399900
//                </p>

//              </div>

//            </a>

//            {/* EMAIL */}

//            <a
//              href="mailto:info@urjafoods.net"
//              className="
//                group
//                mb-3
//                flex
//                items-start
//                gap-3
//                rounded-2xl
//                border
//                border-slate-900/10
//                bg-white/75
//                p-4
//                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
//                backdrop-blur-md
//                transition-all
//                duration-300
//                hover:-translate-y-1
//                hover:border-lime-400/50
//                hover:bg-white
//              "
//            >

//              <div
//                className="
//                  flex
//                  h-10
//                  w-10
//                  shrink-0
//                  items-center
//                  justify-center
//                  rounded-xl
//                  bg-lime-300/30
//                  text-lime-700
//                  transition-all
//                  duration-300
//                  group-hover:bg-lime-400
//                  group-hover:text-slate-950
//                "
//              >
//                <Mail className="h-4 w-4" />
//              </div>

//              <div>

//                <p className="text-xs text-slate-500">
//                  Email us
//                </p>

//                <p className="mt-1 text-sm font-semibold text-slate-900">
//                  info@urjafoods.net
//                </p>

//              </div>

//            </a>

//            {/* LOCATION */}

//            <div
//              className="
//                flex
//                items-start
//                gap-3
//                rounded-2xl
//                border
//                border-slate-900/10
//                bg-white/75
//                p-4
//                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
//                backdrop-blur-md
//              "
//            >

//              <div
//                className="
//                  flex
//                  h-10
//                  w-10
//                  shrink-0
//                  items-center
//                  justify-center
//                  rounded-xl
//                  bg-lime-300/30
//                  text-lime-700
//                "
//              >
//                <MapPin className="h-4 w-4" />
//              </div>

//              <div>

//                <p className="text-xs text-slate-500">
//                  Location
//                </p>

//                <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
//                  Manchar, Pune, Maharashtra, India
//                </p>

//              </div>

//            </div>

//            {/* NEWSLETTER */}

//            <form
//              onSubmit={handleSubmit}
//              className="
//                mt-5
//                rounded-2xl
//                border
//                border-slate-900/10
//                bg-white/75
//                p-2
//                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
//                backdrop-blur-md
//              "
//            >

//              <div className="flex items-center gap-2">

//                <Mail className="ml-3 h-4 w-4 shrink-0 text-slate-500" />

//                <input
//                  type="email"
//                  required
//                  placeholder="Your email address"
//                  className="
//                    min-w-0
//                    flex-1
//                    bg-transparent
//                    px-1
//                    py-3
//                    text-sm
//                    text-slate-900
//                    outline-none
//                    placeholder:text-slate-400
//                  "
//                />

//                <button
//                  type="submit"
//                  aria-label="Subscribe"
//                  className="
//                    flex
//                    h-11
//                    w-11
//                    shrink-0
//                    items-center
//                    justify-center
//                    rounded-xl
//                    bg-lime-400
//                    text-slate-950
//                    transition-all
//                    duration-300
//                    hover:rotate-3
//                    hover:bg-lime-300
//                    hover:shadow-lg
//                    hover:shadow-lime-400/20
//                  "
//                >
//                  <Send className="h-4 w-4" />
//                </button>

//              </div>

//            </form>

//          </div>
//        </div>

//        {/* ==================================================
//            COPYRIGHT
//        =================================================== */}

//        <div
//          className="
//            mt-12
//            flex
//            flex-col
//            gap-5
//            border-t
//            border-slate-900/10
//            pt-6
//            md:flex-row
//            md:items-center
//            md:justify-between
//          "
//        >

//          <p className="text-xs leading-6 text-slate-200 sm:text-sm">
//            © {new Date().getFullYear()}{" "}
//            <span className="font-semibold text-slate-50">
//              Urja Foods & Agro Pvt. Ltd.
//            </span>{" "}
//            All Rights Reserved.
//          </p>

//          <div className="flex items-center gap-2.5">

//            {socialLinks.map((social) => (
//              <a
//                key={social.name}
//                href={social.href}
//                aria-label={social.name}
//                className="
//                  flex
//                  h-10
//                  w-10
//                  items-center
//                  justify-center
//                  rounded-xl
//                  border
//                  border-slate-900/10
//                  bg-white/70
//                  text-slate-600
//                  shadow-sm
//                  transition-all
//                  duration-300
//                  hover:-translate-y-1
//                  hover:border-lime-400/50
//                  hover:bg-lime-400
//                  hover:text-slate-950
//                "
//              >
//                {social.icon}
//              </a>
//            ))}

//            <button
//              type="button"
//              onClick={handleTop}
//              aria-label="Back to top"
//              className="
//                ml-1
//                flex
//                h-10
//                w-10
//                items-center
//                justify-center
//                rounded-xl
//                bg-slate-900
//                text-white
//                shadow-md
//                transition-all
//                duration-300
//                hover:-translate-y-1
//                hover:bg-lime-400
//                hover:text-slate-950
//              "
//            >
//              <ChevronUp className="h-5 w-5" />
//            </button>

//          </div>

//        </div>
//      </div>

//      {/* ==================================================
//          BOTTOM GREEN LINE
//      =================================================== */}

//      <div className="h-1 bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400" />

//    </footer>
//  );
//}

import React, { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  Send,
  Wheat,
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Business", href: "/business" },
  { name: "Our Products", href: "/products" },
  { name: "Our Services", href: "/services" },
  { name: "Corporate Actions", href: "/corporate-actions" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.15 3 3.25 3.9 3.25 5S4.15 7 5.25 7 7.25 6.1 7.25 5 6.35 3 5.25 3ZM20.75 13.18C20.75 9.87 18.99 8.09 16.56 8.09C14.59 8.09 13.71 9.17 13.22 9.93V8.5H9.84V19.5H13.22V14.05C13.22 12.61 13.49 11.21 15.28 11.21C17.05 11.21 17.08 12.87 17.08 14.14V19.5H20.46L20.75 13.18Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.3"
          cy="6.7"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M13.7 21V13.2H16.3L16.7 10.1H13.7V8.1C13.7 7.2 14 6.6 15.3 6.6H16.8V3.8C16.2 3.7 15.5 3.6 14.5 3.6C11.9 3.6 10.1 5.2 10.1 8V10.1H7.5V13.2H10.1V21H13.7Z" />
      </svg>
    ),
  },
];



export default function UrjaFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newsletterEmail) return;

    setSubmitting(true);
    try {
      const res = await api.subscribeNewsletter(newsletterEmail);
      setNewsletterMsg(res.message || "Thank you for subscribing!");
      setNewsletterEmail("");
    } catch (err) {
      setNewsletterMsg("Thank you for subscribing!");
      setNewsletterEmail("");
    } finally {
      setSubmitting(false);
      setTimeout(() => setNewsletterMsg(""), 4000);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        bg-[#ead8b8]
        text-slate-900
      "
    >
      {/* =====================================================
          BURLAP BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-30
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/urja-burlap-bg.png')",
        }}
      />

      {/* Warm natural overlay */}
      <div className="absolute inset-0 -z-20 bg-[#c8a875]/25" />

      {/* Readability overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#fff9ed]/60 via-[#ead8b8]/45 to-[#c9aa77]/60" />

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Left lime glow */}
        <div
          className="
            absolute
            -left-40
            top-10
            h-80
            w-80
            rounded-full
            bg-lime-300/20
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />

        {/* Right green glow */}
        <div
          className="
            absolute
            -right-32
            top-0
            h-96
            w-96
            rounded-full
            bg-emerald-300/15
            blur-3xl
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-72
            w-[90%]
            -translate-x-1/2
            rounded-full
            bg-lime-200/20
            blur-3xl
            sm:h-96
            sm:w-[700px]
          "
        />

        {/* Subtle burlap texture */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(92,70,35,0.12) 0px,
                rgba(92,70,35,0.12) 1px,
                transparent 1px,
                transparent 4px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(92,70,35,0.10) 0px,
                rgba(92,70,35,0.10) 1px,
                transparent 1px,
                transparent 4px
              )
            `,
          }}
        />

        {/* Organic bottom shape */}
        <svg
          className="
            absolute
            bottom-0
            left-0
            h-auto
            w-full
            opacity-[0.07]
          "
          viewBox="0 0 1440 280"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0 228C132 190 205 257 335 214C457 173 548 111 690 153C812 190 883 253 1020 216C1157 179 1245 128 1440 167V280H0V228Z"
            fill="#4d6b2f"
          />

          <path
            d="M0 242C120 210 228 260 350 228C484 192 550 139 688 169C810 195 884 266 1028 232C1180 196 1265 148 1440 182"
            stroke="#4d6b2f"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN FOOTER CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          pb-10
          pt-12
          sm:px-8
          sm:pt-16
          lg:px-10
          lg:pb-14
          lg:pt-20
        "
      >
        {/* =====================================================
            TOP FOOTER BANNER
        ====================================================== */}

        <div
          className="
            mb-10
            overflow-hidden
            rounded-[2rem]
            border
            border-white/50
            bg-[#fffaf0]/75
            p-5
            shadow-[0_25px_80px_rgba(72,53,25,0.14)]
            backdrop-blur-xl
            sm:mb-12
            sm:p-8
            lg:p-10
          "
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              {/* Badge */}
              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-lime-600/15
                  bg-lime-300/30
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-lime-800
                "
              >
                <Wheat className="h-4 w-4" />
                Farm To Future
              </div>

              {/* Heading */}
              <h2
                className="
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-slate-900
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Growing stronger communities,
                <span className="block text-lime-600">
                  one harvest at a time.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Urja Foods & Agro Pvt. Ltd. connects agriculture, poultry and
                rural enterprise through responsible, practical and sustainable
                growth.
              </p>
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-2xl
                bg-lime-400
                px-6
                py-4
                text-sm
                font-bold
                text-slate-950
                shadow-[0_10px_35px_rgba(132,204,22,0.15)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-lime-300
                hover:shadow-[0_16px_45px_rgba(132,204,22,0.25)]
              "
            >
              Start a Conversation

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>

        {/* ==================================================
            FOOTER COLUMNS
        =================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_1fr] lg:gap-16">

          {/* ==================================================
              COMPANY
          =================================================== */}

          <div>

            {/* =================================================
                CORRECTED URJA LOGO
            ================================================= */}

            <div className="group flex items-center gap-3">

              {/* Logo Mark */}
              <div
                className="
                  relative
                  h-14
                  w-14
                  shrink-0
                  sm:h-16
                  sm:w-16
                "
              >

                {/* Green Diamond */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-12
                    w-12
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-45
                    rounded-[3px]
                    bg-lime-500
                    shadow-[0_8px_22px_rgba(101,163,13,0.22)]
                    transition-transform
                    duration-500
                    group-hover:rotate-[52deg]
                    sm:h-14
                    sm:w-14
                  "
                />

                {/* White Circle */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-10
                    flex
                    h-10
                    w-10
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-slate-700/50
                    bg-white
                    text-[15px]
                    font-black
                    text-slate-800
                    shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                    transition-transform
                    duration-300
                    group-hover:scale-105
                    sm:h-11
                    sm:w-11
                  "
                >
                  U
                </div>
              </div>

              {/* Brand Text */}
              <div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  URJA
                </h3>

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-lime-700">
                  Foods &amp; Agro
                </p>
              </div>
            </div>

            {/* Company Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">
              The odyssey of Urja started with a cattle feed manufacturing
              unit in the year 2005, from the farm-background family of
              Mr. Pramod Anandrao Hinge with aspirations to improve stable
              financial income for farmers in remote rural areas.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-900/10
                    bg-white/70
                    text-slate-600
                    shadow-sm
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-lime-400/50
                    hover:bg-lime-400
                    hover:text-slate-950
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ==================================================
              QUICK LINKS
          =================================================== */}

          <div>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-lime-500" />

              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                Quick Links
              </h3>
            </div>

            <nav
              className="space-y-2"
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    font-medium
                    text-slate-600
                    transition-all
                    duration-300
                    hover:bg-white/60
                    hover:text-lime-700
                  "
                >
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    {link.name}
                  </span>

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      -translate-x-1
                      translate-y-1
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      group-hover:text-lime-600
                    "
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* ==================================================
              GET IN TOUCH
          =================================================== */}

          <div>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-lime-500" />

              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                Get In Touch
              </h3>
            </div>

            {/* PHONE */}
            <a
              href="tel:+917028399900"
              className="
                group
                mb-3
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-slate-900/10
                bg-white/75
                p-4
                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-lime-400/50
                hover:bg-white
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-300/30
                  text-lime-700
                  transition-all
                  duration-300
                  group-hover:bg-lime-400
                  group-hover:text-slate-950
                "
              >
                <Phone className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Call us
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  +91-7028399900
                </p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@urjafoods.net"
              className="
                group
                mb-3
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-slate-900/10
                bg-white/75
                p-4
                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-lime-400/50
                hover:bg-white
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-300/30
                  text-lime-700
                  transition-all
                  duration-300
                  group-hover:bg-lime-400
                  group-hover:text-slate-950
                "
              >
                <Mail className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Email us
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  info@urjafoods.net
                </p>
              </div>
            </a>

            {/* LOCATION */}
            <div
              className="
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-slate-900/10
                bg-white/75
                p-4
                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
                backdrop-blur-md
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-300/30
                  text-lime-700
                "
              >
                <MapPin className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                  Manchar, Pune, Maharashtra, India
                </p>
              </div>
            </div>

            {/* NEWSLETTER */}
            <form
              onSubmit={handleSubmit}
              className="
                mt-5
                rounded-2xl
                border
                border-slate-900/10
                bg-white/75
                p-2
                shadow-[0_10px_30px_rgba(61,84,43,0.07)]
                backdrop-blur-md
              "
            >
              <div className="flex items-center gap-2">

                <Mail className="ml-3 h-4 w-4 shrink-0 text-slate-500" />

                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-1
                    py-3
                    text-sm
                    text-slate-900
                    outline-none
                    placeholder:text-slate-400
                  "
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-lime-400
                    text-slate-950
                    transition-all
                    duration-300
                    hover:rotate-3
                    hover:bg-lime-300
                    hover:shadow-lg
                    hover:shadow-lime-400/20
                  "
                >
                  <Send className="h-4 w-4" />
                </button>

              </div>
            </form>
          </div>
        </div>

        {/* ==================================================
            COPYRIGHT
        =================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-slate-900/10
            pt-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-xs leading-6 text-slate-600 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-800">
              Urja Foods &amp; Agro Pvt. Ltd.
            </span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-2.5">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-900/10
                  bg-white/70
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-lime-400/50
                  hover:bg-lime-400
                  hover:text-slate-950
                "
              >
                {social.icon}
              </a>
            ))}

            <button
              type="button"
              onClick={handleTop}
              aria-label="Back to top"
              className="
                ml-1
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-slate-900
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-lime-400
                hover:text-slate-950
              "
            >
              <ChevronUp className="h-5 w-5" />
            </button>

          </div>
        </div>
      </div>

      {/* ==================================================
          BOTTOM GREEN LINE
      =================================================== */}

      <div className="h-1 bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400" />
    </footer>
  );
}