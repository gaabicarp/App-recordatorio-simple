import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText);
    };

    const AddGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.InputContainer}>
                <TextInput
                placeholder="Agregar Item"
                style={styles.textInput} 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add' onPress={AddGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    InputContainer:{
        flex: 1, justifyContent:'center', alignItems:'center'
      },
    textInput: {
        width: '80%', borderColor: 'black', borderWidth: 1, padding: 1, margin: 10
      },   
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button:{
        width: '40%'
    }
})

export default GoalInput