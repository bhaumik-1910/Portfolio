import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faPhoenixFramework, faSketch } from "@fortawesome/free-brands-svg-icons";

const skills = [
    {
        id: 1,
        skillIcon: <FontAwesomeIcon icon={faLightbulb} className="text-blue-800" />,
        skillName: "Frontend Development"
    },
    {
        id: 2,
        skillIcon: <FontAwesomeIcon icon={faSketch} className="text-red-700" />,
        skillName: "Backend Development"
    },
    {
        id: 3,
        skillIcon: <FontAwesomeIcon icon={faMicrochip} className="text-yellow-500" />,
        skillName: "Adaptive Design"
    },
    {
        id: 4,
        skillIcon: <FontAwesomeIcon icon={faPhoenixFramework} className="text-purple-700" />,
        skillName: "Animation and Interactivity"
    },

]

function About() {

    return (
        <>
            <div className="flex flex-col items-start p-20 max-lg:p-12 max-sm:p-8 max-sm:pt-14 max-sm:pb-14 sm:pt-24">
                <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInLeft">About Us</h1>
                <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInLeft">Who Am I?</h2>
                <div className="text-[15px] leading-relaxed Quicksand_Book font-bold text-gray-700">
                    <h2 className="font-extrabold text-blue-900 text-xl animate__animated animate__fadeInLeft"> Hi, I &#39;m Bhaumik</h2>
                    <p className="animate__animated animate__fadeInUp">
                        <p className="pt-4 animate__animated animate__fadeIn">
                            A passionate web developer with a strong foundation in creating responsive and user-friendly websites.
                        </p>
                        <p className="animate__animated animate__fadeIn">
                            I specialize in front-end development, with experience in HTML, CSS, JavaScript, and popular libraries like React.
                        </p>
                    </p>
                    <p className="animate__animated animate__fadeInUp">
                        I love solving problems and building projects that make a real impact.
                    </p>
                    <p className="animate__animated animate__fadeInUp">
                        Whether working on a personal project or collaborating with a team,
                    </p>
                    <p className="animate__animated animate__fadeInUp">
                        I&#39;m always excited to learn new technologies and improve my skills.
                    </p>
                    <p className="pt-4 animate__animated animate__fadeInUp">
                        Feel free to browse through my work and get in touch if you&#39;d like to collaborate on a project or learn more about my skills!
                    </p>
                </div>

                <div className="grid grid-cols-4 max-2xl:grid-cols-2 max-sm:gap-5 justify-center items-center gap-4 pt-6 animate__animated animate__fadeInUp ">
                    {
                        skills.map((skill) =>
                            <div key={skill?.id} className="flex border-b-2 border-blue-800 max-sm:justify-center items-center">
                                <div className="flex flex-col h-[120px] w-[210px] shadow-xl p-3 max-sm:h-[110px] max-sm:w-[150px] max-sm:p-2 ">
                                    <h1 className="text-3xl">{skill?.skillIcon}</h1>
                                    <h1 className="pt-3 text-nowrap max-sm:text-wrap">{skill?.skillName}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default About