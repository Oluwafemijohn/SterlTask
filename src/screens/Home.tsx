import React, { useEffect, useMemo } from 'react';
import { View, StyleSheet, Image, Text, FlatList, ScrollView, Pressable } from 'react-native';

import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

import common from '../constants/common';
import AppTextInput from '../components/form/AppTextInput';
import { IData, ILocation } from '../types/Type';

const GET_LOCATION = gql`
         {
        users  {
            id
            email
            name
        }
    }
        `

const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
});

function Home(props: any) {
    const [search, setSearch] = React.useState('');

    const [apiData, setApiData] = React.useState<IData>();
    const [displayData, setDisplayData] = React.useState<ILocation[]>([]);


    // const client2 = new ApolloClient({
    //     uri: 'https://api.mocki.io/v2/c4d7a195/graphql',
    //     cache: new InMemoryCache(),
    // });



    //     client2
    //         .query({
    //             query: gql`
    //      {
    //     users  {
    //         id
    //         email
    //         name
    //     }
    // }
    //     `,
    //         })
    //         .then((result) => {

    //             console.log('Call API success', result.data);
    //             setApiData(result.data as IData);
    //             setDisplayData((result.data as IData).locations);

    //         });

    useEffect(() => {
        client
            .query({
                query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
            })
            .then((result) => {
                console.log('Call API success ');
                setApiData(result.data as IData);
                setDisplayData((result.data as IData).locations);
            });
    }, [])

    useMemo(() => {
        if (search) {
            const result2 = apiData?.locations.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase());
            });
            setDisplayData(result2!);
        } else {
            setDisplayData(apiData?.locations!);
        }
    }, [search]);

    // console.log('displayData', displayData.length);


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
            {
                apiData !== undefined && apiData?.locations?.length > 0 &&
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                >
                    <Pressable
                        onPress={() => {
                            setDisplayData(apiData?.locations!);
                        }}
                        style={styles.item}>
                        <Text>all</Text>
                    </Pressable>
                    {
                        apiData?.locations!.map((item, index) => (
                            <Pressable
                                onPress={() => {
                                    setDisplayData([item]);
                                }}
                                key={index} style={styles.item}>
                                <Text>{item.name}</Text>
                            </Pressable>
                        ))
                    }
                </ScrollView>
            }
            <FlatList
                data={displayData}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Image source={{ uri: item.photo }} style={styles.image} />
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                style={{}}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: common.colors.white,
        marginHorizontal: common.WP('5%'),
    },
    description: {
        color: common.colors.text1,
        fontSize: common.WP('3.5%'),
    },
    row: {
        flexDirection: 'row',
        marginTop: common.WP(2),
    },
    name: {
        color: common.colors.black,
        fontSize: common.WP('5%'),
        fontWeight: 'bold',
    },
    image: {
        width: common.WP('20%'),
        height: common.WP('20%'),
        marginRight: common.WP(2),
    },
    item: {
        padding: common.WP(2),
        backgroundColor: common.colors.yellow,
        marginRight: common.WP(2),
        borderRadius: common.WP(2),
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: common.WP(5),
        height: common.WP('10%'),
    },
    list: {
        // backgroundColor: common.colors.red,
        // marginTop: common.WP(-10),
    },
})

export default Home;