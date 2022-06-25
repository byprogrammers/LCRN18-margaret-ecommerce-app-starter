import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {
    CountryDropDown
} from "../../components";

const AuthMain = () => {

    // Country
    const [countries, setCountries] = React.useState([])
    const [showCountryModal, setShowCountryModal] = React.useState(false)

    React.useEffect(() => {
        // Fetch countires
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                let countryData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
                    }
                })

                setCountries(countryData)
            })
    }, [])

    // Render

    function renderCountryModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showCountryModal}
            >
                <TouchableWithoutFeedback
                    onPress={() => setShowCountryModal(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.dark80
                        }}
                    >
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.light,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={countries}
                                keyExtractor={(item) => item.code}
                                contentContainerStyle={{
                                    paddingHorizontal: SIZES.padding,
                                    paddingBottom: SIZES.padding,
                                }}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: SIZES.radius
                                            }}
                                            onPress={() => {
                                                console.log(item)
                                                setSelectedCountry(item)
                                                setShowCountryModal(false)
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.flag }}
                                                resizeMode="contain"
                                                style={{
                                                    width: 40,
                                                    height: 30
                                                }}
                                            />
                                            <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <View>

        </View>
    )
}

export default AuthMain;