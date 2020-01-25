/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Workflow,
} from './models';

export namespace Components {
  interface ElsaDesigner {
    'getWorkflow': () => Promise<Workflow>;
    'workflow': Workflow;
  }
  interface ElsaDesignerHost {}
}

declare global {


  interface HTMLElsaDesignerElement extends Components.ElsaDesigner, HTMLStencilElement {}
  var HTMLElsaDesignerElement: {
    prototype: HTMLElsaDesignerElement;
    new (): HTMLElsaDesignerElement;
  };

  interface HTMLElsaDesignerHostElement extends Components.ElsaDesignerHost, HTMLStencilElement {}
  var HTMLElsaDesignerHostElement: {
    prototype: HTMLElsaDesignerHostElement;
    new (): HTMLElsaDesignerHostElement;
  };
  interface HTMLElementTagNameMap {
    'elsa-designer': HTMLElsaDesignerElement;
    'elsa-designer-host': HTMLElsaDesignerHostElement;
  }
}

declare namespace LocalJSX {
  interface ElsaDesigner {
    'workflow'?: Workflow;
  }
  interface ElsaDesignerHost {}

  interface IntrinsicElements {
    'elsa-designer': ElsaDesigner;
    'elsa-designer-host': ElsaDesignerHost;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'elsa-designer': LocalJSX.ElsaDesigner & JSXBase.HTMLAttributes<HTMLElsaDesignerElement>;
      'elsa-designer-host': LocalJSX.ElsaDesignerHost & JSXBase.HTMLAttributes<HTMLElsaDesignerHostElement>;
    }
  }
}

