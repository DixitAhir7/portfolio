import { useState } from 'react';
import Select from 'react-select';
import projectDetails from '../../projectsdata.json';
import '../styles/pr.css'

export default function Projects() {

    const options = [
        { value: 'miniProjects', label: 'miniProjects' },
        { value: 'all', label: 'all' },
    ]

    const [sort, setSort] = useState('');
    const [bigImage, setImage] = useState('');
    const [search, setSearch] = useState('');

    const handleChange = (e, option) => {
        setSearch(e.target.value)
        setSort(option);
    };

    const filteredProjects =
        sort === "all"
            ? projectDetails
            : projectDetails.filter((project) => project.projecttag === sort.value);

    const [liftPosition, setLiftPosition] = useState(0);

    const moveLift = (position) => {
        setLiftPosition(position);
    };

    return (
        <section className="mt-5">
            <div className="flex items-center mb-6">
                <h3 className="text-5xl">Projects</h3>
            </div>

            <div className="search">
                <input
                    onChange={(e) => handleChange(e.target.value, search)}
                    value={search}
                    type="search"
                    name="projectsearch"
                    placeholder='search in projects'
                    className='border rounded-xl w-full placeholder:pl-2' />
            </div>

            <div>
                {filteredProjects.map((project, i) => (
                    <div key={i} className="grid grid-cols-2 gap-4 mt-5">
                        <img
                            className="w-full shadow-md hover:scale-105 transition"
                            src={project.image}
                            alt="swiggyClone"
                            onClick={() => setImage(project.image)}
                        />
                    </div>
                ))}


                {bigImage && (
                    bigImage.startsWith("/images/Screenshot 2025-09-01 123208.png") ? (
                        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
                            <span onClick={() => setImage(null)}>x</span>
                            <div className="building">
                                <div
                                    className="lift"
                                    style={{ bottom: `${liftPosition}px` }}
                                />
                            </div>

                            <div className="controls">
                                <button onClick={() => setLiftPosition(0)}>
                                    Ground Floor
                                </button>

                                <button onClick={() => setLiftPosition(100)}>
                                    1st Floor
                                </button>

                                <button onClick={() => setLiftPosition(200)}>
                                    2nd Floor
                                </button>

                                <button onClick={() => setLiftPosition(300)}>
                                    3rd Floor
                                </button>
                            </div>

                        </div>
                    ) : (
                        <div
                            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                            onClick={() => setImage(null)}
                        >
                            <img
                                src={bigImage}
                                alt="enlarged"
                                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    )
                )}
            </div>
        </section>
    );
};