import React, { useRef, useState } from 'react';

import { Account } from '../../viewmodels/account/Account';
import { Confirm } from '../views/Confirm';
import MainPanel from './MainPanel';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { formatAddress } from '../../utils/formatter';
import i18n from '../../i18n';
import { observer } from 'mobx-react-lite';
import rootStyles from '../styles';

export default observer(() => {
  const { t } = i18n;
  const swiper = useRef<Swiper>(null);
  const [type, setType] = useState('');
  const [account, setAccount] = useState<Account>();

  const onRemoveAccount = (account: Account) => {
    setType('remove');
    setAccount(account);
    setTimeout(() => swiper.current?.scrollTo(1), 0);
  };

  const removeAccount = () => {};

  const cancelRemoveAccount = () => {
    swiper.current?.scrollBy(-1);
    setTimeout(() => setType(''), 500);
  };

  return (
    <SafeAreaProvider style={rootStyles.safeArea}>
      <Swiper
        ref={swiper}
        showsPagination={false}
        showsButtons={false}
        scrollEnabled={false}
        loop={false}
        automaticallyAdjustContentInsets
      >
        <MainPanel onRemoveAccount={onRemoveAccount} />
        {type === 'remove' && (
          <Confirm
            buttonText={t('button-confirm')}
            onConfirm={removeAccount}
            onCancel={cancelRemoveAccount}
            style={{ flex: 1 }}
            themeColor="crimson"
            desc={t('modal-multi-accounts-remove-account-desc', { addr: formatAddress(account?.address ?? '') })}
            cancelable
          />
        )}
      </Swiper>
    </SafeAreaProvider>
  );
});
