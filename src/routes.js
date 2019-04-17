import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import inicio from './pages/inicio';
import detalhes from './pages/detalhes';

const Routes= createAppContainer(
    createSwitchNavigator({
        inicio,
        detalhes,
    }),
);

export default Routes;
