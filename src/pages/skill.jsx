import { Progress } from "@mantine/core"
import { backEnd, frontEnd, other } from "../utils/data.constants"

function Skill() {
    return (
        <>
            <div className="flex flex-col justify-center items-start p-20 max-lg:p-12 max-sm:p-10 max-sm:pt-14">
                <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInUp">
                    My Specialty
                </h1>
                <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInUp">
                    My Skills
                </h2>

                <div className="flex justify-between align-baseline w-[100%]  max-2xl:w-[110%] max-sm:grid max-sm:grid-cols-1 max-sm:p-2">
                    <div className="flex  flex-col pt-10 animate__animated animate__zoomIn">
                        <h1 className="text-xl pb-5 font-bold text-slate-700 w-[200px] lg:text-nowrap max-sm:text-nowrap">Front-End Devlopment </h1>
                        <div className="grid grid-cols-1 gap-y-5">
                            {
                                frontEnd.map((progress) =>
                                    <div key={progress?.id} className="flex flex-col max-lg:w-[70%]">
                                        <h1 className="Quicksand_Book font-bold text-nowrap">{progress?.name}</h1>
                                        <h1> <Progress value={progress?.value} color={progress?.color} /></h1>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex  flex-col pt-10 animate__animated animate__zoomIn">
                        <h1 className="text-xl pb-5 font-bold text-slate-700 w-[200px] lg:text-nowrap max-sm:text-nowrap">Back-End Devlopment </h1>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-5">
                            {
                                backEnd.map((progress) =>
                                    <div key={progress?.id} className="flex flex-col max-lg:w-[70%]">
                                        <h1 className="Quicksand_Book font-bold text-nowrap ">{progress?.name}</h1>
                                        <h1> <Progress value={progress?.value} color={progress?.color} /></h1>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex  flex-col pt-10 animate__animated animate__zoomIn">
                        <h1 className="text-xl pb-5 font-bold text-slate-700 w-[200px] lg:text-nowrap">Other Tools</h1>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-5">
                            {
                                other.map((progress) =>
                                    <div key={progress?.id} className="flex flex-col max-lg:w-[70%]">
                                        <h1 className="Quicksand_Book font-bold text-nowrap">{progress?.name}</h1>
                                        <h1> <Progress value={progress?.value} color={progress?.color} /></h1>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Skill