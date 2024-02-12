import {
  Container,
  Card,
  CardBank,
  CardNumber,
  CardStripe,
  CardHolderName,
  CardDate,
  CardCVV,
  Title,
  CardList,
  CardButton,
  CardButtonText,
} from './style';
import cards from '../../cards.json';

export const DebitCard = () => {
  return (
    <Container>
      <div style={{ width: '1000px' }}>
        <div data-testid="debit-card">
          <Title>Card Details</Title>
          <br />
          <Card data-testid="debit-card-body">
            <CardBank data-testid="debit-card-bank-name">Bank Name</CardBank>
            <CardNumber data-testid="debit-card-no">
              XXXX XXXX XXXX XXXX
            </CardNumber>
            <br />
            <CardStripe />
            <p>
              <CardHolderName data-testid="debit-card-holder-name">
                HOLDER NAME
              </CardHolderName>
              <CardDate data-testid="debit-card-expiry-date">MM/YY</CardDate>
              <CardCVV data-testid="debit-card-cvv">CVV</CardCVV>
            </p>
          </Card>
        </div>
        <div>
          <Title>Cards List</Title>
          <CardList data-testid="debit-card-list">
            <CardButton data-testid="list-card-0">
              <CardButtonText>Card 1</CardButtonText>
            </CardButton>
            <CardButton data-testid="list-card-2">
              <CardButtonText>Card 2</CardButtonText>
            </CardButton>
            <CardButton data-testid="list-card-3">
              <CardButtonText>Card 3</CardButtonText>
            </CardButton>
            <CardButton data-testid="list-card-4">
              <CardButtonText>Card 4</CardButtonText>
            </CardButton>
          </CardList>
        </div>
      </div>
    </Container>
  );
};
