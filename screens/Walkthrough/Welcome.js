import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { TextButton } from "../../components";
import { COLORS, FONTS, SIZES, images } from '../../constants';

const Welcome = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.light
            }}
        >
            {/* Logo & Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.logo}
                    style={{
                        width: 150,
                        height: 150
                    }}
                />

                <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
                    Welcome to
                </Text>
                <Text style={{ marginTop: SIZES.base, ...FONTS.h1 }}>
                    Margaret
                </Text>
            </View>

            {/* Footer Buttons */}
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    marginBottom: 30
                }}
            >
                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                    label="Get Started"
                    onPress={() => navigation.navigate("Walkthrough")}
                />

                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        marginTop: SIZES.base,
                        backgroundColor: null
                    }}
                    label="Already have an account"
                    labelStyle={{
                        color: COLORS.primary
                    }}
                //onPress
                />
            </View>
        </View>
    )
}

export default Welcome;