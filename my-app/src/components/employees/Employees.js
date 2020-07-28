import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { getApiFromLink } from '../fetch/fetchApi'

const EmployeesBlock = styled.div` 
    width: 100%;
    height: 600px;
    background-color: whitesmoke;
    font-family: 'Oswald', sans-serif; 
`;

const Table = styled.div` 
   display:flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   height: auto;
   font-size: 25px;
  
`;

const ButtonSubmit = styled.button` 
    margin: 10px;
    width: auto;
    height: auto;
    font-size: 20px;
    border-radius: 10px;
    font-family: 'Oswald', sans-serif; 
`;

const InputSumbit = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Oswald', sans-serif; 
`;
const DeleteButton = styled.button`
    width: 50px;
    height: 30px;
    border-radius: 10px;
    font-size: 10px;
    margin-right: 10px;
    font-family: 'Oswald', sans-serif; 
`;
const Employees = () => {
    const [employesList, setEmployesList] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getApiFromLink().then(newData => {
            setEmployesList((newData));
        })

    }, [])

    const onInputChange = (e) => {
        setValue(e.target.value);

    };

    const handleClick = (e) => {
        e.preventDefault();
        setEmployesList([...employesList, value])

    };

    const buttonHandleClick = (e) => {
        e.preventDefault();
    }


    return (
        <EmployeesBlock>
            <Table>
                <ol>
                    {employesList.map((item) =>
                        <li>
                            <DeleteButton
                                onClick={(e) => {
                                    buttonHandleClick(e)
                                    setEmployesList(employesList.filter(index => index !== item))
                                }}
                            >
                                Удалить
                            </DeleteButton>
                            {item}
                        </li>
                    )}
                </ol>
                <form>
                    <InputSumbit
                        type="text"
                        value={value}
                        onChange={(e) => onInputChange(e)}
                    />
                    <ButtonSubmit
                        onClick={(e) => handleClick(e)}
                    >
                        Добавить имя
                    </ButtonSubmit>
                </form>
            </Table>
        </EmployeesBlock>
    );
};

export default Employees;