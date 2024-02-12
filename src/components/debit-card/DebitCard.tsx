import {
  Container,
  CardBody,
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
import { useState } from 'react';

export const DebitCard = () => {
  const [cardIndex, setCardIndex] = useState<number | null>(null);

  const handleCardButtonClick = (index: number | null, decrypt = false) => {
    if (index === null) return;

    const bankName = document.getElementById('debit-card-bank-name');
    const cardNo = document.getElementById('debit-card-no');
    const holderName = document.getElementById('debit-card-holder-name');
    const expiryDate = document.getElementById('debit-card-expiry-date');
    const cvv = document.getElementById('debit-card-cvv');

    if (bankName && cardNo && holderName && expiryDate && cvv) {
      bankName.innerHTML = cards[index].bank;
      cardNo.innerHTML = decrypt
        ? (cards[index].number.match(/.{1,4}/g) || []).join(' ')
        : `${cards[index].number.slice(0, 4)} XXXX XXXX XXXX`;
      holderName.innerHTML = decrypt
        ? cards[index].name
        : `${cards[index].name.split(' ', 1)} XXXX`;
      expiryDate.innerHTML = decrypt ? cards[index].expiry : 'XX/XX';
      cvv.innerHTML = decrypt ? cards[index].cvv : 'XXX';
    }
    setCardIndex(index);
  };

  return (
    <Container>
      <div style={{ width: '800px' }}>
        <div data-testid="debit-card">
          <Title>Card Details</Title>
          <br />
          <CardBody
            data-testid="debit-card-body"
            onClick={() => handleCardButtonClick(cardIndex, true)}
          >
            <CardBank
              data-testid="debit-card-bank-name"
              id="debit-card-bank-name"
            >
              Bank Name
            </CardBank>
            <CardNumber data-testid="debit-card-no" id="debit-card-no">
              XXXX XXXX XXXX XXXX
            </CardNumber>
            <br />
            <CardStripe />
            <p>
              <CardHolderName
                data-testid="debit-card-holder-name"
                id="debit-card-holder-name"
              >
                HOLDER NAME
              </CardHolderName>
              <CardDate
                data-testid="debit-card-expiry-date"
                id="debit-card-expiry-date"
              >
                MM/YY
              </CardDate>
              <CardCVV data-testid="debit-card-cvv" id="debit-card-cvv">
                CVV
              </CardCVV>
            </p>
          </CardBody>
        </div>
        <div>
          <Title>Cards List</Title>
          <CardList data-testid="debit-card-list">
            <CardButton
              data-testid="list-card-1"
              onClick={() => handleCardButtonClick(0)}
            >
              <CardButtonText>Card 1</CardButtonText>
            </CardButton>
            <CardButton
              data-testid="list-card-2"
              onClick={() => handleCardButtonClick(1)}
            >
              <CardButtonText>Card 2</CardButtonText>
            </CardButton>
            <CardButton
              data-testid="list-card-3"
              onClick={() => handleCardButtonClick(2)}
            >
              <CardButtonText>Card 3</CardButtonText>
            </CardButton>
            <CardButton
              data-testid="list-card-4"
              onClick={() => handleCardButtonClick(3)}
            >
              <CardButtonText>Card 4</CardButtonText>
            </CardButton>
          </CardList>
        </div>
      </div>
    </Container>
  );
};
