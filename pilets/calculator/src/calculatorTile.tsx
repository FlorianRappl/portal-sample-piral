import * as React from 'react';
import { Link } from 'react-router-dom';
import { PiletApi } from 'portal';

export interface CalculatorTileProps {
  rows: number;
  columns: number;
  piral: PiletApi;
}

export interface CalculatorTileState {
  x: string;
  y: string;
  res: number;
  temperature: number;
}

export class CalculatorTile extends React.Component<CalculatorTileProps, CalculatorTileState> {
  constructor(props: CalculatorTileProps) {
    super(props);
    const { piral } = props;
    this.state = {
      x: '0',
      y: '0',
      res: 0,
      temperature: piral.getData('temperature'),
    };
  }

  componentDidMount() {
    const { piral } = this.props;
    piral.on('temperature-changed', this.setTemperature);
  }

  componentWillUnmount() {
    const { piral } = this.props;
    piral.off('temperature-changed', this.setTemperature);
  }

  private setTemperature = ({ value }) => this.setState({
    temperature: value,
  });

  private changeX = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.calc(e.target.value, this.state.y);
  };

  private changeY = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.calc(this.state.x, e.target.value);
  };

  private calc(x: string, y: string) {
    const { piral } = this.props;
    const res = (+x || 0) + (+y || 0);
    this.setState({
      x,
      y,
      res,
    });

    piral.emit('calculated', {
      result: res,
    });
  }

  render() {
    const { x, y, res, temperature } = this.state;
    return (
      <div>
        <h3>Calculator (at {temperature} °C)</h3>
        <div><input value={x} onChange={this.changeX} /></div>
        <div>+</div>
        <div><input value={y} onChange={this.changeY} /></div>
        <div>=</div>
        <div><output>{res.toString()}</output></div>
        <div><Link to="/calculator/settings">Calculator settings</Link></div>
      </div>
    );
  }
}
