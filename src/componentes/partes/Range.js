

import React, { useState } from 'react';
import styles from './Range.module.css';

function Range() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleMinChange = (event) => {
        const value = Math.min(event.target.value, maxValue - 1);
        setMinValue(value);
    };

    const handleMaxChange = (event) => {
        const value = Math.max(event.target.value, minValue + 1);
        setMaxValue(value);
    };

    return (
        <div className={styles.rangeContainer}>
            <div className={styles.inputsContainer}>
                <input type="number" value={minValue} onChange={(e) => handleMinChange(e)} className={styles.inputNumber} />
                <input type="number" value={maxValue} onChange={(e) => handleMaxChange(e)} className={styles.inputNumber} />
            </div>
            <div className={styles.rangeWrapper}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={minValue}
                    onChange={handleMinChange}
                    className={styles.inputRange}
                />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={maxValue}
                    onChange={handleMaxChange}
                    className={styles.inputRange}
                />
            </div>
        </div>
    );
}

export default Range;
