import { useState, useEffect } from 'react';

export const useTimer = (inputSec: number, setInputSec: (sec: number) => void, endTimer?: (par: boolean) => void) => {
    useEffect(() => {
        setSecond(inputSec % 60)
        setMinute(Math.floor(inputSec / 60))
    }, [inputSec])
    
    const [second, setSecond] = useState(inputSec % 60)
    const [minute, setMinute] = useState(Math.floor(inputSec / 60))
    const [finalMinute, setFinalMinute] = useState('')
    const [finalSec, setFinalSec] = useState('')

    useEffect(() => {
        const interval = (inputSec) &&
            setInterval(() => {
                // if (second) {
                //     setSecond(prev => prev - 1)
                // } else {
                //     setSecond(59)
                //     setMinute(prev => prev - 1)
                // }
                setInputSec(inputSec - 1)
            }, 1000);

        !(second || minute) && endTimer && endTimer(true)

        return () => {
            clearInterval(interval)
        }
    }, [minute, second])

    useEffect(() => {
        second < 10 ? setFinalSec(`0${second}`) : setFinalSec(`${second}`)
    }, [second])
    useEffect(() => {
        minute < 10 ? setFinalMinute(`0${minute}`) : setFinalMinute(`${minute}`)
    }, [minute])


    return { finalMinute, finalSec }
}