import { StyleSheet } from "react-native";
import { fontResize } from "./fontResize";
import { FONTS, THEME } from "./theme";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const globalStyles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:wp("4%"),
        backgroundColor:THEME.BACKGROUND_COLOR,
        color:THEME.BACKGROUND_COLOR
    },
    normalText:{
        fontSize:fontResize(12),
        fontWeight:'500',
        fontFamily:FONTS.REGULAR,
        color:THEME.TEXT_COLOR
    },
    headerText:{
        fontSize:fontResize(24),
        fontWeight:'700',
        fontFamily:FONTS.BOLD,
        color:THEME.TEXT_COLOR,
        letterSpacing:0.5,
        marginVertical:hp("1%")
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    row2:{
        flexDirection:'row',
        alignItems:'center' 
    },
    icon:{
        height:wp("7%"),
        width:wp("7%"),
        resizeMode:'contain'
    }
})



export default globalStyles