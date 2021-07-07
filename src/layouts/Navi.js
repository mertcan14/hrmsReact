import React, { Component } from 'react'
import { Menu, Segment, Container, Button } from 'semantic-ui-react'

export default class Navi extends Component{
    state = { activeItem: 'anaSayfa' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='anaSayfa'
            active={activeItem === 'anaSayfa'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
