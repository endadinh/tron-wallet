import React from 'react';
import Button from '@tronlink/popup/src/components/Button';

import { FormattedMessage } from 'react-intl';
// import { BUTTON_TYPE } from '@tronlink/lib/constants';

import { EXPORT_STAGE } from '@tronlink/lib/constants';


import './mnemonicExport.scss';

const MnemonicExport = props => {
    const {
        mnemonic,
        onSubmit,
        onCancel
    } = props;
    
    return (
        <div className='insetContainer mnemonic'>
            <div className='pageHeader'>
                <div className="back" onClick={ onCancel }></div>
                <FormattedMessage id='EXPORT.ACCOUNT.MNEMONIC_PHRASE' />
            </div>
            <div className='greyModal'>
                <div className='modalDesc'>
                    <FormattedMessage id='MNEMONIC_PHRASE'/>
                </div>
                <div className='wordList'>
                    { mnemonic.split(' ').map((word, index) => (
                        <div className='word' key={ index }>
                            { word.trim() }
                        </div>
                    )) }
                </div>
                <div className='buttonRow'>
                    {/*<Button*/}
                        {/*id='BUTTON.GO_BACK'*/}
                        {/*type={ BUTTON_TYPE.DANGER }*/}
                        {/*onClick={ onCancel }*/}
                        {/*tabIndex={ 2 }*/}
                    {/*/>*/}
                    <Button
                        id='BUTTON.GO_BACK'
                        onClick={ () => onSubmit(EXPORT_STAGE.EXPORT_ACCOUNT) }
                        tabIndex={ 1 }
                    />
                </div>
            </div>
        </div>
    );
};

export default MnemonicExport;
