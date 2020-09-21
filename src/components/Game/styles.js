import styled from 'styled-components'

export const GameFooter = styled.div`
    display: flex;
    flex-direction: column;
`

export const GameHeader = styled.div`
    display: flex;
    justify-content: space-around;
    width: inherit;
    width: 100%;
`

export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: sans-serif;
    margin-bottom: 20px;

    .score-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.70);
        height: 60px;
    }

    .score{
        font-size: 40px;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
        color: white;
    }

    .player{
        padding-top: 10px;
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
    }
`
export const GameContainer = styled.div`
    max-width: 352px;
    margin: auto;
`

export const ResetButton = styled.button`
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: 1px solid transparent;
    font-size: 18px;
    cursor: pointer;
    
`

export const NextPlayerText = styled.p`
    font-size: 20px;
    font-family: sans-serif;

`