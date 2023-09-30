import Image from "next/image"
import { InformationsStyle } from "./style"
import line from "@/assets/Line 3.svg"


interface EventDayPropsItem {
    time: String,
    speaker: String,
    description: String
}

interface EventDayProps {
    day: String,
    items: Array<EventDayPropsItem>
}

export default function EventInformations({day, items}: EventDayProps) {
    return (
        <InformationsStyle>
            <section>
                <div>
                    <Image alt="Line" src={line} />

                    <section>
                        <div>
                            <h2>{day}</h2> {
                                items.map((item, index) => (
                                    <div key={index}>
                                        <p id="time">{item.time}</p>
                                        <p><span>{item.description}</span><br />{item.speaker}</p>
                                    </div>
                                ))}
                        </div>
                    </section>
                </div>
            </section>
        </InformationsStyle>
    )
}