import {useContext} from 'react';

import {GlobalContext} from '@providers/globalContext';

export const useGlobalContext = () => useContext(GlobalContext);
