'use client'

import { type } from 'os';
import React, { useState } from 'react';
import Select from 'react-select';
import { Lora } from '../fonts';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
type props = {
    placeholder: String
    options: {
        label: string,
        value: number
    }[];
    
}
export const StatusSelect:React.FC<props> = ({options, placeholder}) => {
    const [selectedOption, setSelectedOption] = useState(null)
    return(
        <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={(value)=> setSelectedOption(value?.value as any)}
          options={options}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'rgba(200, 200, 201, 0.13)' : 'rgba(200, 200, 201, 0.13)',
              backgroundColor: 'rgba(200, 200, 201, 0.13)',
              borderRadius: '8px',
              height: '60px',
              fontFamily: `${Lora.className}`,
              color: '#000000',
              paddingLeft: '.7rem',
              outlineColor: state.isFocused ? 'rgba(200, 200, 201, 0.13)' : 'rgba(200, 200, 201, 0.13)'
            }),
          }}
          placeholder={placeholder}
        />
      </div>
    )
}