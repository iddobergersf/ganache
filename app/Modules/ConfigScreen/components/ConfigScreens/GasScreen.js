import React, { Component } from 'react'
import TestRPCProvider from 'Data/Providers/TestRPCProvider'
import SettingsProvider from 'Data/Providers/SettingsProvider'

import Styles from '../ConfigScreen.css'

class AccountsScreen extends Component {
  render () {
    return (
      <div>
        <h2>GAS OPTIONS</h2>
        <section>
          <h4>GAS PRICE</h4>
          <div className={Styles.Row}>
            <div className={Styles.RowItem}>
              <input ref="gasPrice" type="text" defaultValue="20000000000" />
            </div>
            <div className={Styles.RowItem}>
              <p>The Gas Price in WEI to use. Default is 20000000000.</p>
            </div>
          </div>
        </section>
        <section>
          <h4>GAS LIMIT</h4>
          <div className={Styles.Row}>
            <div className={Styles.RowItem}>
              <input ref="gasLimit" type="text" defaultValue="4712388" />
            </div>
            <div className={Styles.RowItem}>
              <p>The Gas Limit to use.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SettingsProvider(TestRPCProvider(AccountsScreen))