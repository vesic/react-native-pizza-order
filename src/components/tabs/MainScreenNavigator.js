import { TabNavigator } from "react-navigation";
import ItemsTab from "./ItemsTab";
import CartTab from './CartTab'

const MainScreenNavigator = TabNavigator({
    Items: { screen: ItemsTab },
    Cart: { screen: CartTab },
  },{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      style: {
        // backgroundColor: '#009688'
      }
    }
  }
);

export default MainScreenNavigator