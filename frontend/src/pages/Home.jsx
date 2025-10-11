import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <>
            <section className="flex flex-row items-center">
                <img src="public/images/WhatsApp Image 2025-07-12 at 22.02.01_418d642f.jpg" alt="adminimg" className="w-100 h-100 object-cover hover:scale-105 hover:brightness-110 transition-transform duration-300 ease-in-out" />
                <motion.h2
                    className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    I’m <span className="text-orange-500">dixit</span>
                </motion.h2>

                <motion.h2
                    className="text-2xl mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    A developer
                </motion.h2>
            </section>
            <motion.a
                href="/projects"
                className="group mt-4 inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                View My Work
                <motion.span
                    className="inline-block"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    whileHover={{ x: 5 }}
                >
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.span>
            </motion.a>
        </>
    );
}