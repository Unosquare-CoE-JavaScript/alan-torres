import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props, ref) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const handleGoalInput = (text) => {
        setEnteredGoal(text);
    };

    const handleAddGoal = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Cource Goal"
                    style={styles.input}
                    onChangeText={handleGoalInput}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={handleAddGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    button: {
        width: '40%',
    },
});
