export const initialState = {
  value: '',
  err: false,
  weather: {}
};

export const setValue = 'SET_VALUE';
export const setError = 'SET_ERROR';
export const setWeather = 'SET_WEATHER';


export const reducer = (state, action) => {
  switch(action.type) {
    case setValue:
      return {
        ...state,
        value: action.payload
      }
    case setError:
      return {
        ...state,
        err: action.payload.err,
        weather: {
          city: action.payload.city
        }
      }
    case setWeather:
      return {
        ...state,
        weather: action.payload.weather,
        err: action.payload.err
      }
    default:
      return state;
  }
};
