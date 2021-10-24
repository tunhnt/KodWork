import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    
    container: {
       flex: 1,  
    },
    top_container: {
        backgroundColor: "#F2F2F2",
        padding: 7
    },
    job_name: {
        fontSize: 20,
        color: "#37474F",
        fontWeight: 'bold'
    },
    location_section: {
        flexDirection: "row",
        marginTop: 2
    },
    job_location_c: {
        color: "#EF5350",
        fontWeight: 'bold'
    },
    job_location: {
        fontWeight: 'bold',
        color: "#000",
        marginTop: 2
    },
    level_section: {
        flexDirection: "row"
    },
    job_level_c: {
        color: "#EF5350",
        fontWeight: 'bold'
    },
    job_level: {
        fontWeight: 'bold',
        color: "#000",
    },
    job_detail: {
        alignSelf: "center",
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#37474F",
    },
    body_container: {
        padding: 7
    },
    footer_container: {
        backgroundColor: "#F2F2F2",
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 5,
        paddingVertical: 5,
        paddingTop: 20
    },
    buttons: {
        backgroundColor: "#EF5350",
        padding: 10,
        borderRadius: 6,
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    button_text: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5
    }
});
