function formatCurrency(amount) {
    // Convert the number to a string and remove any existing commas
    const numberString = amount.toString().replace(/,/g, '');

    // Format the number with commas and IDR currency symbol
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(numberString);
  }

export {
    formatCurrency
};