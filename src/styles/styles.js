import styled, { css } from 'styled-components';

const GridContainer = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Grid = styled.div`
  ${props => props.container && GridContainer}
  ${props => props.spacing && css`
    width: calc(100% + ${8 * props.spacing}px);
    margin: ${-4 * props.spacing}px;
  `}
  & > * {
    ${({spacing}) => spacing && css`
      padding: ${4 * spacing}px
    `}
  }
`;

export const GridItem = styled.div`
  margin: 0;
  box-sizing: border-box;

  ${props => props.md && css`
    @media (min-width: 960px) {
      flex-grow: 0;
      max-width: calc(${props.md / 12} * 100%);
      flex-basis: calc(${props.md / 12} * 100%);
    }
  `}

  ${props => props.lg && css`
    @media (min-width: 1280px) {
      flex-grow: 0;
      max-width: calc(${props.lg / 12} * 100%);
      flex-basis: calc(${props.lg / 12} * 100%);
    }
  `}

  
  ${props => props.sm && css`
    flex-grow: 0;
    max-width: calc(${props.sm / 12} * 100%);
    flex-basis: calc(${props.sm / 12} * 100%);
  `}
`;

export const Paper = styled.div`
  padding: 12px;  
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  /* Rounded */
  border-radius: 4px;

  /* Elevation1 */
  box-shadow: 
    0px 2px 1px -1px rgba(0,0,0,.2), 
    0px 1px 1px 0px rgba(0,0,0,.14), 
    0px 1px 3px 0px rgba(0,0,0,.12);
    
  ${props => {
    if (props.elevation !== undefined) {
      if (props.elevation === 0) {
        return css`
          box-shadow: none;
        `
      } else {
        switch (props.elevation) {
          case 1:
            return css`
              box-shadow: 
                0px 2px 1px -1px rgba(0,0,0,.2), 
                0px 1px 1px 0px rgba(0,0,0,.14), 
                0px 1px 3px 0px rgba(0,0,0,.12);
            `;
          case 2:
            return css`
              box-shadow: 
                0px 3px 1px -2px rgba(0,0,0,.2), 
                0px 2px 2px 0px rgba(0,0,0,.14), 
                0px 1px 5px 0px rgba(0,0,0,.12);
            `;
          case 3:
            return css`
              box-shadow: 
                0px 3px 3px -2px rgba(0,0,0,.2), 
                0px 3px 4px 0px rgba(0,0,0,.14), 
                0px 1px 8px 0px rgba(0,0,0,.12);
            `;
        
          default:
            break;
        }
      }
    }
  }}

  ${props => props.hover && css`
    &:hover {
      background-color: rgba(0,0,0, .07);
    }
    & * {
      cursor: pointer !important;
    }
  `}
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background: rgba(0,0,0,0.12);
  ${props => props.middle && css`
    margin-left: 16px;
    margin-right: 16px;
  `}
  ${props => props.vertical && css`
    width: 1px;
    height: 100%;
  `}
  ${props => props.flexItem && css`
    height: auto;
    align-self: stretch;
  `}
`;

export const Button = styled.button`
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
    border-color: #0069d9;
  }
  &:focus {
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
  }
  
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
  background-color: #007bff;
  border-color: #007bff;

  ${props => props.disabled && css`
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
    cursor: not-allowed;
    border-color: transparent;
    &:hover {
      border-color: transparent;
      background-color: rgba(0, 0, 0, 0.12);
    }
  `}

  ${props => props.fullwidth && css`
    width: 100%;
  `}

  ${props => props.danger && css`
    background-color: #dc3545;
    border-color: #dc3545;
    &:hover {
      background-color: #c82333;
      border-color: #bd2130;
    }
    &:active {
      background-color: #bd2130;
      border-color: #b21f2d;
    }
  `}
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 900;
  width: 42px;
  outline: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: #ff1744;
    // transition: all .4s ease-out;
  }
`;

export const FormGroup = styled.div`
  // margin-bottom: 1rem;
  position: relative;
  margin-bottom: 16px;
  & > label {
    display: inline-block;
    // margin-bottom: .5rem;
    
    &:after {
      content: ' :'
    }
    ${props => !props.readonly && css`    
    `}
  }

  & .form-control {
    display: block;
    // width: 100%;
    height: calc(1.5rem + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: all .2s ease-out;

    ${props => !props.readonly && css`    
      &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
      }
    `}

    ${props => props.readonly && css`
      cursor: default;
      border: none;
      padding: 0;
      background: transparent;

      &:focus {
        outline: 0;
      }
    `}

    ${props => props.fullwidth && css`
      width: 100%;
    `}
  }

  & .error {
    border-color: #dc3545;
    &:focus {
      border-color: #dc3545;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(220,53,69,.25);
    }

  }
  
  ${props => props.readonly && css`
    & > label {
      font-size: 1.2rem;
      position: absolute;
      bottom: 65%;
      font-weight: 600;
    }
  `}

  & > small {
    color: #dc3545;
    display: block;
  }
`;

export const Modal = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 0;
  transition: opacity .15s linear;
  
  ${props => !props.show && css`
    display: none;
    opacity: 0;
  `}

  ${props => props.show && css`
    display: block;
    padding-right: 17px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0,0,0, .2);
  `}

  & .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
    transform: translate(0,-50px);
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;
    ${props => props.show && css`
      transform: none;
      @media (min-width: 576px) {
        max-width: 500px;
        margin: 1.75rem auto;
      }
    `}
  }

  & .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0, .2);
    border-radius: .3rem;
    outline: 0;
  }

  & .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);

    & .modal-title {
      margin-bottom: 0%;
      line-height: 1.5;
    }
  }

  & .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }

  & .modal-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: .75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(.3rem - 1px);
    border-bottom-left-radius: calc( .3rem - 1px);
    & > * {
      margin: .25rem;
    }
  }
`;

export const Snackbar = styled.div`
  display: flex;
  z-index: 1200;
  position: fixed;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    top: 25px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }

  & .content {
    opacity: 0;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    padding: 6px 16px;
    flex-grow: 1;
    flex-wrap: wrap;
    font-size: 0.87rem;
    align-items: center;
    line-height: 1.43;
    border-radius: 4px;
    letter-spacing: 0.01071em;
    background-color: #007bff;
    box-shadow: 
    0px 2px 1px -1px rgba(0,0,0,.2), 
    0px 1px 1px 0px rgba(0,0,0,.14), 
    0px 1px 3px 0px rgba(0,0,0,.12);

    @media (min-width: 600px) {
      flex-grow: initial;
      min-width: 288px;
    }
  }

  & .show {
    opacity: 1;
    transform-box: none;
    transition: all .4s ease-out;  
  }

  & .message {
    padding: 8px 0;
    font-size: 1rem;
    color: #fff;
    
  }
`;