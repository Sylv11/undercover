import styled from 'styled-components';

export const Container = styled.div`
    border: 2px rgba(29,29,27,.15) solid;
    box-shadow: inset 0px 1px 0px 0px rgba(255,255,255,.15), 0px 1px 0px 0px rgba(255,255,255,0.15);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Button = styled.button`
    background-color: #FFF;
    margin: 0 0 6px;
    border: 0px;
    box-shadow: 0px 3px 0px 0px #301A6B;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    color: #301A6B;
    text-transform: uppercase;
    padding: 3px 5px;

    &:active {
        box-shadow: 0px 1px 0px 0px #301A6B;
        transform: translateY(3px);
    }

    &:hover {
      background-color: #CBB6E9;
    }
`