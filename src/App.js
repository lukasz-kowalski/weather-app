import React, { useReducer } from 'react';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import { initialState, reducer, setValue, setError, setWeather } from './AppReducer';

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: setValue,
      payload: e.target.value
    });
  };

  const handleCitySubmit = async (e) => {
    e.preventDefault();
  
    const url = `${process.env.REACT_APP_API_URL}?q=${state.value}&${process.env.REACT_APP_API_KEY}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const date = new Date().toLocaleString();
      const { sunrise, sunset } = data.sys;
      const { temp, pressure } = data.main;
      const { speed } = data.wind;
  
      if (response.ok) {
        return dispatch({
          type: setWeather,
          payload: {
            weather: {
              city: state.value,
              date,
              sunrise,
              sunset,
              temp,
              pressure,
              wind: speed
            },
            err: false
          }
        })
      }
  
      throw new Error();
    } catch (err) {
      dispatch({
        type: setError,
        payload: {
          err: true,
          city: state.value
        }
      })
    }
  };

  return (
    <div className="App">
      <Form
        value={state.value}
        handleChange={handleChange}
        handleSubmit={handleCitySubmit}
      />
      {(state.weather.city || state.err) && <Result {...state.weather} err={state.err} />}
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     value: '',
//     date: '',
//     city: '',
//     sunrise: '',
//     sunset: '',
//     temp: '',
//     wind: '',
//     pressure: '',
//     err: false
//   };

//   handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   handleCitySubmit = async (e) => {
//     e.preventDefault();

//     const url = `${process.env.REACT_APP_API_URL}?q=${this.state.value}&${process.env.REACT_APP_API_KEY}&units=metric`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       const date = new Date().toLocaleString();
//       const { sunrise, sunset } = data.sys;
//       const { temp, pressure } = data.main;
//       const { speed } = data.wind;

//       if (response.ok) {
//         return setWeather(prevState => ({

//         }))
//         return this.setState(prevState => ({
//           city: prevState.value,
//           date,
//           sunrise,
//           sunset,
//           temp,
//           pressure,
//           wind: speed,
//           err: false
//         }))
//       }

//       throw new Error();
//     } catch (err) {
//       this.setState(() => ({
//         err: true
//       }));
//     }
//   };

//   render () {
//     return (
//       <div className="App">
//         <Form
//           value={this.state.value}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleCitySubmit}
//         />
//         {(this.state.city || this.state.err) && <Result {...this.state} />}
//       </div>
//     );
//   }
// }


export default App;
