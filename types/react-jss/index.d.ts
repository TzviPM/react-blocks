// Type definitions for react-jss
// Definitions by: Tzvi Melamed <tzvi.melamed.biz>
declare module 'react-jss' {
    export = ReactJss;
    
    function ReactJss(styles: Object): ReactJss.ReactDecorator;
    
    namespace ReactJss {
        export interface ReactDecorator {
            (component: React.ComponentType): React.Component,
        }
    }
}