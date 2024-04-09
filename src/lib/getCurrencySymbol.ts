const getCurrencySymbol = (currencyCode: string): string => {
    const currencySymbols: Record<string, string> = {
      USD: "$", // United States Dollar
      EUR: "€", // Euro
      JPY: "¥", // Japanese Yen
      GBP: "£", // British Pound Sterling
      AUD: "A$", // Australian Dollar
      CAD: "C$", // Canadian Dollar
      CHF: "CHF", // Swiss Franc
      CNY: "¥", // Chinese Yuan
      HKD: "HK$", // Hong Kong Dollar
      MXN: "MX$", // Mexican Peso
      SGD: "S$", // Singapore Dollar
    };
  
    return currencySymbols[currencyCode] || currencyCode;
  };
  
  export default getCurrencySymbol;