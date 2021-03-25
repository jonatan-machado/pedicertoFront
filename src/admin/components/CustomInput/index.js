import React from 'react';
import { InputWrapper } from './styles';

export default function CustomInput({ label, value, handleChange, name, type }) {
  return (
    <InputWrapper>
      <input type={type || 'text'} placeholder="&nbsp;" name={name} value={value} onChange={handleChange} />
      <label>{label}</label>
    </InputWrapper>
  );
}
