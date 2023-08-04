var modal = document.getElementById("myModal");

const map = document.querySelector("map");
map.addEventListener("click", popupModal);

function popupModal(event) {
    event.preventDefault();  // assuming no link action to be taken
    const area = event.target;
    const title = area.getAttribute("title");
    let land='',capital='',lang='',population=0;
    switch(title){
        case 'tamilnadu':
            land = '130,060 sq km'
            capital = 'Chennai'
            lang = 'Tamil'
            population = 72147030
            break
        case 'kerala':
            land = '38,863 sq km'
            capital = 'Thiruvananthapuram'
            lang = 'Malayalam'
            population = 34630192
            break
        case 'andhra_pradesh':
            land = '162,970 sq km'
            capital = 'Amaravati'
            lang = 'Telugu'
            population = 49577103
            break
        case 'karnataka':
            land = '191,791 sq km'
            capital = 'Bangalore'
            lang = 'Kannada'
            population = 61103740
            break
        case 'goa':
            land = '3,702 sq km'
            capital = 'Panaji'
            lang = 'Konkani'
            population = 1458545
            break
        case 'telangana':
            land = '112,077 sq km'
            capital = 'Hyderabad'
            lang = 'Telugu'
            population = 35003674
            break
        case 'odisha':
            land = '155,707 sq km'
            capital = 'Bhubaneswar'
            lang = 'Odia'
            population = 41974218
            break
        case 'chhattisgarh':
            land = '135,192 sq km'
            capital = 'Raipur'
            lang = 'Hindi'
            population = 29436231
            break
        case 'maharashtra':
            land = '307,713 sq km'
            capital = 'Mumbai'
            lang = 'Marathi'
            population = 112374333
            break
        case 'gujarat':
            land = '196,024 sq km'
            capital = 'Gandhinagar'
            lang = 'Gujarati,Hindi'
            population = 60439692
            break
        case 'madhya_pradesh':
            land = '308,252 sq km'
            capital = 'Bhopal'
            lang = 'Hindi'
            population = 72626809
            break
        case 'rajasthan':
            land = '342,239 sq km'
            capital = 'Jaipur'
            lang = 'Hindi'
            population = 68548437
            break
        case 'uttar_pradesh':
            land = '2,40,928 sq km'
            capital = 'Lucknow'
            lang = 'Hindi,Urdu'
            population = 199581477
            break
        case 'bihar':
            land = '94,163 sq km'
            capital = 'Patna'
            lang = 'Hindi'
            population = 104099452
            break
        case 'jharkhand':
            land = '79,714 sq km'
            capital = 'Ranchi'
            lang = 'Hindi'
            population = 32988134
            break
        case 'west_bengal':
            land = '88,752 sq km'
            capital = 'Kolkata'
            lang = 'Bengali'
            population = 91347736
            break
        case 'sikkim':
            land = '7,096 sq km'
            capital = 'Gangtok'
            lang = 'Nepali,Sikkimese'
            population = 610577
            break
        case 'assam':
            land = '78,438 sq km'
            capital = 'Dispur'
            lang = 'Assamese,Boro'
            population = 31169272
            break
        case 'meghalaya':
            land = '22,429 sq km'
            capital = 'Shillong'
            lang = 'English'
            population = 2964007
            break
        case 'tripura':
            land = '10,491 sq km'
            capital = 'Agartala'
            lang = 'Bengali,Kokborok'
            population = 4147000
            break
        case 'mizoram':
            land = '21,081 sq km'
            capital = 'Aizawl'
            lang = 'Mizo'
            population = 1091014
            break
        case 'manipur':
            land = '22,327 sq km'
            capital = 'Imphal'
            lang = 'Manipuri'
            population = 2721756
            break
        case 'nagaland':
            land = '16,579 sq km'
            capital = 'Kohima'
            lang = 'English'
            population = 1980602
            break
        case 'arunachal_pradesh':
            land = '83,743 sq km'
            capital = 'Itanagar'
            lang = 'English'
            population = 1382611
            break
        case 'delhi':
            land = '1,484 sq km'
            capital = 'New Delhi'
            lang = 'Hindi'
            population = 16787941
            break
        case 'haryana':
            land = '44,212 sq km'
            capital = 'Chandigarh'
            lang = 'Hindi,Punjabi'
            population = 25351462
            break
        case 'punjab':
            land = '50,362 sq km'
            capital = 'Chandigarh'
            lang = 'Punjabi'
            population = 27704236
            break
        case 'uttarakhand':
            land = '53,483 sq km'
            capital = 'Dehradun'
            lang = 'Hindi'
            population = 10086292
            break
        case 'himachal_pradesh':
            land = '55,673 sq km'
            capital = 'Shimla'
            lang = 'Hindi,Pahari'
            population = 6856509
            break
        case 'jammu_and_kashmir':
            land = '42,241 sq km'
            capital = 'Srinagar'
            lang = 'Hindi,Kashmiri'
            population = 12267013
            break                             
    }
    document.getElementById('state').innerHTML = title.toUpperCase().split('_').join(' ')
    document.getElementById('area').innerHTML = "Area : "+land
    document.getElementById('cap').innerHTML = "Capiatal : " +capital
    document.getElementById('lang').innerHTML = "Language : "+lang
    document.getElementById('pop').innerHTML = "Population : "+population
    modal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}