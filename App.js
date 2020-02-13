/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  Modal,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GoalItem from './components/goalItem'
import GoalInput from './components/goalInput'

export default function App(){
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const addGoalHandler = goalTitle =>{
    setCourseGoal(currentGoals => [
      ...currentGoals, 
      {key: Math.random().toString(), value: goalTitle}
    ]);
    setisAddMode(false);
  }

  const RemoveGoalHandler = goalkey =>{
    setCourseGoal(currentGoals=>{
      return currentGoals.filter((goal)=> goal.key !== goalkey);
    });
  }

  const CancleGoalAdd = () =>{
    setisAddMode(false);
  }

  return ( 
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={()=> setisAddMode(true)} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={CancleGoalAdd}/>
        <FlatList
          data={courseGoal}
          renderItem={itemData => (
            <GoalItem 
              id={itemData.item.key}
              onDelete={RemoveGoalHandler}
              title={itemData.item.value} 
            />
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    padding: 50
  }
});
