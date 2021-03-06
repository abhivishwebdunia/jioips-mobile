import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
// First way to import
import { ClipLoader } from 'react-spinners'
// Another way to import. This is recommended to reduce bundle size
const override = css`
  top: 50%;
  left: 50%;
  position: fixed;
  display: block;
  opacity: 0.7;
  background-color: #fff;
  z-index: 99;
  text-align: center;
`

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

class LoaderComponent extends Component {
  constructor(props) {
    super(props)
    console.log('this.props', this.props)
    this.state = {
      loading: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('LOADER COMPOSNENT RECIREFE PROPS', this.props, nextProps)
  }
  render() {
    // eslint-disable-next-line
        const { children, ...attributes } = this.props;

    return (
      <View>
        {this.props.loader.loading && (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    )
  }
}

LoaderComponent.propTypes = propTypes
LoaderComponent.defaultProps = defaultProps

function mapStateToProps(state) {
  return { loader: state.loader }
}

export default connect(mapStateToProps)(LoaderComponent)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})
