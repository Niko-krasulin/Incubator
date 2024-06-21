import React from 'react';
import styled from "styled-components";
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from "../../../components/Button";
import {FlexWrapper} from '../../../components/FlexWrapper'
import { Container } from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
            <FlexWrapper direction={'column'}>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Fields placeholder={'name'}/>
                    <Fields placeholder={'subject'}/>
                    <Fields placeholder={'message'} as={'textarea'}/>
                    <Button>Send message</Button>
                </StyledForm>
            </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
   
`

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }  
`


const Fields = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  
  &:focus-visible {
    outline: 1px solid  ${theme.colors.borderColor};
  }
  
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};
  
  &::placeholder {
    color: ${theme.colors.placeHolderColor};
    text-transform: capitalize;
    
    
  }
 
  
`
