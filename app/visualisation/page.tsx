"use client"

import React, { useState, useContext, useEffect } from 'react'
import styles from '@/app/styles.module.css'

import { Bar, } from 'react-chartjs-2'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'
import { ThemeManagementContext } from '@/components/MainWrapper'


ChartJS.register(
   CategoryScale, LinearScale, BarElement, Tooltip, Legend
)

const users = [
   { name: "John", items_delivered: 22, miles_driven: 100 },
   { name: "Jane", items_delivered: 96, miles_driven: 164 },
   { name: "Mary", items_delivered: 40, miles_driven: 106 },
   { name: "Bob", items_delivered: 122, miles_driven: 172 },
   { name: "Alice", items_delivered: 43, miles_driven: 122 },
   { name: "Joe", items_delivered: 74, miles_driven: 110 },
   { name: "Sue", items_delivered: 93, miles_driven: 149 },
]

const Visualization = () => {
   const [isDark, setTheme] = useContext(ThemeManagementContext)
   const [randomNumber, setRandomNumber] = useState<any>()

   useEffect(() => {
      const fetchRandomNumbers = async () => {
         try {
            const response = await fetch(
               'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new'
            );
            const data = await response.text();
            const numbers: number[] = data.trim().split('\n').map(Number);

            const frequencyMap: Record<number, number> = numbers.reduce((map: any, number: any) => {
               map[number] = (map[number] || 0) + 1;
               return map;
            }, {});

            const bar_data: { name: string; frequency_count: number }[] = Object.entries(frequencyMap).map(
               ([name, frequency_count]) => ({
                  name,
                  frequency_count,
               })
            );

            setRandomNumber(bar_data);
            console.log(bar_data);
         } catch (error) {
            console.error('Error fetching random numbers:', error);
         }
      };



      fetchRandomNumbers()
   }, [])

   return (
      <section className={styles.visualisationContainer}>
         <div className={styles.chartBox}>
            <Bar
               options={{ responsive: true, }}
               data={{
                  labels: randomNumber?.map((user: any) => user.name),
                  datasets: [
                     {
                        label: "frequency_count",
                        data: randomNumber?.map((user: any) => user.frequency_count),
                        backgroundColor: "grey",
                        borderRadius: 3,
                        hoverBackgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                     }
                  ],

               }}

            />
         </div>

      </section>
   )
}

export default Visualization