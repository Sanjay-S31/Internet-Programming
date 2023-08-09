var modal = document.getElementById("myModal");

const map = document.querySelector("map");
map.addEventListener("click", popupModal);

function popupModal(event) {
    event.preventDefault();  // assuming no link action to be taken
    const area = event.target;
    const title = area.getAttribute("title");
    let land='',capital='',lang='',content='',population=0;
    const img = document.querySelectorAll("img"); 
    switch(title){
        case 'tamilnadu':
            land = '130,060 sq km'
            capital = 'Chennai'
            lang = 'Tamil'
            population = 72147030
            content = 'Tamil Nadu is the southernmost state of India. The tenth largest Indian state by area and the sixth largest by population, Tamil Nadu is the home of the Tamil people, whose Tamil language—one of the longest surviving classical languages in the world—is widely spoken in the state and serves as its official language. The capital and largest city is Chennai.'
            img[1].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Statue_of_Thiruvalluvar.jpg/186px-Statue_of_Thiruvalluvar.jpg'
            break
        case 'kerala':
            land = '38,863 sq km'
            capital = 'Thiruvananthapuram'
            lang = 'Malayalam'
            population = 34630192
            content = 'Kerala is a state on the Malabar Coast of India. It was formed on 1 November 1956, following the passage of the States Reorganisation Act, by combining Malayalam-speaking regions of the erstwhile regions of Cochin, Malabar, South Canara, and Travancore. Spread over 38,863 km2 (15,005 sq mi), Kerala is the 21st largest Indian state by area.'
            img[1].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Munnar_hillstation_kerala.jpg/201px-Munnar_hillstation_kerala.jpg'
            break
        case 'andhra_pradesh':
            land = '162,970 sq km'
            capital = 'Amaravati'
            lang = 'Telugu'
            population = 49577103
            content = 'Andhra Pradesh is a state in the southern coastal region of India. It is the seventh-largest state with an area of 162,970 km2 (62,920 sq mi) and tenth-most-populous state, with 49,577,103 inhabitants. It has shared borders with Telangana, Chhattisgarh, Odisha, Tamil Nadu, Karnataka, and the Bay of Bengal. It has the second-longest coastline in India of about 974 km'
            img[1].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/A_View_of_Tirumala_Venkateswara_Temple.JPG/300px-A_View_of_Tirumala_Venkateswara_Temple.JPG'
            break
        case 'karnataka':
            land = '191,791 sq km'
            capital = 'Bangalore'
            lang = 'Kannada'
            population = 61103740
            content = 'Karnataka formerly Mysore State, is a state in the southwestern region of India. It was formed as the State of Mysore on 9 August 1947, by renaming of the Kingdom of Mysore, and renamed Karnataka in 1973. The state was part of the Carnatic region in British terminology. Its capital and largest city is Bengaluru (Bangalore).'
            img[1].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/413px-Mysore_Palace_Morning.jpg'
            break
        case 'goa':
            land = '3,702 sq km'
            capital = 'Panaji'
            lang = 'Konkani'
            population = 1458545
            content = 'Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is Indias smallest state by area and fourth-smallest by population.'
            img[1].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BeachFun.jpg/420px-BeachFun.jpg'
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
            content = 'Maharashtra is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau. It is bordered by the Indian union territory of Dadra and Nagar Haveli and Daman and Diu to the northwest. Maharashtra is the second-most populous state in India and the third-most populous country subdivision globally.'
            img[1].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/SBML9878-140422-BackBay_skyline.jpg/413px-SBML9878-140422-BackBay_skyline.jpg'
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
    document.getElementById('content').innerHTML = content
    
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
