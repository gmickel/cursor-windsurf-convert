import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index', 'src/cli'],
  declaration: 'node16',
  clean: true,
  rollup: {
    inlineDependencies: ['@antfu/utils', 'js-yaml'],
  },
});
