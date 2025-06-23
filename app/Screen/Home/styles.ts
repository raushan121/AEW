import { StyleSheet } from "react-native";
import { fontResize } from "../../Utils/fontResize";
import { FONTS, THEME } from "../../Utils/theme";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const styles = StyleSheet.create(({
    subHeaderText: {
        fontSize: fontResize(16),
        fontWeight: '600',
        fontFamily: FONTS.MEDIUM,
        color: THEME.GRAY[100],
        marginVertical: hp("1%")
    },
    itemContainer: {
        width: wp("43%"),
        height: hp("10%"),
        backgroundColor: THEME.WHITE_COLOR,
        marginHorizontal: wp("1.5%"),
        marginVertical: hp("0.9%"),
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: wp("3%")
    },
    icon: {
        height: wp("6%"),
        width: wp("7%"),
        resizeMode: 'contain',
        marginBottom: wp("1%")
    },
    itemHeading: {
        fontSize: fontResize(12),
        fontWeight: '600',
        color: THEME.TEXT_COLOR,
        fontFamily: FONTS.BOLD
    },
    flatlistStyles: {
        paddingTop: hp("3%"),
        flex: 1,

    },
    headerText: {
        marginTop: hp("1%"),

    },
    bottomSheetContainer: {

        flex: 1,
        padding: 36,
        alignItems: 'center',

    }
}))

export default styles