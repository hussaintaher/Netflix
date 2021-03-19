import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import categories from './../../assets/data/categories'
import TabBottomNavigator from './../../components/TabBottomNavigator'
import Categories from '../../components/Categories'
import styles from './styles'
export default function HomeScreen() {
    
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'black', borderColor: 'white'}}>
                <FlatList
                    style={{marginTop: 20}}
                    data={categories.items}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={styles.categoryWrapper}>
                            <Text style={styles.categoryText}>{item.title}</Text>
                            <Categories category={item} />
                        </View>
                    )}
                />
                
                
            </View>
        </View>
    )
}
