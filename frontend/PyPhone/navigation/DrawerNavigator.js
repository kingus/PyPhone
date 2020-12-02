import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import TabNavigator from './TabNavigator';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import logout from '../images/logout.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as authActions from '../store/actions/auth';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerNavigator = createDrawerNavigator(
  {
    MainTabs: TabNavigator,
  },
  {
    contentOptions: {
      backgroundColor: 'grey',
    },
    contentComponent: (props) => {
      const dispatch = useDispatch();

      const logOutHandler = async () => {
        let action;
        action = authActions.logout();
        console.log('LOG OUT HANDLER');

        try {
          await dispatch(action);
          props.navigation.navigate({
            routeName: 'SignIn',
          });
        } catch (err) {
          console.log(err.message);
        }
      };

      return (
        <View style={{flex: 1, paddingTop: 20, backgroundColor: '#00072b'}}>
          <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
            <TouchableOpacity style={styles.container} onPress={logOutHandler}>
              {/* <Image
                source={logout}
                style={styles.logoutIcon}
                tintColor="#494949"></Image> */}
              <Icon name="arrow-left" size={15} color="#5afffb" />

              <Text style={styles.text}>wyloguj się</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      );
    },
  },
);
export default DrawerNavigator;

const styles = StyleSheet.create({
  logoutIcon: {
    width: 30,
    height: 30,
  },
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
  },
  text: {
    marginLeft: 25,
    color: 'white',
    fontFamily: 'OpenSansSemiBold',
    letterSpacing: 0,
  },
});
