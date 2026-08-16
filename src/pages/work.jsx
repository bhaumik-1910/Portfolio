
import { useState } from "react"
import Web from "../component/work/web"
import { design } from "../utils/data.constants"

function Work() {
    const [activeTab, setActiveTab] = useState("webDesign")

    return (
        <>
            <div className="flex flex-col justify-center items-start p-20 max-lg:p-20 max-sm:pt-14 max-sm:justify-center max-sm:p-10">
                <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInUp">
                    My Work
                </h1>
                <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInUp">
                    Recent Work
                </h2>

                <div className="flex gap-10 max-sm:gap-3" >
                    {
                        design.map((design) =>
                            <div key={design?.id}>
                                <button onClick={() => { setActiveTab(design.tabName) }}>
                                    <h1 className="animate__animated animate__fadeInUp uppercase Quicksand_Book font-bold text-sky-700 active:text-sky-600 active:underline max-sm:text-nowrap">
                                        {design?.name}
                                    </h1>
                                </button>
                            </div>
                        )
                    }
                </div>
                {
                    activeTab === "webDesign" && <Web />
                }
            </div>
        </>
    )
}

export default Work
