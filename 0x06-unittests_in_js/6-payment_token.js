function getPaymentTokenFromAPI(success) {
  return success
    ? Promise.resolve({ data: 'Successful response from the API' })
    : Promise.reject(new Error('Failed'));
}

module.exports = getPaymentTokenFromAPI;

