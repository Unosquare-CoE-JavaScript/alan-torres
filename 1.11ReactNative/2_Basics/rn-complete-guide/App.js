import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalItem, GoalInput } from './components';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const handleAddGoal = (enteredGoal) => {
        if (enteredGoal.length === 0) {
            return;
        }
        setCourseGoals((currentGoals) => [
            ...currentGoals,
            { id: Math.random().toString(), value: enteredGoal },
        ]);
        setIsAddMode(false);
    };

    const handleRemoveGoal = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    const handleCancelAddition = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput
                visible={isAddMode}
                onAddGoal={handleAddGoal}
                onCancel={handleCancelAddition}
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={(itemData) => (
                    <GoalItem
                        id={itemData.item.id}
                        title={itemData.item.value}
                        onDelete={handleRemoveGoal}
                    />
                )}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});
