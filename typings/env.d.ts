import type { vShow } from 'vue'

declare global {
  const process: {
    env: {
      NODE_ENV: string
      RUN_TEST_WITH_PERSISTENT: string
    }
  }

  namespace JSX {
    interface IntrinsicAttributes {
      class?: unknown
      style?: unknown
    }
  }
}

declare module 'vue' {
  export interface App {
  }

  export interface GlobalComponents {
    Component: (props: { is: Component | string }) => void
  }

  export interface ComponentCustomProperties {
    vShow: typeof vShow
  }
}

export {}
