import React from 'react';
import {
    Text,
    TouchableHighlight,
    StyleSheet,
    View
} from 'react-native';

export type ButtonProps = {
    title: string;
    onPress(): void;
}

const borderRadius = 5;

export function Button(props: ButtonProps) {
    const { title, onPress } = props;
    return (
        <TouchableHighlight
            onPress={onPress}
            style={{ borderRadius: borderRadius }}
        >
            <View style={styles.button}>
                <Text>{title}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: borderRadius,
    },
});