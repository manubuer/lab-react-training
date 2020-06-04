import React from 'react';
import 'bulma/css/bulma.css';
import IdCard from './Components/IdCard';
import Greeting from './Components/Greeting';
import Random from './Components/Random';
import List from './Components/List';
import Movie from './Components/Movie';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';

function App() {
  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column">
            <IdCard
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Marx_color.jpg/170px-Marx_color.jpg"
              firstName="Karl"
              lastName="Marx"
              gender="male"
              height="234"
              birth={new Date('1992-07-14').toLocaleString()}
            ></IdCard>
          </div>

          <div className="column">
            <IdCard
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Marx_color.jpg/170px-Marx_color.jpg"
              firstName="Karl"
              lastName="Marx"
              gender="male"
              height="234"
              birth={new Date('1992-07-14').toLocaleString()}
            ></IdCard>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="columns">
          <Greeting lang="de">Franz</Greeting>
          <Greeting lang="it">Manu</Greeting>
          <Greeting lang="es">Renata</Greeting>
          <Greeting lang="en">Jordan</Greeting>
        </div>
      </div>
      <div className="section">
        <div className="columns">
          <Random min={3} max={2323}></Random>
        </div>
      </div>
      <div className="section">
        <div className="columns">
          <div className="card">
            <List></List>
            <Movie></Movie>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="columns">
          <div className="card">
            <BoxColor r="200" g="12" b="234"></BoxColor>
            <BoxColor r="23" g="234" b="23"></BoxColor>
          </div>
        </div>
      </div>

      <div id="credits" className="section">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
      </div>
    </div>
  );
}

export default App;
