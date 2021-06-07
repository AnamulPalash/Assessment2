import React from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';

export type InputProps = {
    value?: string;
    onChange?(text: string): void;
    placeholder?: string;
};

export function Input(props: InputProps) {
    const {
        value,
        onChange,
        placeholder,
    } = props;
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 5,
    },
});