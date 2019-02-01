import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(236, 23, 73, .8)', // original: #ED184A
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 285,
        height: 75,
        marginTop: 100,
    },
    button: {
        alignItems: 'center',
        borderColor: 'white',
        borderRadius: 30,
        borderStyle: 'solid',
        borderWidth: 2,
        height: 55,
        justifyContent: 'center',
        width: 325,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default styles;