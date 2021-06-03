import React from 'react';

export default class Item extends React.Component<{ value: number; color: string }> {
  private renderCount = 0;

  render() {
    this.renderCount = ++this.renderCount;
    return <li style={{ backgroundColor: this.props.color }}>{this.props.value} ({this.renderCount} render/s)</li>
  }
}
