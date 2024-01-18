import { defineConfig } from 'unocss';

export default defineConfig({
  cli: {
    entry: {
      outFile: 'public/uno.min.css',
      patterns: ['src/**/*.tsx'],
    } satisfies CliEntryItem | CliEntryItem[],
  },
});

interface CliEntryItem {
  /**
   * Glob patterns to match files
   */
  patterns: string[];
  /**
   * The output filename for the generated UnoCSS file
   */
  outFile: string;
}
