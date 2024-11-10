class Utility {
  
    async priceInNumber(value) {
      const price = parseFloat(value.replace(/[$,]/g, ""));
      return price;
    }
  
      async priceInNumberWithoutTax(value) {
        const price = parseFloat(value.replace(/[Item total: $,]/g, ""));
        return price;
      }
  
      async priceInNumberWithTax(value) {
        const price = parseFloat(value.replace(/[Total: $,]/g, ""));
        return price;
      }
  }
  
  module.exports = new Utility();