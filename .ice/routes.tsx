import { createRouteLoader, WrapRouteComponent, RouteErrorComponent } from '@ice/runtime';
import type { CreateRoutes } from '@ice/runtime';
const createRoutes: CreateRoutes = ({
  requestContext,
  renderMode,
}) => ([
  {
    path: '',
    async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_layout" */ '@/pages/layout');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'layout',
          isLayout: true,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'layout',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
    errorElement: <RouteErrorComponent />,
    componentName: 'layout',
    index: undefined,
    id: 'layout',
    exact: true,
    exports: ["default"],
    layout: true,
    children: [{
      path: '',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_index" */ '@/pages/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: '/',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: '/',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'index',
      index: true,
      id: '/',
      exact: true,
      exports: ["default","pageConfig"],
    },]
  },
]);
export default createRoutes;
