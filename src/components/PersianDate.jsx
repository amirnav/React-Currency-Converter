import jMoment from 'moment-jalali';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Banner.module.css";
import Header from './Header';

const weekDays =  [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه',
]

const yearMonth =  [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
]


const PersianDate = () => {
    const [date , setDate] = useState('')
    const [time , setTime] = useState('')

    useEffect(()=>{
        let m = jMoment()
        let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ماه ${m.jYear()}`
        setDate(finalDate);
        setTime(jMoment().format("HH:mm"))
    } ,[])

    return (
        <header className={styles.banner}>
            <span className='mb-3 d-block text-center' style={{background:"white"}}>{date}</span>
            <span className='d-block text-center' style={{background:"white"}}>ساعت {time}</span>
        </header>
    );
}

export default PersianDate;
