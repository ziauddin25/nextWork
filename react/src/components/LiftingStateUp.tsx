import { useState } from "react"

function Panel({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section>
            <h2 className="title">{title}</h2>
            {isOpen ? (
                <p className="">{children}</p>
            ):(
                <button className="" onClick={()=> setIsOpen(!isOpen)}>Show</button>
            )}
        </section>
    );
}
export default function LiftingStateUp () {
    return (
        <div className="">
            <h2 className="">Josef, UK.</h2>
            <Panel title='about'>
                 With a population of about 2 million, Almaty is Kazakhstan's largest city.
            </Panel>
            <Panel title="Etymology">
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple".
            </Panel>
        </div>
    )
};