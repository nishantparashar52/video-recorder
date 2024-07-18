import { useState, useEffect } from 'react'
import { useTimeout } from '../hooks/useInterval.ts'
export default function TrafficLight() {

  const light = [{color: 'red', time: 4000},
  {color: 'yellow', time: 1000}, {color: 'green', time: 3000}]

  const [index ,setIndex] = useState(0)

  const cb = () => {
    setIndex(i => {
      if(i === light.length - 1) return 0
      return ++i
    })
    }
  useTimeout(cb,light[index].time)
  return <div style={{backgroundColor: light[index].color}}>Hello</div>
}