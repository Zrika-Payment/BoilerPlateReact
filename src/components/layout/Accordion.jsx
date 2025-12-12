import { useState } from "react"
import { accordionData } from "../../constants/config"
export function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);
    function handleToggle(index) {
        //
        setOpenIndex(openIndex === index ? "null" : index)
    }
    return (
        <div className="w-full max-w-auto mx-auto">
            {
                accordionData.map((Data, index) =>
                    <div key={index} className="border-b border-gray-300">
                        <button className="w-full text-left p-4 flex justify-between items-center" onClick={() => handleToggle(index)} >
                            <span className="font-medium text-lg">{Data.title}
                            </span>
                            <span>{openIndex === index ? "-" : "+"}</span>
                        </button>
                        {
                            openIndex === index && <div className="p-4 text-gray-400">{Data.content}</div>
                        }

                    </div>

                )}

        </div>
    )
}