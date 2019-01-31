import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '100%',
        height: 250,
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    toDo: {
        color: 'white',
        fontSize: 28,
    },
    date: {
        color: 'gray',
        fontSize: 16,
    },
});

export default styles;