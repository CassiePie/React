import React from 'react';

function ConvertedAmount(props) {
    return (
        <div>
            Converted Amount: {props.convertedAmount} {props.resultCurrency}
        </div>
    )
}

export default ConvertedAmount;