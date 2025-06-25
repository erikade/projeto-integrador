import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React, { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface Props {
  data: { id: string; titulo: string }[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}


const Item = ({ data, onEdit, onDelete }: Props) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.titulo}</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity onPress={() => onEdit(item.id)} style={styles.button}>
                <Entypo name="edit" size={24} color="#4A6FA5" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.button}>
                <AntDesign name="delete" size={24} color="#E74C3C" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
    flexShrink: 1,
    paddingRight: 12,
  },
});

export default Item;