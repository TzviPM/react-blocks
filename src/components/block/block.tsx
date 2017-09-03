import React from 'react';
import injectSheet, {ReactJssProps} from 'react-jss';

import styles from './block.styles';

export enum OutputShape {
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

export interface BlockProps {
  messages: BlockMessage[],
  args?: BlockArg[],
  output?: OutputType,
  shape?: OutputShape,
  color: Color,
  colorSecondary?: Color,
  colorTertiary?: Color,
}

type ComposedBlockProps =
  BlockProps &
  ReactJssProps;

class Block extends React.Component<ComposedBlockProps, never> {
  render() {
    const {
      classes,
      messages,
      // args,
      // output,
      shape = OutputShape.Round,
      color,
      // colorSecondary,
      // colorTertiary,
    } = this.props;

    return (
      <div style={{backgroundColor: color}} className={classes.base + ' ' + classes[OutputShape[shape]]}>
        {messages.map(message => (
          <span>{message}</span>
        ))}
      </div>
    );
  }
}

export default injectSheet<BlockProps>(styles)(Block);