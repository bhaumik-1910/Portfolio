import { projects } from "../../utils/data.constants";

const Web = () => (
    <div className="flex flex-col justify-center w-[100%]">
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-6 max-2xl:grid-cols-2 max-sm:grid-cols-1 ">
            {projects.map((project) => (
                <a
                    key={project?.id}
                    href={project?.link || "#"}
                >
                    <div className="flex flex-col justify-start items-start p-5 bg-zinc-200 shadow-lg rounded-2xl transition-all hover:scale-105 animate__animated animate__zoomIn max-sm:justify-center">
                        <img
                            src={project.img}
                            alt={project?.name}
                            className="rounded-lg w-full h-48 object-cover"
                        />
                        <h1 className="text-xl font-bold mt-3 group-hover:text-blue-600 text-sky-700">
                            {project.name}
                        </h1>
                        <p className="text-gray-600 mt-1 text-sm">{project.lang}</p>
                        <ul className="mt-2 text-sm text-gray-500">
                            {
                                project.technologies.map((tech, index) => (
                                    <li key={index} className="list-disc ml-4 text-sky-800">
                                        {tech}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </a>
            ))
            }
        </div>
    </div>

)

export default Web;
