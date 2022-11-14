import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: inherit;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: #61dafb;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 8px;
    color: inherit;
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button[type="submit"] {
    background-color: #61dafb;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    & > div {
      flex: 1;
      height: min-content;
      border-radius: 8px;
      max-width: 320px;
      /* background-color: ${({ theme }) => theme.backgroundLevel2}; */
      background-color: rgba(255,255,255,0.1);
      backdrop-filter: blur(5px);
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 32px;
      padding-top: 40px;
    }
  }
  input, select {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
`;