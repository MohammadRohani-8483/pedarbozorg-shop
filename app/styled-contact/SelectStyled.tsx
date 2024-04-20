import Icon from '@/components/Icon'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

type props = {
    options: string[]
    activeOption?: string
    setActiveOption: React.Dispatch<React.SetStateAction<string | undefined>>
    defaultValue: string
    disabled?: boolean
    label: string
}

type SelectInputProps = {
    disabled: boolean
    activeOption: boolean
}

type OptionProps = {
    active: boolean
}

const SelectParent = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 12px;
`

const SelectBox = styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    width:100%;
    justify-content: center;
    align-items: center;
`

const SelectInput = styled.div<SelectInputProps>`
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 12px 10px 8px;
    width:100%;
    height:40px;
    background-color: white;
    border: 1px solid #9ca3af;
    border-radius:8px;
    cursor:${p => p.disabled ? "not-allowed" : "pointer"};
    color:${p => p.activeOption ?
        "#1B1B1B"
        :
        "#9ca3af"
    };
    &:hover{
        border-color:${p => !p.disabled && '#374151'};
    }
`

const SelectOptions = styled.div`
    position: absolute;
    top: 2.75rem;
    left:0;
    right:0;
    background-color: white;
    width:100%;
    border-radius:8px;
    border: 1px solid #d1d5db;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index:10;
    max-height:180px;
    overflow:hidden;
`

const OptionsParent = styled.div`
    width:100%;
    overflow: auto;
`

const Option = styled.div<OptionProps>`
    width:100%;
    padding:4px 16px 4px 16px;
    background-color:${p => p.active ? "#E0F1E9" : "white"};
    color:${p => p.active ? "#3D8361" : "#1B1B1B"};
    &:hover{
        background-color:#E0F1E9;
        color:#3D8361;
    }
`

const SelectStyled = ({ options, activeOption, setActiveOption, defaultValue, disabled, label }: props) => {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: any) => {
        if (!dropdownRef.current?.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);


    const handleOptionsClick = (vlaue: string) => {
        setActiveOption(vlaue)
        setIsOpen(false)
    }

    const toggling = () => !disabled && setIsOpen(!isOpen)

    return (
        <SelectParent>
            <p>{label}</p>
            <SelectBox ref={dropdownRef}>
                <SelectInput
                    onClick={toggling}
                    activeOption={Boolean(activeOption)}
                    disabled={disabled || false}
                >
                    {activeOption || defaultValue}
                    {isOpen ?
                        <Icon nameIcon='arrow-up' size={20} />
                        :
                        <Icon nameIcon='arrow-down' size={20}
                            className={disabled ? 'opacity-50' : ""}
                        />
                    }
                </SelectInput>
                {isOpen &&
                    <SelectOptions>
                        <OptionsParent id='scroll' className='ltr'>
                            {options.map((option, i) => (
                                <Option
                                onClick={() => handleOptionsClick(option)}
                                    active={option === activeOption}
                                    key={i}
                                >
                                    {option}
                                </Option>
                            ))}
                        </OptionsParent>
                    </SelectOptions>
                }
            </SelectBox>
        </SelectParent>
    )
}

export default SelectStyled