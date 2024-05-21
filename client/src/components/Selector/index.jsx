import React from 'react';
import AsyncSelect from "react-select/async";


const Selector = ({label, data, setSelected, defValue}) => {
    const options = [];
    data.map(obj => {
        options.push({value: obj.name, label: obj.name});
    });

    const defObj = {value: defValue, label: defValue}

    const colorStyles = {
        control: (styles) => ({...styles,
            backgroundColor: '#232324',
            borderColor: '#363738',
            height: '42px',
            paddingLeft: '4px',
            paddingRight: '4px',
            minWidth: '368px',
            ':hover': {
                borderColor: '#E1E3E6',
            },
        }),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            return {...styles,
                color: '#B0B1B6',
                backgroundColor: '#232324',
                fontSize: '14px',
                fontWeight: '500',
            };
        },
        input: (styles) => ({...styles,
            color: '#B0B1B6',
            fontSize: '14px',
            fontWeight: '500',
        }),
        placeholder: (styles) => ({...styles,
            color: '#B0B1B6',
        }),
        singleValue: (styles) => ({...styles,
            color: '#E1E3E6',
            fontSize: '14px',
            fontWeight: '500',
        }),
        menu: (styles) => ({...styles,
            backgroundColor: '#232324',
        }),
    }

    const handleChange = (selectedOption) => {
        setSelected(selectedOption.value);
    };

    const loadOptions = (searchValue, callback) => {
        setTimeout(() => {
            const filteredOptions = options.filter((option) =>
                option.label.toLowerCase().includes(searchValue.toLowerCase())
            );
            callback(filteredOptions);
        }, 500);
    };

    return (
        <div className='relative'>
            <span className='absolute z-50 start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'>{label}</span>
            <AsyncSelect
                loadOptions={loadOptions}
                onChange={handleChange}
                styles={colorStyles}
                defaultValue={defObj}
            />
        </div>
    );
};

export default Selector;