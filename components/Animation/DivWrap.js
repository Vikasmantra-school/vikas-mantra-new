import SplitType from 'split-type'
import React, { useEffect } from 'react'


const DivWrap = () => {
    useEffect(() => {
        // Split text into lines
        const text = new SplitType('.AnimeStarts', { types: 'lines' })

        //store splitted lines in const line
        const line = text.lines

        line.forEach(eachDiv)

        //create a func that add a class to every splitted div
        function eachDiv(elem) {
            elem.classList.add('AnimeElement')
        }

    }, [])


    return (
        <>
        </>
    )
}

export default DivWrap