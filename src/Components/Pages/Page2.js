
import React, { useState } from 'react';
import info from './info.svg';
import RadioButtonGroup from '../../Components/RadioButtonGroup/ControlledRadioButtonsGroup';
import { Popover } from 'antd';

const content1 = (
    <div style={{ width: '202px', height: '24px' }}>
        <p style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '8px', lineHeight: '12px' }}>Return to origin<span style={{ fontWeight: '400', fontSize: '8px', lineHeight: '12px' }}>charges for undelivered shipments will be billed to Zippyy wallet automatically.</span> </p>
    </div>
);
const content2 = (
    <div style={{ width: '202px', height: '24px' }}>
        <p style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '8px', lineHeight: '12px' }}><span style={{ fontWeight: '400', fontSize: '8px', lineHeight: '12px' }}>Any </span>weight and dimension <span style={{ fontWeight: '400', fontSize: '8px', lineHeight: '12px' }}>discrepancy charges will be billed automatically to Zippyy wallet.</span> </p>
    </div>
);

function Page2() {
    const [amount, setAmount] = useState('Enter amount');
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const selectStyle = {
        fontSize: '14px',
        width: '536px',
        height: '40px',
        border: '1px solid #D9D9D9',
        borderRadius: '6px',
        background: 'white',
        position: 'absolute',
        top: '404px',
        left: '828px'
    };

    return (
        <div>
            <p style={{ position: 'absolute', left: '810px', top: '278px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '18px', lineHeight: '27px', color: '#121114' }}>
                Wallet settings
            </p>
            <div style={{ width: '572px', height: '278px', position: 'absolute', top: '317px', left: '810px', borderRadius: '6px', border: '1px solid #D9D9D9' }}>
            </div>
            <p style={{ position: 'absolute', top: '335px', left: '828px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>
                Wallet auto reload
            </p>
            <p style={{ position: 'absolute', top: '382px', left: '828px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '12px', lineHeight: '18px', color: '#5F5A6B' }}>Transfer mode</p>
            <select
                id="options"
                value={selectedOption}
                onChange={handleChange}
                style={selectStyle}
            >
                <option value="">Bank transfers ( Takes 3-5 days for ACH transfer, Free)</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <p style={{ color: '#5F5A6B', fontFamily: 'Poppins', fontWeight: '400', fontSize: '14px', lineHeight: '21px', position: 'absolute', top: '458px', left: '828px', gap: '4px' }}>Auto </p>
            <div>
                <div>
                    <input
                        style={{
                            backgroundColor: 'white',
                            color: '#D9D9D9',
                            fontFamily: 'Poppins',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '21px',
                            width: '229.01px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #D2D1D6',
                            padding: '6px 12px',
                            position: 'absolute',
                            left: '828px',
                            top: '483px'
                        }}
                        type="text"
                        value={amount}
                        placeholder='Enter amount'
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <p style={{ position: 'absolute', top: '493px', left: '1065px', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: 'Cool Grey 4' }}>$</p>
            </div>
            <p style={{ color: '#5F5A6B', fontFamily: 'Poppins', fontWeight: '400', fontSize: '14px', lineHeight: '21px', position: 'absolute', top: '458px', left: '1114px', gap: '4px', width: '57.32', height: '21px' }}>Auto reload by</p>
            <div>
                <div>
                    <input
                        style={{
                            backgroundColor: 'white',
                            color: '#D9D9D9',
                            fontFamily: 'Poppins',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '21px',
                            width: '229.01px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #D2D1D6',
                            padding: '6px 12px',
                            position: 'absolute',
                            left: '1114px',
                            top: '483px'
                        }}
                        type="text"
                        value={amount}
                        placeholder='Enter amount'
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <p style={{ position: 'absolute', top: '493px', left: '1350.97px', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: 'Cool Grey 4' }}>$</p>
            </div>
            <div style={{ width: '572px', height: '145px', position: 'absolute', top: '619px', left: '810px', border: '1px solid #D9D9D9', borderRadius: '6px' }}></div>
            <p style={{ color: '#121114', position: 'absolute', width: '213px', height: '25px', top: '637px', left: '828px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Additional charge settings</p>
            <div>
                <p style={{ fontFamily: 'Poppins', position: 'absolute', top: '684px', left: '828px', gap: '4px', color: '#5F5A6B', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>RTO charges
                    <Popover content={content1} trigger="click">
                        <img style={{ position: 'absolute', top: '5.6px', left: '107.6px' }} src={info} alt="info icon" />
                    </Popover>
                </p>
            </div>
            <hr style={{ width: '536px', position: 'absolute', top: '670px', left: '828px', border: '1p solid #D9D9D9' }}></hr>
            <p style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#5F5A6B', position: 'absolute', top: '722px', left: '828px', gap: '4px' }}>Dimension and weight discrepancy charges
                <Popover content={content2} trigger="click">
                    <img style={{ position: 'absolute', top: '5.6px', left: '358.6px' }} src={info} alt="info icon" />
                </Popover>
            </p>
            <div style={{ position: 'absolute', top: '684px', left: '1285px' }}><RadioButtonGroup /></div>
        </div>
    );
}

export default Page2;
