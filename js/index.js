document.getElementById('error-message').style.display = 'none';
const searchPhone = () => {
    const phoneName = document.getElementById('phone-name');
    const phone = phoneName.value;
    phoneName.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (phone == '') {
        document.getElementById('error-message').style.display = 'block';
    }
    else {

        const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`

        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data))
            .catch(error => displayError(error));
    }

}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displayPhone = (phones) => {
    const phoneDetails = document.getElementById('phone-details')
    phoneDetails.textContent = '';
    if (phones.length == 0) {
        return alert('No result found');
    }
    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <img src="${phone.image}" class="card-img-top w-75 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                    <h5 class="card-title">Brand Name: ${phone.brand}</h5>
                </div>
                <button onclick="phoneExplore('${phone.slug}')"  type="button" class="btn btn-primary px-5 mb-5">Details</button>
        `
        phoneDetails.appendChild(div)
    })
}

const phoneExplore = explore => {
    const url = `https://openapi.programming-hero.com/api/phone/${explore}`;
    fetch(url)
        .then(res => res.json())
        .then(product => phoneDetailsInformation(product.data));
}

const phoneDetailsInformation = mobile => {
    console.log(mobile)
    const singlePhone = document.getElementById('single-phone');
    const div = document.createElement('div');
    console.log(div);
    div.classList.add('card');
    div.innerHTML = `
        <img src="${mobile.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
                <h3 class="card-title">Phone Name:${mobile.name}</h3>
                <h4 class="card-title">Release Date:${mobile.releaseDate}</h4>
                <h4 class="card-title">Brand Name: ${mobile.brand}</h4>
                <h5 class="card-title">Storage: ${mobile.mainFeatures.storage}</h5>
                <h5 class="card-title">Display Size: ${mobile.mainFeatures.displaySize}</h5>
                <h5 class="card-title">Chipset: ${mobile.mainFeatures.chipSet}</h5>
                <h5 class="card-title">Memory: ${mobile.mainFeatures.memory}</h5>
                <h5 class="card-title">Sensors: ${mobile.mainFeatures.sensors}</h5>
                <h5 class="card-title">Others:<br>WLAN: ${mobile.others.WLAN} <br> GPS: ${mobile.others.GPS} <br> NFC: ${mobile.others.NFC}<br> Radio: ${mobile.others.Radio} <br>USB: ${mobile.others.USB}</h5>
            </div>
            
    `;
    singlePhone.appendChild(div);
}