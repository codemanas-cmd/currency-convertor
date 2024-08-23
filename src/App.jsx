import { useEffect, useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const conversionInfoFrom = useCurrencyInfo(from);
  const options = Object.keys(conversionInfoFrom);

  useEffect(() => {
    if (conversionInfoFrom && conversionInfoFrom[to]) {
      setConvertedAmount((conversionInfoFrom[to] * amount).toFixed(4));
    }
  }, [amount, from, to, conversionInfoFrom]);

  return (
    <div className='bg-gray-100 w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-3xl text-gray-800 mb-12'>Currency Converter</h1>
      <div className='bg-white shadow-lg flex flex-col justify-center items-center w-full max-w-lg h-full max-h-64 rounded-3xl p-6'>
        <InputBox 
          label='From'
          selectCurrency={from}
          className='relative z-10'
          amount={amount}
          currrencyOptions={options}
          onAmountChange={(newAmount) => {
            if (newAmount >= 0) {
              setAmount(newAmount);
            }
          }}
          onCurrencyChange={(newCurrency) => {
            setFrom(newCurrency);
          }}
        />
        
        <button
          className='my-[-6px] py-1 px-3 text-white bg-blue-500 font-semibold rounded-md relative z-20'
          onClick={() => {
            setFrom(to);
            setTo(from);
            setAmount(convertedAmount);
            setConvertedAmount(amount);
          }}
        >
          🔄
        </button>
        
        <InputBox 
          label='To'
          selectCurrency={to}
          className='relative z-10'
          amount={convertedAmount}
          currrencyOptions={options}
          isAmountDisabled={true}
          onCurrencyChange={(newCurrency) => {
            setTo(newCurrency);
          }}
        />
      </div>
    </div>
  );
}

export default App;
