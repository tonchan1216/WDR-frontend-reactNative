import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import Item from './Item'
import { element } from 'prop-types';

type P = {
  skills: string[]
}

const List: React.FC<P> = ({skills}) => {
  const msgs = skills.map((element) => {
    const random = Math.floor( Math.random() * 10000 )
    return <Item text={element} key={`item-${random}`} />
  })
  return (
    <ScrollView style={{}}>
      {msgs}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});

export default List