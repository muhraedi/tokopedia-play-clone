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

function formatNumberWithKMT(number) {
  if (number >= 1e12) {
    return (number / 1e12).toFixed(1) + 'T';
  }
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + 'B';
  }
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + 'M';
  }
  if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + 'K';
  }
  return number.toString();
}

export {
    formatCurrency,
    formatNumberWithKMT
};