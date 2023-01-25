import { ResolveOptions } from 'webpack'
import { IBuildOptions } from './types/config'

export function buildResolve ({ paths }: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
