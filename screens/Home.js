
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const OptionItem = ({ bgColor, icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 60, height: 60 }]}>
                <LinearGradient
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }]}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.white,
                            width: 50,
                            height: 50,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = ({ navigation }) => {

    // Dummy Data
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "$20 Fairprice Voucher",
            img: images.fairprice,
        },
        {
            id: 1,
            name: "1 Hour Body Massage",
            img: images.bodymassage,
        },
        {
            id: 2,
            name: "$50 Redmart Voucher",
            img: images.redmart,
        },
        {
            id: 3,
            name: "$30 Uniqlo Voucher",
            img: images.uniqlo,
        },
    ]);

    // Render

    function renderDestinations(item, index) {
        var destinationStyle = {};

        if (index == 0) {
            destinationStyle = { marginLeft: SIZES.padding, }
        }

        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                onPress={() => { navigation.navigate("DestinationDetail") }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 15
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {/* Banner */}
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}>
                <Image
                    source={images.citibankbanner}
                    resizeMode="contain"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 15,
                    }}
                />
            </View>

            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.shopping}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Shopping"
                        onPress={() => { console.log("Shopping") }}
                    />
                    <OptionItem
                        icon={icons.dining}
                        bgColor={['#fddf90', '#fcda13']}
                        label="Dining"
                        onPress={() => { console.log("dining") }}
                    />
                    <OptionItem
                        icon={icons.beauty}
                        bgColor={['#e973ad', '#da5df2']}
                        label="Beauty"
                        onPress={() => { console.log("beauty") }}
                    />
                    
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.leisure}
                        bgColor={['#ffc465', '#ff9c5f']}
                        label="Leisure"
                        onPress={() => { console.log("Hotel") }}
                    />
                    <OptionItem
                        icon={icons.star}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label="Most Popular!"
                        onPress={() => { console.log("star") }}
                    />
                    <OptionItem
                        icon={icons.bestdeal}
                        bgColor={['#7be993', '#46caaf']}
                        label="Best Deals!"
                        onPress={() => { console.log("Adventure") }}
                    />
                  
                </View>
            </View>

            {/* For you only! */}
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>{"\n"}For you only!</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
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

export default Home;
