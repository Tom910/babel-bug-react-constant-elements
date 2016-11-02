import React, { Component } from 'react';

class Test extends Component {

    render() {
        const {
                paymentId
            } = this.props,
            renderInfo = () => (
                <div>

                    {!isAutoPayment && <TestComponent
                        paymentId={paymentId}
                    />}
                </div>
            );

        return (
            <div>
                {renderInfo()}
            </div>
        );
    }
}
export default Test;
