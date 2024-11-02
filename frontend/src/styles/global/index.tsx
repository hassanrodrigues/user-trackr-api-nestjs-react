import { createGlobalStyle } from 'styled-components';
import tinycolor from 'tinycolor2';
export default createGlobalStyle`

    :root {
        font-family:${({ theme }) => theme.font.family};
    }
 

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    body {
        display: flex;
		    flex-direction:column;
        height: 100vh;
        overflow-x: hidden ;
        background-color: ${({ theme }) => theme.color.background.default};
		    scroll-behavior: smooth;
    }

    h1, h2, h3, h4, h5, h6, p, span {
        color: ${({ theme }) => theme.color.text.dark};
        font-family:${({ theme }) => theme.font.family};
    }

    ::-webkit-scrollbar {
            scrollbar-width: thin;
            height: 4px;
            width: 4px;
          
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) =>
        tinycolor(theme.color.background.soft).darken(10).toHex8String()};

        border-radius: ${({ theme }) => theme.shape.radius.small};
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.color.scrollbar};
        border-radius: ${({ theme }) => theme.shape.radius.small};
    }


    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid white;
        -webkit-text-fill-color: black !important;
        -webkit-box-shadow: 0 0 0px 1000px #1212120A inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    
    .MuiStepper-root{
        width: 100% !important;
    }
    .MuiStepLabel-label{
        font-size: 20px !important;
        font-weight: bold !important;
    }

    .rdrDayToday .rdrDayNumber span:after{
    bottom: 0;
    }

    .rd3t-link {
      stroke: #000000;
      stroke-width: 1px;
      stroke-dasharray: 5, 5;
} 

  .react-panzoom__in{
    overflow: initial !important;
    pointer-events: visible !important;
  }
  
  
`;
