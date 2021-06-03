import React from 'react';

export default class Item extends React.Component<{ value: number; color: string }> {
  private renderCount = 0;

  render() {
    this.renderCount = ++this.renderCount;
    return (
      <li
      data-testid="item"
      style={{ backgroundColor: this.props.color }}
    >
      {this.props.value} (<span data-testid="count">{this.renderCount}</span> render/s)
    </li>
    );
  }
}
