import React, {useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { images, COLORS, FONTS, SIZES } from '../constants';



const citiwallet = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
    // Render

    return (
        <SafeAreaView style={styles.container}>
          

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>

                <Image source={{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/wallet.png'}}
                  style={{width: 100, height: 100}} />

                </View>
                <Text style={{ ...FONTS.h2 }}>$205.50</Text>
                <Text style={{ ...FONTS.h2}}>Total amount payable: $15</Text>
                <Text style={{ ...FONTS.h4, alignSelf:'center',textAlign:'center', justifyContent: 'center'}}>{"\n"}{"\n"}{"\n"}Use CitiPoints? (3,652 CitiPoints available)</Text>
                <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate("paymentsuccess")}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Pay now!</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default citiwallet;