import React from 'react';
import Button from '@tronlink/popup/src/components/Button';

import { FormattedMessage } from 'react-intl';
// import { BUTTON_TYPE } from '@tronlink/lib/constants';

import { EXPORT_STAGE } from '@tronlink/lib/constants';


import './PrivateKeyExport.scss';

const PrivateKeyExport = props => {
    const {
        privateKey,
        onSubmit,
        onCancel
    } = props;
    
    return (
        <div className='insetContainer mnemonic'>
            <div className='pageHeader'>
                <div className="back" onClick={ onCancel }></div>
                <FormattedMessage id='EXPORT.ACCOUNT.PRIVATE_KEY' />
            </div>
            <div className='popUp'>
                <div className='backUp'>
                        <div className='title'>
                            <FormattedMessage id='ACCOUNTS.EXPORT' />

                        </div>
                        <div className='option' style={{marginBottom:20}}>
                            <FormattedMessage id='ACCOUNTS.EXPORT.PRIVATE_KEY' />
                            <div className='block'>
                                { privateKey }
                            </div>
                        </div>
                        <div className='buttonRow'>
                        <Button
                            id='BUTTON.CLOSE'
                            onClick={ () => onSubmit(EXPORT_STAGE.EXPORT_ACCOUNT) }
                            tabIndex={ 1 }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateKeyExport;
