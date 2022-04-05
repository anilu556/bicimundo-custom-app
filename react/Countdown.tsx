import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick, isActive } from './utils/time'

interface CountdownProps {
  isVisible: boolean
  targetDate: string
  text: string
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate, text, isVisible
}) => {


  const [timeRemaining, setTime] = useState<TimeSplit>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  if(!isVisible) {
    return <div className="vtex-flex--countdown-empty"> </div>
  }

  if(isActive(targetDate)) {
    tick(targetDate, setTime)
  }


  return <div className="vtex-flex--countdown-div">
    <div className="vtex-flex--countdown-text">{text}</div>
    <div className="vtex-flex--countdown-time">
      {/* <div className="vtex-flex--countdown-time-days">
        <div className="vtex-flex--countdown-time-number">
          <div className="vtex-flex--countdownDays0">{timeRemaining.days[0]}</div>
          <div className="vtex-flex--countdownDays1">{timeRemaining.days[1]}</div>
        </div>
        <div className="vtex-flex--countdown-time-text">days</div>
      </div> */}
      <div className="vtex-flex--countdown-time-days">
        <div className="vtex-flex--countdown-time-number">
          <span className="vtex-flex--countdownDays0">{`${timeRemaining.days[0]}`}</span>
          <span className="vtex-flex--countdownDays1">{`${timeRemaining.days[1]}`}</span>
          <span className="vtex-flex--countdownSeparator">:</span>
        </div>
        <div className="vtex-flex--countdown-time-name">Días</div>
      </div>
      <div className="vtex-flex--countdown-time-hours">
        <div className="vtex-flex--countdown-time-number">
          <span className="vtex-flex--countdownHours0">{`${timeRemaining.hours[0]}`}</span>
          <span className="vtex-flex--countdownHours1">{`${timeRemaining.hours[1]}`}</span>
          <span className="vtex-flex--countdownSeparator">:</span>
        </div>
        <div className="vtex-flex--countdown-time-name">Horas</div>
      </div>
      <div className="vtex-flex--countdown-time-minutes">
        <div className="vtex-flex--countdown-time-number">
          <span className="vtex-flex--countdownMinutes0">{`${timeRemaining.minutes[0]}`}</span>
          <span className="vtex-flex--countdownMinutes1">{`${timeRemaining.minutes[1]}`}</span>
          <span className="vtex-flex--countdownSeparator">:</span>
        </div>
        <div className="vtex-flex--countdown-time-name">Minutos</div>
      </div>
      <div className="vtex-flex--countdown-time-seconds">
        <div className="vtex-flex--countdown-time-number">
          <span className="vtex-flex--countdownSeconds0">{`${timeRemaining.seconds[0]}`}</span>
          <span className="vtex-flex--countdownSeconds1">{`${timeRemaining.seconds[1]}`}</span>
          <span className="vtex-flex--countdownSeparator" ></span>
        </div>
        <div className="vtex-flex--countdown-time-name">Segundos</div>
      </div>

    </ div>
    {/* <div>
      <span>Horas</span>
      <span>Minutos</span>
      <span>Segundos</span>
    </div> */}
  </div>
}

Countdown.schema = {
  title: 'CountDown',
  description: '',
  type: 'object',
  properties: {
    isVisible: {
      title: 'Is Visible',
      type: 'boolean',
      default: false
    },
    text: {
      title: 'Text of the countdown',
      description: 'Text to be displayed in the countdown',
      type: 'string',
      default: "Termina en:",
    },
    targetDate: {
      title: 'Final date',
      description: 'Final date used in the countdown (YYYY/MM/DD HH:MI:SS)',
      type: 'string',
      default: null,
    },

  },
}

export default Countdown
