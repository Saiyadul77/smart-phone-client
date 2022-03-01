const searchPhone = () => {
    const phoneName = document.getElementById('phone-name');
    const phone = phoneName.value;
    phoneName.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`


    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data));
}

const displayPhone = (phones) => {
    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone)
    })
}