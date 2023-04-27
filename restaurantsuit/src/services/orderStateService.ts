class OrderStateService {
  returnStatus = (status: number) => {
    switch (status) {
      case 0:
        return "Em espera";
      case 1:
        return "Em preparação";
      case 2:
        return "Pronto";
      case 3:
        return "Na mesa";
    }
  };
}

export default new OrderStateService();
