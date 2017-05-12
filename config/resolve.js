module.exports = function generateWebpackResolve(/* env*/) {
  return {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  };
};
