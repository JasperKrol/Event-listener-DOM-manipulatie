// //opdracht 1
// let userInput = ""
//
//         // opdracht 4 show all currencies
//         function getAllCurrencies(currency) {
//             let currencies = ""
//
//             for (let i = 0; i < currency.length; i++) {
//                 const currentCurrency = currency[i].name
//
//                 currencies = currencies + `and you can pay with ${currentCurrency}'s `
//             }
//             return currencies
//         }
//
//         // opdracht 6 Talen
//         function getLanguages(languages) {
//             let output = ""
//
//             for (let i = 0; i < languages.length; i++) {
//                 const currentLanguage = languages[i].name
//                 // console.log("current taal", currentLanguage)
//                 output = output + `${currentLanguage} `
//             }
//             return output
//         }


async function getCountryInformation() {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${userInput}`);
        console.log(response.data);
        const countryName = response.data[0].name;
        const subareaName = response.data[0].subregion;
        const capitalName = response.data[0].capital;
        const countryFlag = response.data[0].flag
        const currencies = (response.data[0].currencies);

        let countryCurrencies = "";
        currencyString(currencies);

        function currencyString(currencies) {

            if (currencies.length < 2) {
                countryCurrencies = `and you can pay with ${response.data[0].currencies[0].name}'s`;
            } else {
                countryCurrencies = `and you can pay with ${response.data[0].currencies[0].name}'s and ${response.data[0].currencies[1].name}'s`;
            }
            return countryCurrencies;
        };

        const countryFlagElement = document.getElementById("flag-image");
        countryFlagElement.setAttribute('src', countryFlag);

        const countryNameElement = document.getElementById("country-name");
        countryNameElement.textContent = `${countryName}`;

        const countryInfoElement = document.getElementById("country-info");
        countryInfoElement.textContent = `${countryName} is situated in ${subareaName}. 
    The capital is ${capitalName} ${countryCurrencies}.`;

        searchElement.value = "";
        const errorMessageElement = document.getElementById("error-field");
        errorMessageElement.textContent = "";
    }
    catch (e) {
        console.log("error");
        const errorMessageElement = document.getElementById("error-field");
        errorMessageElement.textContent = "This is an invalid search input. Please, search for an existing country.";
    }
};


const searchElement = document.getElementById("search-input")
searchElement.addEventListener("keyup", (e) => {
    if (e.key === 'Enter'){
        userInput = e.target.value;
        getCountryInformation();
    }
});

const searchInfoButton = document.getElementById("search-button");
searchInfoButton.addEventListener("click", getInputValue);

function getInputValue(){
    userInput = document.getElementById("search-input").value;
    getCountryInformation();
}

