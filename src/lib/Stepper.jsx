import React, { useState } from 'react';
import styled from 'styled-components';

const StepperStyle = styled.div`
  nav {
    margin: 10px auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      padding: 10px;
      min-width: 100px;
      color: #999;
      border: 1px solid #999;
      border-radius: 6px;
      &:hover {
        border: 1px solid var(--globe-link);
        color: var(--globe-link);
        cursor: pointer;
      }
      &.fade {
        opacity: 0.2;
      }
    }
  }
  section {
    h1 {
      text-align: center;
    }
  }
`;

const Stepper = () => {
  // you can set those to any range
  const [timeline, setTimeline] = useState(2022);
  const min = 2013;
  const max = 2023;

  const clickNav = (direction) => {
    // direction is 'next' or 'prev'
    // console.log(timeline, direction);
    if (direction === 'next') {
      if (timeline >= max) {
        setTimeline(min);
      } else {
        const nextTime = timeline + 1;
        setTimeline(nextTime);
      }
    } else if (timeline < min) {
      setTimeline(max);
    } else {
      const prevTime = timeline - 1;
      setTimeline(prevTime);
    }
  };
  return (
    <StepperStyle>
      <nav>
        <button
          type="button"
          className={timeline === min ? 'prev bentonsanscond-n6 fade' : 'prev bentonsanscond-n6'}
          onClick={() => clickNav('prev')}
        >
          Previous
        </button>
        <button
          type="button"
          className={timeline === max ? 'next bentonsanscond-n6 fade' : 'next bentonsanscond-n6'}
          onClick={() => clickNav('next')}
        >
          Next
        </button>
      </nav>
      <section>
        <h1>{timeline}</h1>
      </section>
    </StepperStyle>
  );
};

export default Stepper;
