const randomNum = Math.floor(Math.random() * 100); 

alert("Sizda hozir random sonlar chiqishini boshladi 🙂");

alert(`Random olingan son: ${randomNum} edi`);

alert(`Biz random sonni 2 ga ko'paytirmoqchi va bo'lamiz!`);

const multipliedBy2 = randomNum * 2;
const dividedBy2 = Math.floor(randomNum / 2);
const remainderBy3 = randomNum % 3;

alert(`Biz uning 2 ga bo'lib: ${dividedBy2} sonini chiqardik,`);
alert(`va shu sonni 3 ga bo'lgandagi qoldiq: ${remainderBy3} sonini chiqardik`);