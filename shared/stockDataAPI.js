// Get Stock Suggestions - credits to '7kfpun/FinanceReactNative'
exports.suggestStock = function suggestStock(query) {
  const url = `http://d.yimg.com/aq/autoc?query=${query}&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks`;
  return fetch(url).catch(err => console.error(err));
};