import React from 'react';

import { FormattedMessage } from 'react-intl';
import { EXPORT_STAGE } from '@tronlink/lib/constants';

const ChoosingType = props => {
    const {
        onSubmit,
        onCancel,
        mnemonic,
        privateKey,
        keyStore
    } = props;

    return (
        <div className='insetContainer choosingType'>
                    <div className='pageHeader'>
                            <div className='back' onClick={ onCancel }>&nbsp;</div>
                            <FormattedMessage id='EXPORT.ACCOUNT'/>
                    </div>
                    <div className='greyModal'>
                           <div className="optionsWrap">
                               {mnemonic ? (
                               <div className="option" onClick={ () => onSubmit(EXPORT_STAGE.MNEMONIC) }>
                                   <div className="txt">    
                                       <div className="span">
                                           <FormattedMessage id="EXPORT.ACCOUNT.MNEMONIC_PHRASE" />
                                       </div>
                                   </div>
                               </div>
                               ) : null}
                               {privateKey ? (
                               <div className="option" onClick={ () =>  onSubmit(EXPORT_STAGE.PRIVATE_KEY) }>
                                   <div className="txt">
                                       <div className="span">
                                           <FormattedMessage id="EXPORT.ACCOUNT.PRIVATE_KEY" />
                                       </div>
                                   </div>
                                </div>
                               ) : null } 
                               {keyStore ? ( 
                               <div className="option" onClick={ () =>  onSubmit(EXPORT_STAGE.KEY_STORE) }>
                                   <div className="txt">
                                       <div className="span">
                                           <FormattedMessage id="EXPORT.ACCOUNT.KEY_STORE" />
                                       </div>
                                   </div>
                                </div>
                               ) : null }
                            </div>
                    </div>
        </div>
    );
};

export default ChoosingType;
