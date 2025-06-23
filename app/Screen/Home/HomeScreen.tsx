import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../Utils/globalStyle';
import STRINGS from '../../Constants/string';
import styles from './styles';
import { ic_daily, ic_language_change, ic_monthely, ic_weekly } from '../../assets';
import Routename from '../../routes/Routename';
import { getLocalValue } from '../../Utils/asyncStorage';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

// Sample API call functions (replace with your actual API calls)
const fetchVerticalData = async () => {
    // Replace with your actual API call
    return [
        { id: 1, icon: ic_daily, headerText: 'Daily Current Affairs' },
        { id: 2, icon: ic_weekly, headerText: 'Weekly Current Affairs' },
        { id: 3, icon: ic_monthely, headerText: 'Monthly Current Affairs' },
        { id: 4, icon: ic_daily, headerText: 'Daily Current Affairs' },
        { id: 5, icon: ic_daily, headerText: 'Daily Current Affairs' },
    ];
};

const fetchHorizontalData = async () => {
    // Replace with your actual API call
    return [
        { id: 1, icon: ic_daily, headerText: 'Free PDF 1' },
        { id: 2, icon: ic_weekly, headerText: 'Free PDF 2' },
        { id: 3, icon: ic_monthely, headerText: 'Free PDF 3' },
    ];
};

// Memoized List Item Component
const ListItem = React.memo(({ item, onPress }: any) => (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPress(item)}
        style={styles.itemContainer}
    >
        <Image style={styles.icon} source={item?.icon} />
        <Text style={styles.itemHeading}>{item?.headerText}</Text>
    </TouchableOpacity>
));

const HomeScreen = ({ navigation }: any) => {
    const [verticalData, setVerticalData] = useState([]);
    const [horizontalData, setHorizontalData] = useState([]);
    const [userData, setUserData] = useState(null);
    const bottomSheetRef = useRef<BottomSheet>(null);

    // Fetch user data
    useEffect(() => {
        const loadUserData = async () => {
            try {
                const data = await getLocalValue(STRINGS.STORAGE.LOGIN_DATA);
                setUserData(JSON.parse(data));
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };
        loadUserData();
    }, []);

    // Fetch API data
    useEffect(() => {
        const loadData = async () => {
            try {
                const [verticalResult, horizontalResult] = await Promise.all([
                    fetchVerticalData(),
                    fetchHorizontalData(),
                ]);
                setVerticalData(verticalResult);
                setHorizontalData(horizontalResult);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        loadData();
    }, []);

    // Memoized navigation handler
    const onPressItem = useCallback(
        (item: any) => {
            navigation.navigate(Routename.PDF_LIST_SCREEN, { item });
        },
        [navigation]
    );

    // Memoized render item functions
    const renderVerticalItem = useCallback(
        ({ item }: any) => <ListItem item={item} onPress={onPressItem} />,
        [onPressItem]
    );

    const renderHorizontalItem = useCallback(
        ({ item }: any) => <ListItem item={item} onPress={onPressItem} />,
        [onPressItem]
    );

    // Memoized FlatList configurations
    const verticalListConfig = useMemo(
        () => ({
            data: verticalData,
            renderItem: renderVerticalItem,
            keyExtractor: (item: any, index: number) => String(item.id || index),
            numColumns: 2,
            bounces: false,
            showsVerticalScrollIndicator: false,
            style: styles.flatlistStyles,
            initialNumToRender: 10,
            maxToRenderPerBatch: 10,
            windowSize: 5,
        }),
        [verticalData, renderVerticalItem]
    );

    const horizontalListConfig = useMemo(
        () => ({
            data: horizontalData,
            renderItem: renderHorizontalItem,
            keyExtractor: (item: any, index: number) => String(item.id || index),
            horizontal: true,
            bounces: false,
            showsHorizontalScrollIndicator: false,
            style: styles.flatlistStyles,
            initialNumToRender: 5,
            maxToRenderPerBatch: 5,
            windowSize: 3,
        }),
        [horizontalData, renderHorizontalItem]
    );
 const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={[globalStyles.row, { width: "95%" }]}>
                <Text style={globalStyles.headerText}>Hi {userData?.name || ''}</Text>
                <Pressable onPress={()=>bottomSheetRef?.current?.open()}>
                    <Image source={ic_language_change} style={globalStyles.icon} />
                </Pressable>
            </View>

            <Text style={styles.subHeaderText}>{STRINGS.FIND_LESSON}</Text>

            <FlatList {...verticalListConfig} />

            <Text style={styles.headerText}>Get Started with our FREE PDF</Text>
            <FlatList {...horizontalListConfig} />
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
            >
                <BottomSheetView style={styles.bottomSheetContainer}>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheet>
        </SafeAreaView>
    );
};

export default HomeScreen;