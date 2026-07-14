import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,
    },

    display: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20,
    },

    displayText: {
        fontSize: 50,
        fontWeight: '300',
        color: '#333',
    },

    keyboard: {
        paddingHorizontal: 22,
        paddingBottom: 18,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 14,
    },

    button: {
        width: 80,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#FFFFFF',

        justifyContent: 'center',
        alignItems: 'center',

        elevation: 4,
    },

    buttonText: {
        fontSize: 30,
        fontWeight: '400',
        color: '#444',
    },

    operatorButton: {
        backgroundColor: '#F4F4F4',
    },

    operatorText: {
        color: '#F5A623',
        fontSize: 32,
        fontWeight: '400',
    },

    equalButton: {
        backgroundColor: '#FF9800',
        width: 60,
    },

    equalText: {
        color: '#FFFFFF',
        fontSize: 34,
        fontWeight: '500',
    },

    zeroButton: {
        width: 200,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#FFFFFF',
        marginRight: 5,

        justifyContent: 'center',
        alignItems: 'center',

        elevation: 4,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },

    clearButton: {
        marginTop: 6,
        height: 48,
        borderRadius: 24,

        backgroundColor: '#EFEFEF',

        justifyContent: 'center',
        alignItems: 'center',

        elevation: 2,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },

    clearText: {
        fontSize: 24,
        color: '#555',
        fontWeight: '400',
    },
});