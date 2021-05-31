import React from 'react';
import classes from "./PromiseTest.module.css";

let myPromiseFunction = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x === 0) {
                resolve("OK");
            } else {
                reject("Error");
            }
        }, 1000)
    });
}
const PromiseTest = () => {
    const promiseOKTest = () => {
        myPromiseFunction(0)
            .then((data) => console.log(data))
            .catch((data) => console.log(data));
        console.log('Execution continues without waiting promise...')
    }

    const promiseErrorTest = () => {
        myPromiseFunction(-1)
            .then((data) => console.log(data))
            .catch((data) => console.log(data));
        console.log('Execution continues without waiting promise...')
    }

    const asyncOKTestWait = async () => {
        try {
            const result = await myPromiseFunction(0);
            console.log('Execution waits promise...')
            console.log(result)
        } catch (e) {
            console.log(e)
        }
    }

    const asyncOKTestWaitContinue = () => {
        const f1 = async () => {
            try {
                const result = await myPromiseFunction(0);
                console.log('Execution waits promise...')
                console.log(result)
            } catch (e) {
                console.log(e)
            }
        }
        f1();
        console.log('Execution continues without waiting promise...')
    }

    const asyncErrorTest = async () => {
        try {
            const result = await myPromiseFunction(-1);
            console.log('Execution waits promise...')
            console.log(result)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={classes.container}>
            <button className={classes.asyncButton} onClick={promiseOKTest}>Promise OK Test</button>
            <button className={classes.asyncButton} onClick={promiseErrorTest}>Promise Error Test</button>
            <button className={classes.asyncButton} onClick={asyncOKTestWait}>Async OK Wait Test</button>
            <button className={classes.asyncButton} onClick={asyncOKTestWaitContinue}>Async OK Wait & Continue Test</button>
            <button className={classes.asyncButton} onClick={asyncErrorTest}>Async Error Test</button>
        </div>
    );
};

export default PromiseTest;