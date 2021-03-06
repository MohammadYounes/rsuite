import * as React from 'react';

import { AnimationEventProps } from '../@types/common';

export interface TransitionProps extends AnimationEventProps {
  /** Primary content */
  children?: React.ReactNode;

  /** Additional classes */
  className?: string;

  /** Show the component; triggers the enter or exit animation */
  in?: boolean;

  /** Unmount the component (remove it from the DOM) when it is not shown */
  unmountOnExit?: boolean;

  /** Run the enter animation when the component mounts, if it is initially shown */
  transitionAppear?: boolean;

  /** A Timeout for the animation */
  timeout?: number;

  /** CSS class or classes applied when the component is exited */
  exitedClassName?: string;

  /** CSS class or classes applied while the component is exiting */
  exitingClassName?: string;

  /** CSS class or classes applied when the component is entered */
  enteredClassName?: string;

  /** CSS class or classes applied while the component is entering */
  enteringClassName?: string;
}

export type CollapseDimension = 'height' | 'width';

export interface CollapseProps extends TransitionProps {
  /** The dimension used when collapsing */
  dimension?: CollapseDimension | (() => CollapseDimension);

  /** Function that returns the height or width of the animating DOM node */
  getDimensionValue?: (dimension: CollapseDimension, elem: Element) => number;

  /** ARIA role of collapsible element */
  role?: string;
}

export interface AnimationAPI {
  Fade: React.StatelessComponent<TransitionProps>;
  Collapse: React.StatelessComponent<CollapseProps>;
  Transition: React.StatelessComponent<TransitionProps>;
}

declare const Animation: AnimationAPI;

export default Animation;
