function service() {
  const getAllProducts = () => {
    return fetch(
      'https://api.publicapis.org/entries',
      {
        method: "GET",
      }
    )
      .then((res) =>
        res.json())
      .then((data) =>
        data.entries)
      .catch((e) => e);
  };

  return {
    getAllProducts
  };
}

const product_service = service();

export default product_service;
