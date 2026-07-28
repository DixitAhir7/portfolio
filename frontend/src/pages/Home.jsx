import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="min-h-[calc(100vh-5rem)]">
            <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-12 sm:px-6 md:flex-row md:gap-16 lg:px-8">

                {/* Profile Image */}
                <motion.div
                    className="w-full max-w-xs sm:max-w-sm md:w-1/2 md:max-w-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src="/images/WhatsApp Image 2025-07-12 at 22.02.01_418d642f.jpg"
                        alt="Dixit Ahir"
                        className="mx-auto aspect-square w-full rounded-2xl object-cover shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                    />
                </motion.div>

                {/* Content */}
                <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">

                    <motion.h1
                        className="text-4xl font-extrabold sm:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        I&apos;m{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Dixit
                        </span>
                    </motion.h1>

                    <motion.h2
                        className="mt-4 text-xl font-medium text-gray-600 sm:text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        A Developer
                    </motion.h2>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Link
                            to="/projects"
                            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-md transition hover:shadow-xl sm:px-8 sm:py-3"
                        >
                            View My Work

                            <ArrowRight
                                size={20}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}