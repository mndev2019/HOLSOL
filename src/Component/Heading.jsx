import React from 'react'

const Heading = ({title}) => {
    return (
        <>
            <div className="d-flex justify-center items-center">
                <h6 className="text-black font-[700] text-xl text-center inline-block border-b border-black pb-1 heading relative">
                   {title}
                </h6>
            </div>
        </>
    )
}

export default Heading
