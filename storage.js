const localStorageAdd = ()=> {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // localStorage.setItem(name, email)
    // ekhon ekhane ekta twist ache seta hosce ami jdi kono object ke LOCALSTORAGE e set korte cai tahole seta JSON kore tarpor Stringyfy kore rakhte hobe, nahole seta console e object object dekhabe!

    const data = {name, email};
}