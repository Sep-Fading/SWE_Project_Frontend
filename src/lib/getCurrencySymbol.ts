const getCurrencySymbol = (currencyCode: string): string => {
    const currencySymbols: Record<string, string> = {
      USD: "$", // United States Dollar
      EUR: "€", // Euro
      JPY: "¥", // Japanese Yen
      GBP: "£", // British Pound Sterling
      AUD: "A$", // Australian Dollar
      CAD: "C$", // Canadian Dollar
      CHF: "₣", // Swiss Franc
      CNY: "¥", // Chinese Yuan
      HKD: "HK$", // Hong Kong Dollar
      MXN: "₱", // Mexican Peso
      INR: "₹", // Indian Rupee
      SGD: "S$", // Singapore Dollar
    };
  
    return currencySymbols[currencyCode] || currencyCode;
  };
  
  export default getCurrencySymbol;