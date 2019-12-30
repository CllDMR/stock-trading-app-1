import React, { Component } from "react";
import {
  StyleProp,
  ViewStyle,
  View,
  TextStyle,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import Block, { BlockProps } from "./Block";

type Props = {
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
} & BlockProps;

export class Button extends Component<Props> {
  render() {
    const { onPress, textStyle, children, ...restProps } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Block {...restProps}>
          <Text style={textStyle}>{children}</Text>
        </Block>
      </TouchableWithoutFeedback>
    );
  }
}

export default Button;
