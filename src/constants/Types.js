
const TRANSACTION_TYPES = [
  "Start New Coin",
  "Use Existing"
];

const CURRENCY_TYPES = [
  "ETH",
  "USD"
]

const TRANSACTION_METHODS = [
  "Fast",
  "Normal",
  "Slow"
]

const PERIOD = [
  'All',
  'Weekly',
  'Monthly',
  'yearly'
]

const MARK_LIST = [
  {
      value: 0,
      label: '0%',
  },
  {
      value: 25,
      label: '25%',
  },
  {
      value: 50,
      label: '50%',
  },
  {
      value: 75,
      label: '75%',
  },
  {
      value: 100,
      label: '100%',
  },
];

const TAG_LIST = ["Clothing", "Development", "Books", "Venues", "Tutoring"];      


export {
  TRANSACTION_TYPES,
  CURRENCY_TYPES,
  TRANSACTION_METHODS,
  PERIOD,
  MARK_LIST,
  TAG_LIST
}