import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';
import { fontResize } from '../../Utils/fontResize';
import { FONTS } from '../../Utils/theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const App = () => {
  // Array of videos
  const [videos] = useState([
    { id: '1', title: 'Video 1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '2', title: 'Video 2', url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { id: '3', title: 'Video 3', url: 'https://www.w3schools.com/html/movie.mp4' },
    { id: '4', title: 'Video 4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '5', title: 'Video 5', url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { id: '6', title: 'Video 6', url: 'https://www.w3schools.com/html/movie.mp4' },
  ]);

  // State to track selected video
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Video List</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.videoItem}
            onPress={() => setSelectedVideo(item?.url)}
          >
            <Text style={styles.videoTitle}>{item?.title}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedVideo && (
        <View style={styles.videoPlayer}>
          <Video
            source={{ uri: selectedVideo }}
            style={styles.video}
            controls={true}
            resizeMode="contain"
            onEnd={() => setSelectedVideo(null)}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize:fontResize(24),
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP("2%"),
    textAlign: 'center',
    fontFamily:FONTS.EXTRA_BOLD
  },
  videoItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  videoTitle: {
    fontSize: 18,
  },
  videoPlayer: {
    marginTop: 20,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default App;
