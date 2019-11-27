import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form'
import List from './List'
import Bottom from './Bottom'

type P = {

}

type S = {
  page: string,
  front_skill: string[],
  back_skill: string[],
  inputText: string
}
export default class App extends React.Component<P, S> {
  constructor(props) {
    super(props)
    this.state = {
      page: 'front',
      front_skill: [
        'HTML',
        'CSS',
        'Basic of JavaScript',
        'Package Managers',
        'CSS Pre-proccessors',
        'CSS Frameworks',
        'CSS Architecture',
        'Build Tootls',
        'Pick a Framework',
        'CSS in JS',
        'Testing your Apps',
        'Progressive Web Apps',
        'Type Checkers',
        'Server Side Rendering',
        'Static Site Generators',
        'Desktop Applications',
        'Mobile Applications',
        'Web Assembly'
      ],
      back_skill: [],
      inputText: ''
    }
    this._onPushButton = this._onPushButton.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
    this._onChangePage = this._onChangePage.bind(this)
  }

  _onPushButton(): void {
    let { inputText, page, front_skill, back_skill } = this.state
    if (inputText !== '') {
      if (page === 'front'){
        front_skill.push(inputText)
      } else {
        back_skill.push(inputText)
      }
      inputText = ''
      this.setState({ front_skill, back_skill, inputText })
    }
  }

  _onChangeText(inputText: string): void {
    this.setState({ inputText })
  }

  _onChangePage(page: string): void {
    this.setState({ page })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Form inputText={this.state.inputText} _onPushButton={this._onPushButton} _onChangeText={this._onChangeText} />
        </View>
        <View style={styles.list}>
          <List skills={this.state.page === 'front' ? this.state.front_skill : this.state.back_skill} />
        </View>
        <View style={styles.bottom}>
          <Bottom _onChangePage={this._onChangePage} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 15
    paddingTop: 50,
  },
  form: {
    flex: 1,
    width: '80%',
  },
  list: {
    flex: 9,
    width: '80%',
  },
  bottom: {
    flex: 1,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#C0C0C0'
  }

})