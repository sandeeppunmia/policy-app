import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
  Dashboard : {
    screen : AppTabNavigator
    },
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Dashboard'
  }
)