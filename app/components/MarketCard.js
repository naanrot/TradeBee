import React, { Component, useState } from 'react';
import { LayoutAnimation,Text, TouchableOpacity, UIManager, Platform } from 'react-native';
import MyCard from './MyCard';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const MarketCard = (props) => {
    const [showSecret, toggleGraph] = useState(false)

    return (
        <MyCard style={[props.style]}>
            <TouchableOpacity
                onPress={() => {
                    LayoutAnimation.configureNext(
                        LayoutAnimation.create(100, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity)
                    );
                    toggleGraph(!showSecret)
                }}
            >
                <Text>{props.coinName}</Text>
                {showSecret && <Text>{props.secretMessage}</Text>}
            </TouchableOpacity>
        </MyCard>
    )
}

export default MarketCard;