import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import common from '../constants/common';
import AppTextInput from '../components/form/AppTextInput';


const LoginDetails = {
    amount: '',
    bvn: '',
};

const validationSchema = Yup.object({
    amount: Yup.string().email().required().label('Email'),
    bvn: Yup.string().required().label('BVN'),
});

function Home(props: any) {
    const [search, setSearch] = React.useState('');


    return (
        <View style={styles.container} >
            <AppTextInput
                value={search}
                placeholder="Loan Amount"
                errors={''}
                onChangeText={(text) => {
                    setSearch(text as string);
                }}
                onBlur={() => {

                }}
                width={common.WP('90%')}
                keyboardType="number-pad"
                autoCapitalize="none"
                marginBottom={0}
                style={{ alignSelf: 'center' }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: common.colors.white,
    },
    tryConctainer: {
        flexDirection: 'row',
        marginTop: common.WP(10),
        color: common.colors.text1,
    },
    image: {
        width: 20,
        height: 20,
        marginRight: common.WP(30),
    },
    Thanks: {
        fontSize: common.WP(4),
        width: common.WP(80),
        textAlign: 'center',

        marginTop: common.WP(5),
        marginLeft: common.WP(5),
        color: common.colors.grey3,
    },
    label: {
        fontSize: common.WP(4),
        alignSelf: 'flex-start',
        marginLeft: common.WP(5),
    },
    button: {
        alignSelf: 'center',
        top: common.HP(13),
    },
    formContainer: {
        alignItems: 'center',
    },
    portfolioListItem: {
        paddingVertical: common.W_4,
        borderBottomColor: common.colors.lightGrey,
        borderBottomWidth: 1,
    },
    portfolioListItemText: {},
    listContainer: {
        paddingHorizontal: common.W_5,
    },
})

export default Home;