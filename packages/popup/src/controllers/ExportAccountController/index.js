/**
 * Created by tron on 2019/7/3.
 */
 import React from 'react';

import { PopupAPI } from '@tronlink/lib/api';
import {EXPORT_STAGE } from "@tronlink/lib/constants";

import ChoosingType from './stages/ChoosingType';
import MnemonicExport from './stages/MnemonicExport';
import PrivateKeyExport from './stages/PrivateKeyExport'


class ExportAccountController extends React.Component {
    state = {
        stage: EXPORT_STAGE.EXPORT_ACCOUNT,
        mnemonic:"",
        privateKey:""
    };
    constructor() {
        super();
        this.changeStage = this.changeStage.bind(this);
        this.onExport = this.onExport.bind(this);
    }
    changeStage(newStage) {
        console.log(newStage);
        this.setState({
            stage: newStage
        });
    }
    async onExport() { 
        const {
            mnemonic,
            privateKey
        } = await PopupAPI.exportAccount();
        this.setState({
            mnemonic,
            privateKey,
            // showBackUp: true
        });
    }
    render() {
        this.onExport();
        const {
            stage,
            mnemonic,
            privateKey
        } = this.state;
        // return(
        //     <div>
        //         <h1>hehehe</h1>
        //     </div>
        // )
        switch(stage) {
            case EXPORT_STAGE.EXPORT_ACCOUNT: 
                return (
                    <ChoosingType 
                        mnemonic={mnemonic}
                        privateKey={privateKey}
                        onSubmit={ exportType => this.changeStage(exportType) }
                        onCancel={ () => PopupAPI.resetState()}
                    />
                );
            case EXPORT_STAGE.MNEMONIC: 
                return (
                    <MnemonicExport 
                        mnemonic={mnemonic }
                        onSubmit={ exportType => this.changeStage(exportType) }
                        onCancel={ () => PopupAPI.resetState()}
                    />
                );
            case EXPORT_STAGE.PRIVATE_KEY:
                return ( 
                    <PrivateKeyExport
                        privateKey = {privateKey}
                        onCancel={() => PopupAPI.resetState()}
                        onSubmit={ exportType => this.changeStage(exportType) }
                    />
                )
            default:
                return null;        
        }

    }
 }
 
 export default ExportAccountController;
 