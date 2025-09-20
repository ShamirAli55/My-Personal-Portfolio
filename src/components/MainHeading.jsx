import React from 'react'

const MainHeading = ({name,span1,span2,mainstyles}) => {
    return (
        <div className={`text-center ${mainstyles}`}>
            <p className="uppercase tracking-widest text-opposite-400 text-sm">
                {name}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
                {span1} {" "}
                <span className="text-transparent gradient-text">{span2}</span>
            </h2>
        </div>
    )
}

export default MainHeading