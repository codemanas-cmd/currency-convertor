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

  const bgcUrl = 'https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  
  return (
    <>
      <div className='bg-black w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-3xl text-white mb-12'>Currency Converter</h1>
        <div style={{backgroundColor: 'rgba(96, 89, 77, 0.6)'}}className=' flex flex-col justify-center items-center w-full max-w-lg h-full max-h-64 rounded-3xl relative'>
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
            className='my-[-6px] py-1 px-3 text-gray-100 bg-[#A63446] font-semibold rounded-md relative z-20'
            onClick={() => {
              setFrom(to);
              setTo(from);
              setAmount(convertedAmount);
              setConvertedAmount(amount);
            }}
          >
            Swap
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
    </>
  );
}

export default App;
