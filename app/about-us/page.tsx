'use client'
import { useRef, useEffect, useState } from 'react';

function MyList() {
    const titles = ["عنوان 1", "عنوان 2", "عنوان 3"];
    const contents = ["محتوای عنوان 1", "محتوای عنوان 2", "محتوای عنوان 3"];

    const myElementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleIntersection = (entries: any) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, options);
        if (myElementRef.current) {
            observer.observe(myElementRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [myElementRef]);

    return (
        <div className='flex h-screen items-center justify-center flex-col'>
            {titles.map((title, index) => (
                <>
                    <div key={index} ref={myElementRef}>
                        <h2>{title}</h2>
                        {isVisible && <p>{contents[index]}</p>}
                    </div>
                    <br /><br /><br /><br />
                    <br /><br /><br /><br />
                </>
            ))}
        </div>
    );
}

export default MyList;
