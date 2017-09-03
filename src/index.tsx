import React from 'react';
import injectSheet from 'react-jss';

enum OutputShape {
  Hexagonal = 1,
  Round,
  Square,
}

type Color = string;
type OutputType = 'String';

type BlockMessage = string;

interface BlockArg {
  type: 'field_input',
  name: string,
}

interface BlockProps {
  messages: BlockMessage[],
  args: BlockArg[],
  output: OutputType,
  shape: OutputShape,
  color: Color,
  colorSecondary: Color,
  colorTertiary: Color,
}

const roundStyles = {
  border: 'solid 1px red',
};

const styles = {
  Round: roundStyles,
};

type ComposedBlockProps =
  BlockProps &
  {
    classes: any
  };

class Block extends React.PureComponent<ComposedBlockProps, never> {
  render() {
    const {
      classes,
      messages,
      // args,
      // output,
      shape,
      color,
      // colorSecondary,
      // colorTertiary,
    } = this.props;

    return (
      <div style={{backgroundColor: color}} className={classes[OutputShape[shape]]}>
        {messages.map(message => (
          <span>{message}</span>
        ))}
      </div>
    );
  }
}

export default injectSheet(styles)(Block);