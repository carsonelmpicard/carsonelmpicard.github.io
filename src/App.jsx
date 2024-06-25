import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Sidechain } from '@nprapps/sidechain';

import parse from 'html-react-parser';
import Stepper from './lib/Stepper';
import BarChart from './lib/BarChart';

const GraphicWrapper = styled.div`
  font-family: BentonSansCond, Arial Narrow, Helvetica, Arial, sans-serif;
  margin: 20px auto;
  padding: 20px;
  max-width: 1000px;
  .hed {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin:0 0 0.25rem;
  }
  .chatter {
    font-size: 0.875rem;
    line-height: 1.125rem;
    margin:0 0 0.5rem;
  }
  .footer {
    font-size: 0.75rem;
    line-height: 1;
    padding-bottom: 1rem;
    p {
      margin: 0 0 3px;
    }
  }
  .credit {
    text-transform: uppercase;
    text-align: right;
  }
  @media(min-width: 500px) {
    .footer {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const App = () => {
  useEffect(() => {
    Sidechain.registerGuest();
  }, []);

  return (
    <GraphicWrapper className="custom" id="App">
      <h5 className="hed bentonsanscond-n6">Test Graphic</h5>
      <p className="chatter bentonsanscond-n4">Chatter text goes here Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <section className="container">
        <BarChart /> {/* Render the BarChart component */}
        <p className="bentonsanscond-n4">Content goes here</p>
      </section>

      <div className="footer">
        <p className="source bentonsanscond-n4">SOURCE: Source for this graphic goes here</p>
        <p className="credit bentonsanscond-n4">STAFF NAME/GLOBE STAFF</p>
      </div>
    </GraphicWrapper>
  );
};

export default App;
