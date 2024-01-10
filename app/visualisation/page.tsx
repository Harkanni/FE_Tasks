import React from 'react'
import styles from '@/app/styles.module.css'

import { Bar } from 'react-chartjs-2'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'


ChartJS.register(
   CategoryScale, LinearScale, BarElement, Tooltip, Legend
)

const Visualization = () => {
   return (
      <div>Visualization</div>
   )
}

export default Visualization