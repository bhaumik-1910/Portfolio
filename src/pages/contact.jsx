import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Contact() {
    return (
        <>
            <div className="flex flex-col justify-center w-[100%]">
                <div className="flex flex-col justify-center items-start p-20 max-lg:p-20 max-sm:pt-14 max-sm:justify-center max-sm:p-8">
                    <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInUp">
                        Get in Touch
                    </h1>
                    <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInUp">
                        Contact
                    </h2>

                    <h1 className="animate__animated animate__fadeInUp">
                        I’m always on the lookout for exciting opportunities, meaningful collaborations, or simply great conversations. Whether you have a project idea, need help solving a problem, or just want to chat about code, feel free to reach out!
                    </h1>

                    <h2 className="text-xl text-sky-700 pt-6 animate__animated animate__fadeInUp">Drop me a line or say 👋 on social networks</h2>

                    <p className="text-sm text-sky-700 pt-6 animate__animated animate__fadeInUp">+91 93136 29723</p>

                    <div className="flex justify-between w-[15%] items-center max-sm:w-[45%]">
                        <a target="_blank" href="mailto:bhaumikkothiya@gmail.com" className="h-10 w-10 bg-gray-200 flex justify-center items-center mt-5 animate__animated animate__flipInX">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>

                        <a target="_blank" href="https://www.linkedin.com/in/bhaumik-kothiya-28396235a/" className="h-10 w-10 bg-gray-200 flex justify-center items-center mt-5 animate__animated animate__flipInX">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a target="_blank" href="https://github.com/bhaumik-1910" className="h-10 w-10 bg-gray-200 flex justify-center items-center mt-5 animate__animated animate__flipInX">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
