
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBody = styled.div`
  height: 250px;
  width: 500px;
  border-radius: 10px;
  background-color: darkgoldenrod;
  margin-left: calc(50% - 250px);
  cursor: pointer;
`;

export const CardStripe = styled.div`
  width: 100%;
  height: 45px;
  background-color: black;
`;

export const CardBank = styled.p`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-left: 10px;
  text-align: left;
  padding-top: 20px;
`;

export const CardNumber = styled.p`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 10px;
  text-align: center;
`;


export const CardHolderName = styled.span`
  font-size: 15px;
  color: white;
  margin-left: 20px;
  text-align: left;
`;

export const CardDate = styled.span`
  font-size: 15px;
  color: white;
  margin-left: 100px;
  text-align: center;
`;

export const CardCVV = styled.span`
  font-size: 15px;
  color: white;
  margin-left: 140px;
  text-align: right;
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 30px;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const CardButton = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: skyblue;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const CardButtonText = styled.p`
  font-size: 15px;
  color: white;
  text-align: center;
`;