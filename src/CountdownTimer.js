import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';
import { Container, Row, Col } from 'react-bootstrap';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center text-center">
        <DateTimeDisplay value={days} type={days === 1 ? 'Día'  : 'Días'} isDanger={days < 1} />
        <DateTimeDisplay value={hours} type={hours === 1 ? 'Hora' : 'Horas'} isDanger={days <  1} />
        <DateTimeDisplay value={minutes} type={minutes === 1 ? 'Min' : 'Mins'} isDanger={days <  1} />
        <DateTimeDisplay value={seconds} type={seconds === 1 ? 'Seg' : 'Segs'} isDanger={days <  1} />
        <Col className="text-center countdown-title" lg="12">Mis dulces 16</Col>
      </Row>
    </Container>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
