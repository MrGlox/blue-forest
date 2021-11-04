// initialisation d'une fonction
const fetchAPI = async () => {
  // async pour fonctionnement avec await
  try {
    // tenter de faire fonctionner le code suivant
    const res = await fetch(
      // lancer le fetch et attendre le résultat
      "https://baconipsum.com/api/?type=meat-and-filler"
    );

    // console.log(res); // Vérification de la réponse

    const data = await res.json(); // Parse de la data json en objet
    document.querySelector(".lorem").innerHTML = data; // Injection dans le HTML
  } catch (err) {
    throw err; // Gestion de l'erreur
  }
};

fetchAPI();

/**
 * Ancienne syntaxe
 */
// const result = fetch("https://baconipsum.com/api/?type=meat-and-filler")
//   .then(function (res) {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);

//     document.querySelector(".lorem").innerHTML = data;

//     return data;
//   })
//   .catch((err) => {
//     throw err;
//   });

// console.log(fetchAPI);
