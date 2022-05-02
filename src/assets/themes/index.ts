import base from './base';
import test from './test';
import { Themes } from './models';

/**
 * Default application theme.
 */
export const DEFAULT_THEME: string = 'base';

export const themes: Themes = {
  base,
  test
};
