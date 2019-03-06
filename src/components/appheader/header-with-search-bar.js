import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header, Left, Right, Button, Item, Input } from 'native-base';
import IonIcons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
export default class AppHeaderWithSearchBar extends Component {
    render() {
        const {
            showLeftButton,
            showRightButton,
            leftButtonIcon,
            rightButtonIcon,
            rightButtonText,
            leftButtonText,
            leftIconColor,
            rightIconColor,
            leftIconSize,
            rightIconSize,
            onLeftPressed,
            onRightPressed,
            onSearchTextChanged,
            searchText
        } = this.props;
        let leftIcon = leftButtonIcon ? leftButtonIcon : 'ios-arrow-round-back-outline';
        let rightIcon = rightButtonIcon ? rightButtonIcon : 'ios-notifications';

        let leftChild = null;
        if (!leftButtonText) {
            leftChild = (
                <IonIcons
                    size={leftIconSize ? leftIconSize : 30}
                    color={leftIconColor ? leftIconColor : 'white'}
                    name={leftIcon}
                />
            );
        } else {
            leftChild = <Text style={styles.headerFont}>{leftButtonText}</Text>;
        }

        let rightChild = null;
        if (!rightButtonText) {
            rightChild = (
                <IonIcons
                    size={rightIconSize ? rightIconSize : 30}
                    color={rightIconColor ? rightIconColor : 'white'}
                    name={rightIcon}
                />
            );
        } else {
            rightChild = <Text style={styles.headerFont}>{rightButtonText}</Text>;
        }

        return (
            <Header searchBar rounded>
                {showLeftButton && (
                    <Left style={styles.searchHeaderLeftContainer}>
                        <Button
                            transparent
                            onPress={() => {
                                if (onLeftPressed && typeof onLeftPressed == 'function') {
                                    onLeftPressed();
                                }
                            }}
                        >
                            {leftChild}
                        </Button>
                    </Left>
                )}

                <Item style={styles.searchBarContentContainer}>
                    <IonIcons size={20} name="ios-search" style={styles.iconLeft} />
                    <Input
                        placeholder="Søk"
                        onChangeText={text => {
                            if (onSearchTextChanged && typeof onSearchTextChanged == 'function') {
                                onSearchTextChanged(text);
                            }
                        }}
                        value={searchText ? searchText : ''}
                        underlineColorAndroid="transparent"
                        style={styles.searchInput}
                    />
                    {/* <Button style={styles.buttonContent} androidRippleColor={THEME.androidRippleColorRed} transparent>
                        <IonIcons size={20} name="ios-people" style={styles.iconRight} />
                    </Button> */}
                </Item>
                {showRightButton && (
                    <Right style={styles.searchBarRightContainer}>
                        <Button
                            transparent
                            onPress={() => {
                                if (onRightPressed && typeof onRightPressed == 'function') {
                                    onRightPressed();
                                }
                            }}
                        >
                            {rightChild}
                        </Button>
                    </Right>
                )}
            </Header>
        );
    }
}
