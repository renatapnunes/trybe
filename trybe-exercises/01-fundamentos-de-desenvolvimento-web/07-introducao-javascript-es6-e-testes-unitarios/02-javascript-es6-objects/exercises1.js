// ------------------------------------------- BLOCO 7 - DAY 2: JavaScript EC6 - Objects ---------------------------------------

// --------------------------------------------------------- Part I ------------------------------------------------------------

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };


/* Exercicio 1
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira,
entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
    - Note que o parâmetro da função já está sendo passado na chamada da função. */


  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson},
    entrega para: ${order.name}, Telefone: ${order.phoneNumber}
    R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
  }
  
  customerInfo(order);


/* Exercicio 2
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella,
calabresa e Coca-Cola Zero é R$ 50,00."
    - Modifique o nome da pessoa compradora.
    - Modifique o valor total da compra para R$ 50,00. */

    
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    let pizza = {
        muzzarella: {
            amount: 1,
            price: 20
        },
        calabresa: {
            amount: 1,
            price: 15
        }
    }
    order.order.pizza = pizza;
    order.payment.total = (order.order.pizza.muzzarella.price + order.order.pizza.calabresa.price + order.order.drinks.coke.price + order.order.delivery.price);
    console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total},00.`);
  }
  
  orderModifier(order);