import { useRef, useState } from "react";
import projectDetails from "../../projectsdata.json";
import "../styles/pr.css";
import { Link } from "react-router-dom";

export default function Projects() {
    const [bigImage, setImage] = useState(null);
    const [liftPosition, setLiftPosition] = useState(0);

    const sliderRef = useRef(null);

    const liftProjectImage = "/images/Screenshot 2025-09-01 123208.png";

    const isLiftProject = bigImage === liftProjectImage;

    const speakFloor = (floorName) => {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();

            const textToSpeak = `Reached ${floorName}`;
            const utterance = new SpeechSynthesisUtterance(textToSpeak);

            utterance.rate = 0.9;
            utterance.pitch = 1;

            window.speechSynthesis.speak(utterance);
        }
    };

    const handleFloorChange = (position, floorName) => {
        setLiftPosition(position);

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        setTimeout(() => {
            speakFloor(floorName);
        }, 900);
    };

    const closeModal = () => {
        setImage(null);
        setLiftPosition(0);

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    };

    // -----------------------------
    // Slider functions
    // -----------------------------

    const slideNext = () => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: sliderRef.current.clientWidth * 0.85,
            behavior: "smooth",
        });
    };

    const slidePrevious = () => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: -(sliderRef.current.clientWidth * 0.85),
            behavior: "smooth",
        });
    };

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                    Projects
                </h1>

                <p className="mt-2 text-gray-600">
                    Explore my projects
                </p>
            </div>

            <div className="relative">
                <button
                    type="button"
                    onClick={slidePrevious}
                    aria-label="Previous project"
                    className="
                        absolute left-0 top-1/2 z-10
                        hidden -translate-x-1/2 -translate-y-1/2
                        h-11 w-11 items-center justify-center
                        rounded-full bg-white text-2xl
                        shadow-lg transition
                        hover:scale-110 hover:bg-gray-100
                        md:flex
                    "
                >
                    ←
                </button>

                <div
                    ref={sliderRef}
                    className="
                        flex
                        snap-x snap-mandatory
                        gap-6
                        overflow-x-auto
                        scroll-smooth
                        pb-6
                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden
                    "
                >
                    {projectDetails.map((project, i) => (
                        <div
                            key={project.id || i}
                            className="group min-w-full snap-center cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            onClick={() => {
                                setImage(project.image);
                                setLiftPosition(0);
                            }}
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.name || "Project"}
                                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                            )}

                            <div className="p-4">
                                {project.name && (
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        {project.name}
                                    </h2>
                                )}

                                {project.projecttag && (
                                    <p className="mt-1 text-sm text-gray-500">
                                        {project.projecttag}
                                    </p>
                                )}

                                {project.link && (
                                    <Link
                                        to={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            type="button"
                                            className="mt-4 text-2xl font-medium hover:underline"
                                        >
                                            View Project
                                        </button>
                                    </Link>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={slideNext}
                    aria-label="Next project"
                    className="
                        absolute right-0 top-1/2 z-10
                        hidden translate-x-1/2 -translate-y-1/2
                        h-11 w-11 items-center justify-center
                        rounded-full bg-white text-2xl
                        shadow-lg transition
                        hover:scale-110 hover:bg-gray-100
                        md:flex
                    "
                >
                    →
                </button>

            </div>

            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-400 md:hidden">
                <span>←</span>
                <span>Swipe to explore</span>
                <span>→</span>
            </div>

            {bigImage && (
                <div
                    className="
                        fixed inset-0 z-50
                        flex items-center justify-center
                        bg-black/70 p-4
                    "
                    onClick={closeModal}
                >
                    <button
                        type="button"
                        onClick={closeModal}
                        className="
                            absolute right-4 top-4 z-[60]
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            bg-white
                            text-2xl
                            font-bold
                            text-gray-800
                            shadow-lg
                            transition
                            hover:bg-gray-200
                        "
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {isLiftProject ? (
                        <div
                            className="
                                flex w-full max-w-lg
                                flex-col items-center
                                gap-6 rounded-xl
                                bg-gray-900 p-6
                                text-white shadow-2xl
                            "
                            onClick={(e) => e.stopPropagation()}
                        >

                            <h3 className="text-xl font-bold">
                                Interactive Lift Simulation
                            </h3>
                            <div
                                className="
                                    relative h-[320px] w-[200px]
                                    overflow-hidden rounded-lg
                                    border-4 border-gray-100
                                    bg-gray-800
                                "
                            >

                                {/* Floors */}
                                <div className="absolute inset-0 flex flex-col justify-between p-2">
                                    <div className="border-b border-dashed border-gray-600" />
                                    <div className="border-b border-dashed border-gray-600" />
                                    <div className="border-b border-dashed border-gray-600" />
                                </div>

                                {/* Lift */}
                                <div
                                    className="
                                        absolute left-1/2
                                        flex h-16 w-20
                                        -translate-x-1/2
                                        items-center justify-center
                                        rounded-md bg-gray-500
                                        font-bold shadow-lg
                                        transition-all
                                        duration-700
                                        ease-in-out
                                    "
                                    style={{
                                        bottom: `${liftPosition}px`,
                                    }}
                                >
                                    LIFT
                                </div>
                            </div>


                            {/* Floor Controls */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {[
                                    [0, "Ground Floor"],
                                    [80, "1st Floor"],
                                    [160, "2nd Floor"],
                                    [240, "3rd Floor"],
                                ].map(([position, name]) => (
                                    <button
                                        key={name}
                                        type="button"
                                        onClick={() =>
                                            handleFloorChange(position, name)
                                        }
                                        className={`
                                            rounded-lg
                                            px-4 py-2
                                            text-sm font-medium
                                            transition
                                            ${liftPosition === position
                                                ? "bg-gray-600 text-white"
                                                : "bg-white text-gray-800 hover:bg-gray-200"
                                            }
                                        `}
                                    >
                                        {name}
                                    </button>
                                ))}

                            </div>

                        </div>
                    ) : (

                        <img
                            src={bigImage}
                            alt="Enlarged project"
                            className="
                                max-h-[90vh]
                                max-w-[95vw]
                                rounded-xl
                                object-contain
                                shadow-2xl
                            "
                            onClick={(e) => e.stopPropagation()}
                        />

                    )}

                </div>
            )}
        </section>
    );
}