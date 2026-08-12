import {
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    MapPin,
    MessageSquareText,
    Phone,
} from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "dixitahir0050@gmail.com",
        href: "mailto:dixitahir0050@gmail.com",
        actionLabel: "Send email",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 8866555078",
        href: "tel:+918866555078",
        actionLabel: "Call now",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "ahemdabad",
        href: "https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0201581,72.4149301,11z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.0225237!4d72.5712864!16zL20vMDFkODhj?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D",
        actionLabel: "View map",
    },
];

export default function Contact() {
    return (
        <section className="relative overflow-hidden py-8 sm:py-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%)]" />

            <div className="mx-auto max-w-6xl">
                <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] backdrop-blur-sm sm:p-8 lg:p-10">
                    <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700">
                                <MessageSquareText size={16} />
                                Let&apos;s connect
                            </div>

                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                                I&apos;m available for full-time opportunities.
                                Whether you need a clean frontend, a robust web app, or a thoughtful UI refresh,
                                I&apos;d love to hear about it.
                            </p>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="mailto:dixitahir0050@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                                >
                                    Say hello
                                    <ArrowRight size={18} />
                                </a>

                                <a
                                    href="tel:+918866555078"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                                >
                                    Call me
                                </a>
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {contactMethods.map(({ icon: Icon, label, value, href, actionLabel }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 group-hover:text-orange-600">
                                                <Icon size={18} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-slate-500">{label}</p>
                                                <p className="mt-1 truncate text-sm font-semibold text-slate-900 sm:text-base">
                                                    {value}
                                                </p>
                                                <p className="mt-2 text-xs font-medium text-slate-500 group-hover:text-slate-700">
                                                    {actionLabel}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.8)] sm:p-8">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="mt-2 text-2xl font-bold">Open for work</h2>
                                </div>
                                <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                            </div>

                            <div className="mt-8 space-y-5">
                                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
                                    <p className="text-sm text-slate-400">Response time</p>
                                    <p className="mt-1 text-lg font-semibold">Usually within 24 hours</p>
                                </div>

                                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
                                    <p className="text-sm text-slate-400">Social</p>
                                    <div className="mt-3 flex items-center gap-3">
                                        github
                                        <a
                                            href="https://github.com/DixitAhir7"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
                                            aria-label="GitHub"
                                        >
                                            <Github size={18} />
                                        </a>
                                        linkedin
                                        <a
                                            href="https://www.linkedin.com/in/dixit-bariya-62a2a4304/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}