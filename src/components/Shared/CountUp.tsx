import React, { useEffect, useState } from 'react';

interface CountUpProps {
    endValue: number;
    duration?: number;
    startCounting: boolean;
    showNaira: boolean
}

const CountUp: React.FC<CountUpProps> = ({ endValue, duration = 2000, startCounting, showNaira }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (startCounting) {
            let start = 0;
            const increment = endValue / (duration / 10);

            const countUp = () => {
                start += increment;
                if (start < endValue) {
                    setValue(Math.ceil(start));
                    setTimeout(countUp, 50);
                } else {
                    setValue(endValue);
                }
            };

            countUp();
        }
    }, [startCounting, endValue, duration]);

    return <b className='text-[33px] font-semibold'>
        {
            showNaira && ("₦")
        }
        {value.toLocaleString()}
    </b>;
};

export default CountUp;
