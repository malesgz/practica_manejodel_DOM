let container = document.getElementById("cardContainer");

let info = [{ img: "https://pics.filmaffinity.com/little_women-778503384-mmed.jpg", title: "Mujercitas", description: "Mujercitas - en inglés Little Women es una película dramática estadounidense de 2019 escrita y dirigida por Greta Gerwig. Protagonizada por Saoirse Ronan, como Jo March –junto a Emma Watson, Florence Pugh, Eliza Scanlen, Laura Dern, Timothée Chalamet, Meryl Streep, Tracy Letts, Bob Odenkirk, James Norton, Louis Garrel y Chris Cooper–, narra la vida de las hermanas Meg, Jo, Amy y Beth March, en Concord, Massachusetts, durante el siglo xix. Es la séptima adaptación cinematográfica de la novela homónima de 1868 de Louisa May Alcott." },
{ img: "https://img.ecartelera.com/noticias/fotos/72900/72906/1.jpg", title: "Barbie", description: "Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, Barbie parte hacia el mundo humano para encontrar la verdadera felicidad." },
    { img: "https://i.ytimg.com/vi/yBIPcwJ03V4/movieposter.jpg", title: "Lady Bird", description: "Marion McPherson, una enfermera de California, trabaja incansablemente para sustentar a su familia desde que su esposo quedó desempleado. Marion tiene problemas con su hija adolescente, de inclinaciones artísticas y temperamento fuerte." }, 
    {img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c3a52e72995d69e18289bafeadd6d91dd40bbe4c761e43ecc0c61307a095d8e5._RI_TTW_.jpg", title: "Mujeres del siglo XXI", description: "Dorothea Fields es una mujer soltera que se encuentra en sus cincuentas criando a su hijo adolescente, Jamie, en un momento cultural ambientado por la rebeldía. Dorothea consigue que dos mujeres jóvenes la ayuden a educar a su hijo."}];
            

info.forEach(peliculas=> {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let newImg = document.createElement("img");
    newImg.src = peliculas.img;
    newImg.width = "imagen";

    let newText = document.createElement("div");
    newText.classList.add("cardText");
    let newTitle = document.createElement("h1");
    newTitle.textContent = peliculas.title;
    let newDescription = document.createElement("p");
    newDescription.textContent = peliculas.description;
    newText.appendChild(newTitle)
    newText.appendChild(newDescription)

    newCard.appendChild(newImg)
    newCard.appendChild(newText)
    container.appendChild(newCard)
})