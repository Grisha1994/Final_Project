export const addOrder = (new_Order, setResp) => {
    fetch('http://localhost:3333/order/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(new_Order)
    })
    .then(res => res.json())
    .then(json => setResp(json))
  }