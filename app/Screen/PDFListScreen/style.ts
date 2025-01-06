import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FONTS, THEME } from "../../Utils/theme";
import { fontResize } from "../../Utils/fontResize";

const styles=StyleSheet.create({
    listMainContainer:{
        paddingHorizontal:wp("3%"),
        paddingVertical:hp("2%"),
        marginVertical:hp("0.8%"),
        borderRadius:wp("3%"),
        borderWidth:wp("0.1%"),
        borderColor:THEME.GRAY[200],
        backgroundColor:THEME.WHITE_COLOR
    },
    readContainerStyle:{
        paddingHorizontal:wp("4%"),
        paddingVertical:hp("0.5%"),
        marginTop:hp("1%"),
        borderRadius:wp("2%"),
        borderWidth:wp("0.05%"),
        borderColor:THEME.TEXT_COLOR,
        backgroundColor:THEME.WHITE_COLOR 
    },
    readImageContainer:{
        height:wp("11%"),
        width:wp("11%"),
        backgroundColor:THEME.RED[100],
        borderRadius:wp("10%"),
        alignItems:'center',
        justifyContent:'center',
        marginRight:wp("2.6%")
    },
    subjectIcon:{
        height:wp("5%"),
        width:wp("5%"),
        resizeMode:'contain',
        tintColor:THEME.WHITE_COLOR
    },
    downloadIcon:{
        height:wp("6%"),
        width:wp("6%"),
        resizeMode:'contain'
    },
    itemHeadetText:{
        maxWidth:wp("70%"),
        fontSize:fontResize(13),
        fontWeight:'500',
        fontFamily:FONTS.MEDIUM,
        color:THEME.TEXT_COLOR
    },
    btnText:{
        fontSize:fontResize(13),
        fontWeight:'700',
        fontFamily:FONTS.MEDIUM,
        color:THEME.GRAY[100]
    },
    header:{
        fontSize:fontResize(16),
        fontWeight:'700',
        fontFamily:FONTS.BOLD,
        color:THEME.TEXT_COLOR ,
        marginLeft:wp("25%"),
      
    }
})

export default styles