import { styled } from "styled-components";

export const selectTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
  },
});

export const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#fff" : "#000",
    backgroundColor: state.isSelected
      ? "#747474"
      : state.isFocused
      ? "#d2f950"
      : "#fff",
  }),
  input: (defaultStyles) => ({
    ...defaultStyles,
    color: "#fff",
  }),
  control: (defaultStyles, state) => ({
    ...defaultStyles,
    backgroundColor: "#202020",
    paddingLeft: "8px",
    border: state.isFocused ? "1px solid #fff" : "1px solid #747474",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #fff",
    },
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#d2f950", // Custom colour
  }),
};

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #202020;
  overflow-y: scroll;
`;

export const TopRow = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 60px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CloseButton = styled.img`
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;

export const LeftCol = styled.div`
  width: min(300px, 30%);
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 40px;

  & p {
    margin-top: 0;
    font-family: "Unbounded", sans-serif;
    font-weight: 300;
    font-size: 3rem;
    color: #fff;

    & b {
      color: #d2f950;
      font-weight: 800;
    }
  }

  @media screen and (max-width: 800px) {
    height: auto;
    width: 100%;
    padding: 0;

    & .nomobile {
      display: none;
    }
  }
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  color: #b0b0b0;
  width: min(750px, 70%);
  height: min(650px, 100%);

  & titleText {
    font-family: "Unbounded", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    padding: 20px 0;
    padding: 2vh 0;
    color: #d2f950;
  }

  & regularText {
    font-weight: 300;
    font-size: 1.1rem;
    padding-bottom: 8px;
    padding-bottom: 0.5vh;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const InputText = styled.input.attrs((props) => ({
  type: props.type ? props.type : "text",
  required: true,
}))`
  width: 100%;
  height: 2.3rem;
  border: 1px solid #747474;
  background-color: #202020;
  color: #fff;
  font-size: 1.1rem;
  font-size: 2.2vh;
  padding-left: 8px;

  &:focus {
    background-color: #fff;
    color: #000;
  }
`;

export const InputLabel = styled.p`
  padding: 0 0 18px 0;
  padding: 0 0 1.2vh 0;
  margin: 0;
  color: #b0b0b0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1rem;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "12px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "12px"};

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justifyf : "space-between"};
  align-items: center;

  span.submit-message {
    padding-left: 12px;
    font-size: 2.5vh;
  }

  &.checkbox {
    padding: 12px 0 20px 0;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
