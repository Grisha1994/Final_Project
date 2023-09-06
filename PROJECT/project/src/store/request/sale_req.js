export const addSale = (new_Discount, setResp) => {
    // console.log(new_Discount);
    fetch('http://localhost:3333/sale/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(new_Discount)
    })
    .then(res => res.json())
    .then(json => setResp(json))
  }