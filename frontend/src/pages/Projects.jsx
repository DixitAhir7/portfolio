import { useState } from "react";
import projectDetails from "../../projectsdata.json";
import "../styles/pr.css";

export default function Projects() {
    const [bigImage, setImage] = useState(null);
    const [liftPosition, setLiftPosition] = useState(0);

    // Change this to match the exact image path from your JSON
    const liftProjectImage = "/images/Screenshot 2025-09-01 123208.png";

    const isLiftProject = bigImage === liftProjectImage;

    // Helper function for Text-to-Speech
    const speakFloor = (floorName) => {
        if ("speechSynthesis" in window) {
            // Cancel any ongoing speech so messages don't queue up endlessly
            window.speechSynthesis.cancel();

            const textToSpeak = `Reached ${floorName}`;
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.rate = 0.9;
            utterance.pitch = 1;

            window.speechSynthesis.speak(utterance);
        }
    };

    const handleFloorChange = (position, floorName) => {
        // Move the lift instantly
        setLiftPosition(position);

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        // Delay speech by 500ms to align with the lift movement
        setTimeout(() => {
            speakFloor(floorName);
        }, 900);
    };

    const closeModal = () => {
        setImage(null);
        setLiftPosition(0);
        // Stop speech if modal is closed mid-sentence
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    };

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                    Projects
                </h1>
                <p className="mt-2 text-gray-600">
                    Explore my projects and experiments.
                </p>
            </div>

            {/* Projects Slider */}
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
                {projectDetails.map((project, i) => (
                    <div
                        key={project.id || i}
                        className="group min-w-[85%] snap-center cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[45%] lg:min-w-[31%]"
                        onClick={() => {
                            setImage(project.image);
                            setLiftPosition(0);
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.name || "Project"}
                            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                        />

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
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {bigImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={closeModal}
                        className="absolute right-4 top-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-gray-800 shadow-lg transition hover:bg-gray-200"
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {/* Lift Project */}
                    {isLiftProject ? (
                        <div
                            className="flex w-full max-w-lg flex-col items-center gap-6 rounded-xl bg-gray-900 p-6 text-white shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-xl font-bold">Interactive Lift Simulation</h3>

                            {/* Building Container */}
                            <div className="building relative h-[320px] w-[200px] overflow-hidden rounded-lg border-4 border-gray-100 bg-gray-800">
                                {/* Floor Guidelines */}
                                <div className="absolute inset-0 flex flex-col justify-between p-2">
                                    <div className="border-b border-dashed border-gray-600" />
                                    <div className="border-b border-dashed border-gray-600" />
                                    <div className="border-b border-dashed border-gray-600" />
                                </div>

                                {/* Lift Cabin */}
                                <div
                                    className="lift absolute left-1/2 flex h-16 w-20 -translate-x-1/2 items-center justify-center rounded-md bg-blue-500 font-bold shadow-lg transition-all duration-700 ease-in-out"
                                    style={{
                                        bottom: `${liftPosition}px`,
                                    }}
                                >
                                    LIFT
                                </div>
                            </div>

                            {/* Lift Controls */}
                            <div className="flex flex-wrap justify-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => handleFloorChange(0, "Ground Floor")}
                                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${liftPosition === 0
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-800 hover:bg-gray-200"
                                        }`}
                                >
                                    Ground Floor
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleFloorChange(80, "1st Floor")}
                                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${liftPosition === 80
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-800 hover:bg-gray-200"
                                        }`}
                                >
                                    1st Floor
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleFloorChange(160, "2nd Floor")}
                                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${liftPosition === 160
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-800 hover:bg-gray-200"
                                        }`}
                                >
                                    2nd Floor
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleFloorChange(240, "3rd Floor")}
                                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${liftPosition === 240
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-800 hover:bg-gray-200"
                                        }`}
                                >
                                    3rd Floor
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Normal Project */
                        <img
                            src={bigImage}
                            alt="Enlarged project"
                            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </div>
            )}
        </section>
    );
}