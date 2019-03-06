import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Title, Left, Right, Button } from 'native-base';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AppHeaderWithSearchBar from './header-with-search-bar';
import { Colors } from '../../configs/appConfig';

import styles from './styles';
export default class AppHeader extends Component {
    render() {
        const {
            title,
            showLeftButton,
            showRightButton,
            leftButtonIcon,
            rightButtonIcon,
            leftIconColor,
            rightIconColor,
            leftIconSize,
            rightIconSize,
            searchBar,
            onSearchTextChanged,
            rightButtonText,
            leftButtonText,
            onLeftPressed,
            onRightPressed,
            searchText,
            renderRightBtn,
            renderLeftBtn
        } = this.props;
        let leftIcon = leftButtonIcon ? leftButtonIcon : 'ios-arrow-round-back-outline';
        let rightIcon = rightButtonIcon ? rightButtonIcon : 'ios-notifications';

        let leftChild = null;
        if (!leftButtonText) {
            leftChild = (
                <IonIcons
                    size={leftIconSize ? leftIconSize : 35}
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

        return !searchBar ? (
            <Header style={{ justifyContent: 'flex-start', backgroundColor: Colors.COLOR_MENU_HEADER }}>
                <View style={styles.navTitleContainer}>
                    <Left style={{ flex: 1, paddingLeft: 10 }}>
                        {showLeftButton && (
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
                        )}
                    </Left>
                    <Title style={styles.navTitle}>{title ? title : ''}</Title>
                    <Right style={{ flex: 1, paddingRight: 5 }}>
                        {showRightButton ? (
                            renderRightBtn ? (
                                renderRightBtn
                            ) : (
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
                            )
                        ) : null}
                    </Right>
                </View>
            </Header>
        ) : (
            <AppHeaderWithSearchBar
                {...this.props}
                // showLeftButton={showLeftButton}
                // showRightButton={showRightButton}
                // leftButtonIcon={leftButtonIcon}
                // rightButtonIcon={rightButtonIcon}
                // onSearchTextChanged={onSearchTextChanged}
                // rightButtonText={rightButtonText}
                // leftButtonText={leftButtonText}
                // onLeftPressed={onLeftPressed}
                // onRightPressed={onRightPressed}
                // searchText={searchText}
            />
        );
    }
}
