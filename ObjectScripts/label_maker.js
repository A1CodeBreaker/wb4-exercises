const Myinfo = {
    name: "Tony Stark",
    address: "Malibu Point",
    city: "Los Angeles",
    state: "CA",
    zip: "10880",

};

const yourInfo = {
    name: 'Pursalane Faye',
    address: "123 Main St.",
    city: 'Benbrook',
    state: 'TX',
    zip: '76126',
  };
  

function printContact(info) {
    console.log(info.name);
    console.log(info.address);
    console.log(info.city, info.state, info.zip);
  }
  
  printContact(myInfo);
  console.log('');
  printContact(yourInfo);