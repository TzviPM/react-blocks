// Type definitions for react-jss
// Definitions by: Tzvi Melamed <tzvi.melamed.biz>
declare module 'react-jss' {
  export = ReactJss;

  function ReactJss<T>(styles: Object): ReactJss.ReactDecorator<T>;

  namespace ReactJss {
    export interface ReactDecorator<T> {
        (component: React.ComponentType<T>): React.ComponentType<T>,
    }

    export interface ReactJssProps {
      classes: any,
    }
  }
}