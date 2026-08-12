import { useState } from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { CreditCard, ListTodo, X } from "lucide-react";

const technologies = [
    {
        name: "React",
        description: "Building responsive and interactive user interfaces.",
        icon: FaReact,
    },
    {
        name: "Node.js",
        description: "Building backend services and REST APIs.",
        icon: FaNodeJs,
    },
    {
        name: "Express.js",
        description: "Creating REST APIs, middleware and backend logic.",
        icon: SiExpress,
    },
    {
        name: "MongoDB",
        description:
            "Working with NoSQL databases, Mongoose and aggregation pipelines.",
        icon: SiMongodb,
    },
    {
        name: "GitHub",
        description:
            "Managing source code, branches, pull requests and collaboration.",
        icon: FaGithub,
    },
    {
        name: "BullMQ",
        description:
            "Managing background jobs, queues and asynchronous backend tasks.",
        icon: ListTodo,
    },
    {
        name: "Razorpay",
        description:
            "Integrating payments, orders, webhooks and payment workflows.",
        icon: CreditCard,
    },
];

export default function TechStack() {
    const [activeSkill, setActiveSkill] = useState(null);

    const handleSkillClick = (skillName) => {
        setActiveSkill((current) =>
            current === skillName ? null : skillName
        );
    };

    return (
        <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => {
                const Icon = tech.icon;
                const isActive = activeSkill === tech.name;

                return (
                    <div
                        key={tech.name}
                        className="group relative"
                    >
                        <button
                            type="button"
                            onClick={() => handleSkillClick(tech.name)}
                            className="
                                flex items-center gap-2
                                rounded-full border border-gray-200
                                bg-white px-4 py-2
                                text-sm font-medium
                                shadow-sm
                                transition-all duration-200
                                hover:-translate-y-1
                                hover:border-gray-300
                                hover:shadow-md
                            "
                        >
                            <Icon size={18} />

                            <span>{tech.name}</span>
                        </button>

                        <div
                            className={`
                                absolute bottom-full left-1/2 z-50 mb-3
                                w-60 -translate-x-1/2
                                rounded-xl bg-gray-900 px-4 py-3
                                text-center text-xs leading-relaxed text-white
                                shadow-xl
                                transition-all duration-200
                                opacity-0 translate-y-2
                                group-hover:opacity-100
                                group-hover:translate-y-0

                                max-sm:pointer-events-none
                                max-sm:group-hover:opacity-0
                                max-sm:group-hover:translate-y-2
                                ${isActive
                                    ? "max-sm:pointer-events-auto max-sm:opacity-100 max-sm:translate-y-0"
                                    : ""
                                }
                            `}
                        >
                            {tech.description}

                            <div
                                className="
                                    absolute left-1/2 top-full
                                    -translate-x-1/2
                                    border-8 border-transparent
                                    border-t-gray-900
                                "
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}