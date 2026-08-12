import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    ExternalLink,
    FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";

export default function Home() {
    const resumePath = "/resume/dixit_bariya_resume.pdf";

    return (
        <main className="min-h-[calc(100vh-5rem)] bg-white">

            {/* Tech Stack */}
            <div className="border-b border-gray-100">
                <TechStack />
            </div>

            {/* Hero */}
            <section className="relative mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">

                {/* Background decoration */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 blur-3xl sm:h-96 sm:w-96" />

                <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

                    {/* Small intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm"
                    >
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        Available for opportunities
                    </motion.div>

                    {/* Heading */}

                    <div className="flex ml-4">
                        <motion.h1
                            className="text-6xl font-black tracking-tight text-gray-900"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            I&apos;m{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Dixit
                            </span>
                        </motion.h1>

                        {/* Role */}
                        <motion.h2
                            className="mt-3 ml-3 text-2xl font-semibold text-gray-700 sm:text-3xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            mern-Stack Developer
                        </motion.h2>

                    </div>

                    {/* Description */}
                    <motion.p
                        className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                    >
                        I build useful, practical web applications with
                        modern frontend and backend technologies, focusing
                        on creating experiences that actually solve problems.
                    </motion.p>

                    {/* Primary navigation */}
                    <motion.div
                        className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Link
                            to="/projects"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl sm:w-auto"
                        >
                            Explore My Projects

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md sm:w-auto"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    {/* Resume */}
                    <motion.div
                        className="mx-auto mt-10 max-w-xl rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                            {/* Resume info */}
                            <div className="flex items-center gap-3 text-left">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                                    <FileText size={22} />
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-900">
                                        My Resume
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        View my skills & experience
                                    </p>
                                </div>
                            </div>

                            {/* Resume actions */}
                            <div className="flex w-full gap-2 sm:w-auto">

                                <a
                                    href={resumePath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition sm:flex-none"
                                >
                                    <ExternalLink size={16} />
                                    Open
                                </a>

                                <a
                                    href={resumePath}
                                    download="Dixit-Ahir-Resume.pdf"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition sm:flex-none"
                                >
                                    <Download size={16} />
                                    Download
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Scroll to explore
                    </motion.div>

                </div>
            </section>
        </main>
    );
}