"use client"

import React, { useState, useContext } from 'react'
import styles from '@/app/styles.module.css'

import { Bar } from 'react-chartjs-2'

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
   const [isDark, setTheme ] = useContext(ThemeManagementContext)
   console.log(isDark)
   
   return (
      <div>
         <Bar
            data={{
               labels: users.map(user => user.name),
               datasets: [
                  {
                     label: "Items delivered",
                     data: users.map(user => user.items_delivered),
                     backgroundColor: "grey",
                     borderRadius: 3
                  }
               ]
            }}
         />
      </div>
   )
}

export default Visualization