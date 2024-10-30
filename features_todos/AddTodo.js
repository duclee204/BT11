import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const scaleValue = new Animated.Value(1);

  function handleSumbit() {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a new task"
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholderTextColor="#87CEEB" // Light blue placeholder color
      />
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSumbit}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 12,
    width: '90%',
    backgroundColor: '#E0F7FA', // Light blue container background
    borderRadius: 16,
    shadowColor: '#00BFFF', // Light blue shadow
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  input: {
    flex: 1,
    backgroundColor: '#B2EBF2', // Light blue input background
    padding: 14,
    borderRadius: 12,
    borderColor: '#81D4FA', // Light blue border
    borderWidth: 1,
    marginRight: 14,
    color: '#007BFF', // Dark blue text color
  },
  button: {
    backgroundColor: '#1E90FF', // Blue button background
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1E90FF', // Blue shadow color
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
