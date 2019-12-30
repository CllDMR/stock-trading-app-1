import React, { Component } from "react";
import { StyleProp, TextStyle, TextInput } from "react-native";
import Block, { BlockProps } from "./Block";

type Props = { style?: StyleProp<TextStyle> } & BlockProps;

export class Input extends Component<Props> {
  render() {
    const { style } = this.props;
    return <TextInput style={style} />;
  }
}

export default Input;
