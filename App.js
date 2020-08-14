import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

export default class App extends React.Component {
  state = {
    valorDisplay: '',
    formula: '',
  };

  handleClicked = (valor) => {
    if (valor == 'C') {
      this.setState({ valorDisplay: '', formula: '' });
      return;
    }

    var valorReal = isNaN(valor) ? '' : this.state.valorDisplay + valor;

    this.setState({
      valorDisplay: valorReal,
      formula: this.state.formula + valor,
    });

    if (valor == '=') {
      let total = eval(this.state.formula);
      this.setState({ valorDisplay: total });
    }
  };

  render() {
    return (
      <View style={styles.contaier}>
        <View style={styles.display}>
          <View style={{ flex: 2 }}>
            <Text style={styles.formula}>{this.state.formula}</Text>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={styles.valor}>{this.state.valorDisplay}</Text>
          </View>
        </View>
        <View style={styles.botoes}>
          <View style={styles.linhaBotao}>
            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('C');
              }}>
              <Text>C</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('+/-');
              }}>
              <Text>+/-</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('%');
              }}>
              <Text>%</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('/');
              }}>
              <Text>/</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.linhaBotao}>
            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('7');
              }}>
              <Text>7</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('8');
              }}>
              <Text>8</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('9');
              }}>
              <Text>9</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('*');
              }}>
              <Text>X</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.linhaBotao}>
            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('4');
              }}>
              <Text>4</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('5');
              }}>
              <Text>5</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('6');
              }}>
              <Text>6</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('-');
              }}>
              <Text>-</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.linhaBotao}>
            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('1');
              }}>
              <Text>1</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('2');
              }}>
              <Text>2</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('3');
              }}>
              <Text>3</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('+');
              }}>
              <Text>+</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.linhaBotao}>
            <TouchableHighlight
              style={styles.btnCinzaZero}
              onPress={() => {
                this.handleClicked('0');
              }}>
              <Text>0</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('.');
              }}>
              <Text>,</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.btnCinza}
              onPress={() => {
                this.handleClicked('=');
              }}>
              <Text>=</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: 'aqua',
  },
  display: {
    flex: 2,
    backgroundColor: '#000',
  },
  botoes: {
    flex: 5,
    backgroundColor: 'purple',
  },
  formula: {
    color: '#fff',
    fontSize: '24px',
    textAlign: 'right',
  },
  valor: {
    color: '#fff',
    fontSize: '48px',
    textAlign: 'right',
  },
  linhaBotao: {
    flex: 1,
    flexDirection: 'row',
  },
  btnCinza: {
    backgroundColor: 'gray',
    width: Dimensions.get('window').width / 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1px',
  },
  btnCinzaZero: {
    backgroundColor: 'gray',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1px',
  },
});
