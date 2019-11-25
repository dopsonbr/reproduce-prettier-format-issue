module.exports = {
  name: 'reproduce',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/reproduce',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
