import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import Home from '../screens/Home';
import RouteConstant from './RouteConstant';
import HomeIcon from '../assets/svg/HomeIcon';
import common from '../constants/common';
import CreditIcon from '../assets/svg/Credit';
import FastOrderIcon from '../assets/svg/FastOrderIcon';
import OrderIcon from '../assets/svg/OrderIcon';
import AccountIcon from '../assets/svg/AccountIcon';



const Tab = createBottomTabNavigator();
function AppTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ }) => ({
        headerShown: false,
        tabBarStyle: {
          height: WP(19),
          paddingHorizontal: 5,
          paddingVertical: 5,
        },
        tabBarShowLabel: false,
      })}>
      {/* <Tab.Screen
        name={RouteConstant.Home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <HomeIcon style={styles.tabIcon1} />
              <Text
                style={styles.tabIconTextActive1}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteConstant.FastOrder}
        component={FastOrder}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <FastOrderIcon style={styles.tabIcon1} />
              <Text
                style={styles.tabIconTextActive2}>
                Fast Order
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteConstant.Credit}
        component={Credit}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <CreditIcon style={styles.tabIcon} />
              <Text
                style={styles.tabIconTextActive}>
                Credit
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteConstant.Order}
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <OrderIcon style={styles.tabIcon1} />
              <Text
                style={styles.tabIconTextActive1}>
                Orders
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={RouteConstant.Account}
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <AccountIcon style={styles.tabIcon1} />
              <Text
                style={styles.tabIconTextActive1}>
                Account
              </Text>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    // resizeMode: 'contain',
  },
  tabIcon1: {
    // resizeMode: 'contain',
    // marginBottom: WP(2.5),
    // marginTop: WP(5),
  },
  tabIcon2: {
    // resizeMode: 'contain',
    // marginBottom: WP(-5),

  },
  tabIconTextActive: {
    color: common.colors.black,
    fontSize: WP(3.5),
    marginTop: WP(1),
    // top: WP(5),
  },
  tabIconTextActive1: {
    color: common.colors.black,
    fontSize: WP(3.5),
    marginTop: WP(1),
    top: WP(3),
  },
  tabIconTextActive2: {
    color: common.colors.black,
    fontSize: WP(3.5),
    marginTop: WP(1),
    top: WP(1.4),
  },
  tabIconTextInActive: {
    color: common.colors.activeTabText,
    fontSize: WP(3.5),
    marginTop: WP(1),
  },
  tabIconIndicatore: {
    width: WP(2),
    height: WP(2),
    marginTop: WP(1),
  },
});

export default AppTabNavigation;
