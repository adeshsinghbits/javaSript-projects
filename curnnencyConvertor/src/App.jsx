import { useState } from 'react'
import CurrencyInputBox from "./components/CurrencyInputBox"
import currencydata from "./data/currencydata"


function App() {

const [amount, setAmount] = useState(0)
const [from, setFrom] = useState("USD")
const [to, setTo] = useState("INR")
const [convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo = currencydata(from)

const options = Object.keys(currencyInfo)

const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
}


return (
    <div
        className="h-screen flex flex-col justify-center items-center bg-gray-400  bg-cover bg-no-repeat"
    >
        <h1 className="text-6xl py-7 font-medium text-white">CURRENCY CONVERTOR</h1>
        <div className="">
            <div className="border border-gray-60 rounded-lg p-5  bg-transparent hover:shadow-2xl">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }} 
                    className='flex flex-wrap justify-center'
                >
                    <div className="w-full mb-1 mx-4">
                        <p className="text-xl py-2 font-semibold">Enter the Amount</p>
                        <CurrencyInputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            
                        />
                    </div>
                    <div className="w-full mt-1 mb-4 mx-4">
                        <p className="text-xl py-2 font-semibold">Converted  Amount</p>
                        <CurrencyInputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <div className="">
                    <button type="submit" className="bg-blue-600 text-white hover:bg-transparent Hover:border-gray-600 hover:outline px-5 py-4 my-2  rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default App