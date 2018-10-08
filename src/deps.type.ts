import { Server } from 'http';

type Argv = string[];
type Exit = (code?: number) => never;
type Cwd = () => string;

export interface IProcessArgv {
  argv: Argv;
}
export interface IProcessExit {
  exit: Exit;
}

export interface IProcessCwd {
  cwd: Cwd;
}

export type Process = IProcessArgv & IProcessCwd & IProcessExit;

type LogError = (...error: any[]) => void;
type Log = (...message: any[]) => void;

export interface IErrorLogger {
  error: LogError;
}
export interface ILogLogger {
  log: Log;
}

export type Logger = IErrorLogger & ILogLogger;

export type ListenServer = (
  port: number,
  hostname: string,
  callback?: (error: any) => void,
) => Server;

export interface IExpress {
  listen: ListenServer;
}

type File = string | number | Buffer;

interface IReadFileOptionsObject {
  encoding: string;
  flag?: string;
}

type ReadFileOptions = IReadFileOptionsObject | string;

export type ReadFile = (
  file: File,
  options: ReadFileOptions,
) => Promise<string>;

export interface IPath {
  isAbsolute(path: string): boolean;
  join(...paths: string[]): string;
}
