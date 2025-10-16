import { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'

const { Text } = Typography

interface TimeLeft {
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

const CountdownToDate = () => {
  const targetDate = new Date('2026-05-02T15:00:00')
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({})
  const [expired, setExpired] = useState(false)

  const calculateTimeLeft = () => {
    const now = new Date()
    const target = new Date(targetDate)
    const diffMs = target.getTime() - now.getTime()

    if (diffMs <= 0) {
      setExpired(true)
      return {}
    }

    const totalSeconds = Math.floor(diffMs / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    const totalDays = Math.floor(totalHours / 24)
    const totalWeeks = Math.floor(totalDays / 7)
    const totalMonths = Math.floor(totalDays / 30) // Aproximado

    const months = totalMonths
    const weeks = totalWeeks % 4
    const days = totalDays % 7
    const hours = totalHours % 24
    const minutes = totalMinutes % 60
    const seconds = totalSeconds % 60

    const result: TimeLeft = {}
    if (months > 0) result.months = months
    if (weeks > 0 || months > 0) result.weeks = weeks
    if (days > 0 || weeks > 0 || months > 0) result.days = days
    result.hours = hours
    result.minutes = minutes
    result.seconds = seconds

    return result
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const renderTime = () => {
    const { months, weeks, days, hours, minutes, seconds } = timeLeft

    return (
      <div >
        {months !== undefined && <Text className='tangerine-bold responsive-countdown-text' style={{ color: '#9dadfb' }}>{months} mes{months !== 1 ? 'es' : ''} • </Text>}
        {weeks !== undefined && weeks! > 0 && <Text className='tangerine-bold responsive-countdown-text' style={{ color: '#9dadfb' }}> {weeks} semana{weeks !== 1 ? 's' : ''} • </Text>}
        {days !== undefined && days! > 0 && <Text className='tangerine-bold responsive-countdown-text' style={{ color: '#9dadfb' }}> {days} día{days !== 1 ? 's' : ''} • </Text>}
        <Text className='tangerine-bold responsive-countdown-text' style={{ color: '#9dadfb' }}> {hours}h •</Text>
        <Text className='tangerine-bold responsive-countdown-text' style={{ color: '#9dadfb' }}> {minutes}m •</Text>
        <Text className='tangerine-bold responsive-countdown-text' style={{ color: '#9dadfb' }}> {seconds}s</Text>
      </div>
    )
  }

  return (
    <Row align={'middle'} justify={'center'}>
      <Col span={24} style={{ marginBottom: 160 }}>
        <div style={{ textAlign: 'center' }}>
          {!expired && <Text className='tangerine-bold response-date-title' style={{ textAlign: 'center', color: '#869ed8' }}>Período para el Magnoevento</Text>}
          {expired ?
            <Text className='tangerine-bold responsive-title' style={{ textAlign: 'center', lineHeight: 0.9, color: '#869ed8' }}>¡El evento ha comenzado!</Text> :
            renderTime()}
        </div>
      </Col>
    </Row>
  )
}

export default CountdownToDate