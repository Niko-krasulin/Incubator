import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</Text>
                    <Name>@ivan ivanov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Slide = styled.div`

  text-align: center;

`
const Text = styled.p`
  max-width: 500px;
  width: 100%;

`

const Name = styled.span`
  display: inline-block;
  margin: 22px 0 32px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    
    & + span {
      margin-left: 5px;
    }
    
    &.active {
      width: 20px;
      background-color: ${theme.colors.accent};
    }
  }

`