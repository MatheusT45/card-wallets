import App from './App';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import cards from './cards.json';
import '@testing-library/jest-dom/extend-expect';

const renderApp = () => render(<App />);

const TEST_IDS = {
  DEBIT_CARD: 'debit-card',
  DEBIT_CARD_BODY: 'debit-card-body',
  DEBIT_CARD_BANK_NAME: 'debit-card-bank-name',
  DEBIT_CARD_NO: 'debit-card-no',
  DEBIT_CARD_HOLDER_NAME: 'debit-card-holder-name',
  DEBIT_CARD_EXPIRY_DATE: 'debit-card-expiry-date',
  DEBIT_CARD_CVV: 'debit-card-cvv',
  DEBIT_CARD_LIST: 'debit-card-list',
  LIST_CARD: 'list-card-',
};

afterEach(() => {
  cleanup();
});

it('Test initial rendering of the app', () => {
  renderApp();
  let cardList = screen.getByTestId(TEST_IDS.DEBIT_CARD_LIST);

  expect(cardList.childNodes.length).toBe(cards.length);
});

it('Test masking of the data initially on the card', () => {
  renderApp();
  let card = screen.getByTestId(TEST_IDS.LIST_CARD + '0');
  fireEvent.click(card);
  let cardNo = screen.getByTestId(TEST_IDS.DEBIT_CARD_NO);
  expect(cardNo.textContent).toBe('4111 XXXX XXXX XXXX');
  let cardName = screen.getByTestId(TEST_IDS.DEBIT_CARD_HOLDER_NAME);
  expect(cardName.textContent).toBe('XXXX XXXX');
  let cardExpiry = screen.getByTestId(TEST_IDS.DEBIT_CARD_EXPIRY_DATE);
  expect(cardExpiry.textContent).toBe('XX/XX');
  let cardCvv = screen.getByTestId(TEST_IDS.DEBIT_CARD_CVV);
  expect(cardCvv.textContent).toBe('XXX');
  let cardBank = screen.getByTestId(TEST_IDS.DEBIT_CARD_BANK_NAME);
  expect(cardBank.textContent).toBe('Bank of HackerLand');
});

it('Test Masking an Unmasking of the data on click', () => {
  renderApp();
  let card = screen.getByTestId(TEST_IDS.LIST_CARD + '3');
  fireEvent.click(card);
  let cardNo = screen.getByTestId(TEST_IDS.DEBIT_CARD_NO);
  expect(cardNo.textContent).toBe('3782 XXXX XXXX XXXX');
  let cardName = screen.getByTestId(TEST_IDS.DEBIT_CARD_HOLDER_NAME);
  expect(cardName.textContent).toBe('XXXX XXXX');
  let cardExpiry = screen.getByTestId(TEST_IDS.DEBIT_CARD_EXPIRY_DATE);
  expect(cardExpiry.textContent).toBe('XX/XX');
  let cardCvv = screen.getByTestId(TEST_IDS.DEBIT_CARD_CVV);
  expect(cardCvv.textContent).toBe('XXX');

  fireEvent.click(cardNo);
  expect(cardNo.textContent).toBe('3782 8224 6310 0055');
  expect(cardName.textContent).toBe('CHARLIE BROWN');
  expect(cardExpiry.textContent).toBe('07/30');
  expect(cardCvv.textContent).toBe('874');
});

it('Test through masking and unmasking cycle of card', () => {
  renderApp();
  let card = screen.getByTestId(TEST_IDS.LIST_CARD + '4');
  fireEvent.click(card);
  let cardNo = screen.getByTestId(TEST_IDS.DEBIT_CARD_NO);
  expect(cardNo.textContent).toBe('6011 XXXX XXXX XXXX');
  let cardName = screen.getByTestId(TEST_IDS.DEBIT_CARD_HOLDER_NAME);
  expect(cardName.textContent).toBe('XXXX XXXX');
  let cardExpiry = screen.getByTestId(TEST_IDS.DEBIT_CARD_EXPIRY_DATE);
  expect(cardExpiry.textContent).toBe('XX/XX');
  let cardCvv = screen.getByTestId(TEST_IDS.DEBIT_CARD_CVV);
  expect(cardCvv.textContent).toBe('XXX');

  fireEvent.click(cardNo);

  expect(cardNo.textContent).toBe('6011 1111 1111 1117');
  expect(cardName.textContent).toBe('DAKOTA JAMES');
  expect(cardExpiry.textContent).toBe('03/21');
  expect(cardCvv.textContent).toBe('876');

  fireEvent.click(cardNo);

  expect(cardNo.textContent).toBe('6011 XXXX XXXX XXXX');
  expect(cardName.textContent).toBe('XXXX XXXX');
  expect(cardExpiry.textContent).toBe('XX/XX');
  expect(cardCvv.textContent).toBe('XXX');
});
