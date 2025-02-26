import '@/global.css'
import { definePageConfig, defineRunApp } from './type-defines';
import { Link, Outlet, useParams, useSearchParams, useLocation, useData, useConfig, useNavigate } from '@ice/runtime/router';
import { defineAppConfig, useAppData, history, KeepAliveOutlet, useMounted, ClientOnly, withSuspense, useSuspenseData, usePublicAppContext as useAppContext, Await, defineDataLoader, defineServerDataLoader, defineStaticDataLoader, usePageLifecycle, unstable_useDocumentData } from '@ice/runtime';
import * as webModule1 from '@ice/runtime';
import type { MetaType, TitleType, LinksType, ScriptsType, DataType, MainType} from '@ice/runtime';

let Meta: MetaType;
let Title: TitleType;
let Links: LinksType;
let Scripts: ScriptsType;
let Data: DataType;
let Main: MainType;
let usePageAssets: any;
if (import.meta.target === 'web') {
  Meta = webModule1.Meta;
  Title = webModule1.Title;
  Links = webModule1.Links;
  Scripts = webModule1.Scripts;
  Data = webModule1.Data;
  Main = webModule1.Main;
  usePageAssets = webModule1.usePageAssets;
}
      

export {
  definePageConfig,
  defineRunApp,
  Link,
  Outlet,
  useParams,
  useSearchParams,
  useLocation,
  useData,
  useConfig,
  useNavigate,
  defineAppConfig,
  useAppData,
  history,
  KeepAliveOutlet,
  useMounted,
  ClientOnly,
  withSuspense,
  useSuspenseData,
  useAppContext,
  Await,
  defineDataLoader,
  defineServerDataLoader,
  defineStaticDataLoader,
  usePageLifecycle,
  unstable_useDocumentData,  Meta,
  Title,
  Links,
  Scripts,
  Data,
  Main,
  usePageAssets
};

export * from './types';
