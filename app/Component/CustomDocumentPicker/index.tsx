import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import styles from './style';

const CustomDocumentPicker = ({onDocumentPicked, documentName,document}: any) => {
  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      onDocumentPicked(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker');
      } else {
        console.log('Unknown error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.uploadText}>Upload your:{document}</Text>
      <TouchableOpacity onPress={pickDocument} style={styles.container}>
        <Text style={styles.documentNameStyle}>{documentName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDocumentPicker;
