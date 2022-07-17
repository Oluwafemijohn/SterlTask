import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteConstant from './RouteConstant';
import AppTabNavigation from './AppTabNavigation';


const Stack = createNativeStackNavigator();


function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={RouteConstant.AppTabNavigation}
                component={AppTabNavigation}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen
                name={RouteConstant.RepaymentPlanScreen}
                component={RepaymentPlanScreen}
                options={{
                    headerShown: false,
                }}
            /> */}

        </Stack.Navigator>
    );
}

export default AppNavigation;