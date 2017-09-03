import React from 'react';
import ReactDOM from 'react-dom';
import Block, {OutputShape} from './block';

class Playground extends React.Component {
  render() {
    return (
      <span>
        <Block
          messages={['Test message']}
          color="yellow"
          shape={OutputShape.Round}
        />
        <Block
          messages={['Test message']}
          color="yellow"
          shape={OutputShape.Square}
        />
        <Block
          messages={['Test message']}
          color="yellow"
          shape={OutputShape.Hexagonal}
        />
      </span>
    );
  }
}

ReactDOM.render(<Playground />, document.getElementById('root'));