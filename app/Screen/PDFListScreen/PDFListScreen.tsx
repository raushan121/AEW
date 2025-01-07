import { View, Text, FlatList, Image, TouchableOpacity, Pressable, Alert } from 'react-native'
import React from 'react'
import styles from './style'
import globalStyles from '../../Utils/globalStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import NotchArea from '../../Utils/SafeAreaView'
import { ic_back, ic_book_open, ic_pdf_download, ic_weekly } from '../../assets'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Routename from '../../routes/Routename'


const PDFListScreen = ({ navigation }: any) => {



  const dummyData = [
    {}, {}, {}, {}, {}, {}, {}, {},
  ]

  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressRead = (item: any) => {
    navigation.navigate(Routename.PDF_READ_SCREEN)
    console.log("item>>>>", item)
  }

  const renderItem = ({ item }: any) => {
    return (
      <Pressable onPress={() => onPressRead(item)} style={styles.listMainContainer}>
        <View style={globalStyles.row2}>
          <View style={styles.readImageContainer}>
          <Image style={styles.subjectIcon} source={ic_book_open} />
          </View>
        
          <Text numberOfLines={2} style={styles.itemHeadetText}>reading this chapter in a more fantastic way or you know</Text>
        </View>
        <View style={globalStyles.row}>
          <TouchableOpacity onPress={() => onPressRead(item)} activeOpacity={0.8} style={styles.readContainerStyle}>
            <Text style={styles.btnText}>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Alert.alert("suscribe to download")} style={{zIndex:1}} activeOpacity={0.8}>
            <Image style={styles.downloadIcon} source={ic_pdf_download} />
          </TouchableOpacity>
        </View>
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={[globalStyles.container, NotchArea.AndroidSafeArea,]}>
      <View style={[globalStyles.row2,{marginBottom:hp("3%")}]}>
        <TouchableOpacity onPress={onPressBack}>
          <Image source={ic_back}/>
        </TouchableOpacity>
      <Text style={styles.header}>PDFListScreen</Text>
      </View>
  
      <FlatList
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item: any, index: number) => String(index)}
      />
    </SafeAreaView>
  )
}

export default PDFListScreen