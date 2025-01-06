import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList,SectionList } from 'react-native';
import Swipeable from 'react-native-swipeable';

const SwipeToDeleteItem = ({ item, onDelete }) => {
  const [swipeable, setSwipeable] = useState(null);

  const closeSwipeable = () => {
    if (swipeable) {
      swipeable.recenter();
    }
  };

  return (
    <Swipeable
      leftButtons={[
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'flex-end' }}
          onPress={() => {
            onDelete(item);
            closeSwipeable();
          }}
        >
          <Text style={{ color: 'white', padding: 15 }}>Delete</Text>
        </TouchableOpacity>,
      ]}
      onSwipeStart={() => closeSwipeable()}
      onRef={(ref) => setSwipeable(ref)}
    >
      <View style={{ padding: 10, borderBottomWidth: 1 }}>
        <Text>{item.text}</Text>
      </View>
    </Swipeable>
  );
};

const SwipeToDeleteList = ({ data }) => {
  const [items, setItems] = useState(data);

  const handleDelete = (itemToDelete) => {
    const updatedItems = items.filter((item) => item !== itemToDelete);
    setItems(updatedItems);
  };

  const renderItem = ({ item }) => (
    <SwipeToDeleteItem item={item} onDelete={handleDelete} />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.date}
    />
  );
};

export default SwipeToDeleteList;
