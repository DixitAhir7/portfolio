import { useState } from 'react';
import Select from 'react-select';
import projectDetails from '../../projectsdata.json';

export default function Projects() {

    const options = [
        { value: 'miniProjects', label: 'miniProjects' },
        { value: 'all', label: 'all' },
    ]

    const [sort, setSort] = useState('');
    const [bigImage, setImage] = useState('');
    const [search, setSearch] = useState('');

    const handleChange = (option) => {
        setSort(option);
    };

    const filteredProjects =
        sort === "all"
            ? projectDetails
            : projectDetails.filter((project) => project.projecttag === sort.value);

    return (
        <section className="mt-5">
            <div className="flex items-center mb-6">
                <h3 className="text-5xl">Projects</h3>
            </div>

            <div className="search">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="search"
                    name="projectsearch"
                    placeholder='search in projects'
                    className='border rounded-xl w-full placeholder:pl-2' />
            </div>

            <div>
                {filteredProjects.map((project, i) => (
                    <div key={i} className="grid grid-cols-2 gap-4 mt-5">
                        {console.log(project)}
                        <img
                            className="w-full shadow-md hover:scale-105 transition"
                            src={project.image}
                            alt="swiggyClone"
                            onClick={() => setImage(project.image)}
                        />
                    </div>
                ))}

                {bigImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                        onClick={() => setImage(null)}
                    >
                        <img
                            src={bigImage}
                            alt="enlarged"
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
                        />
                    </div>
                )}

            </div>
        </section>
    );
};