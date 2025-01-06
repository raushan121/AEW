import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyles from '../../Utils/globalStyle'
import STRINGS from '../../Constants/string'
import styles from './styles'
import { ic_daily, ic_monthely, ic_weekly } from '../../assets'
import Routename from '../../routes/Routename'
import { getLocalValue } from '../../Utils/asyncStorage'

const HomeScreen = ({navigation}:any) => {

    const data= JSON.stringify(getLocalValue("userdata"))
    console.log("resss>>>>>>",data)

    const dummyData=[
        {
            id:1,
            icon:ic_daily,
            headerText:"Daily Current Affairs"
        },
        {
            id:2,
            icon:ic_weekly,
            headerText:"Weekly Current Affairs"
        },
        {
            id:3,
            icon:ic_monthely,
            headerText:"Monthely Current Affairs"
        },
        {
            id:4,
            icon:ic_daily,
            headerText:"Daily Current Affairs"
        },
        {
            id:5,
            icon:ic_daily,
            headerText:"Daily Current Affairs"
        },
    ]

    const onPressItem=(item:any)=>{
     navigation.navigate(Routename.PDF_LIST_SCREEN,{item})
        console.log(item)
    }

    const renderItem=({item,index}:any)=>{
        return(
            <TouchableOpacity activeOpacity={0.7} onPress={()=>onPressItem(item)} style={styles.itemContainer}>
                <Image style={styles.icon} source={item?.icon}/>
                <Text style={styles.itemHeading}>{item?.headerText}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.headerText}>Hi Raushan !</Text>
      <Text style={styles.subHeaderText}>{STRINGS.FIND_LESSON}</Text>
    
      <FlatList 
      bounces={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item, index) => String(index)}
      data={dummyData}
      style={styles.flatlistStyles}
      />
  
    
    </SafeAreaView>
  )

}

export default HomeScreen