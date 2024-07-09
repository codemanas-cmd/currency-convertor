import React from 'react'
import useId from 'react'


function InputBox({
    label,
    selectCurrency='usd',
    amount,
    isCurrencyDisabled=false,
    isAmountDisabled=false,
    currrencyOptions=[],
    onAmountChange,//function
    onCurrencyChange,//function
    
    className = "",
}) {
   

    return (
        <div className={`bg-[#89d2dc] max-w-sm w-full p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2 flex flex-col">
                <label  className="text-[#2B4162] mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full max-w-[128px] py-1.5 bg-[#C2B2B4] text-center rounded"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={isAmountDisabled}
                    onChange={(e)=>onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-[#2B4162] mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg w-full max-w-[128px] px-1 py-1 bg-[#C5D86D] cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={isCurrencyDisabled}
                    onChange={(e) => onCurrencyChange && onCurrencyChange((e.target.value))}
                    
                >
                        {currrencyOptions.map((currency) =>(

                            <option key={currency}
                                    value={currency}
                            >
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
