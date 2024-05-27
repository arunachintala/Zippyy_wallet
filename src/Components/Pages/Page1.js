
import React, { useState } from 'react';
import './Page1.css';
import RadioButton from '../RadioButtonGroup/RadioButton'
function Page1() {
    const [amount, setAmount] = useState('Enter amount');


    return (
        <div className='Page'>
            <p className='amount'>220$</p>
            <p className='available-balance'>Available Balance</p>
            <p className='add-money'>Add money to wallet</p>
            <p className='enter-amount'>Enter amount</p>
            <div>
                <input
                    className='input-amount'
                    type="text"
                    value={amount}
                    placeholder='Enter amount'
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div className='box'></div>
            <p className='transfer-mode'>Tranfer mode</p>
            <div style={{ position: 'absolute', top: '463px', left: '136px' }}> <RadioButton /></div>

            <hr className='horizontal-line' />
            <div className='large-box'></div>
            <p className='powered-by'>Powered by Stripe</p>
            <button className='pay-button'>Pay</button>
            <hr className='vertical-line' />
            <p className='dollar-sign'>$</p>
        </div>
    );
}

export default Page1;
