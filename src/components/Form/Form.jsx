import React from 'react';
import StyledForm from './StyledForm';
import Button from '../../ui/Button';
import Input from '../../ui/Input';

const Form = ({ value, handleChange, handleSubmit }) => (
  <StyledForm onSubmit={handleSubmit}>
    <Input 
      type="text"
      onChange={handleChange}
      value={value} 
      placeholder="Wpisz miasto"
    />
    <Button>Wyszukaj miasto</Button>
  </StyledForm>
);

export default Form;
