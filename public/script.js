const fetchAllPets = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/pets");
    const pets = await response.json();
    return pets;
  } catch (err) {
    console.error("Uh oh, trouble fetching Pets!", err);
  }
};

const row = document.getElementById("row");

const renderData = (pets) => {
  try {
    pets.forEach((pet) => {
      const cols = document.createElement("div");
      const card = document.createElement("div");
      const cardBody = document.createElement("div");

      const cardTitle = document.createElement("h5");
      const cardSubTitle = document.createElement("h6");
      const cardText = document.createElement("p");

      cols.classList.add("col-md-4");
      card.classList.add("card");
      cardBody.classList.add("card-body");

      cardTitle.classList.add("card-title");
      cardSubTitle.classList.add("card-subtitle");
      cardSubTitle.classList.add("mb-2");
      cardSubTitle.classList.add("text-muted");
      cardText.classList.add("card-text");

      cardTitle.innerText = pet.name;
      cardSubTitle.innerText = pet.breed;
      cardText.innerText = `owner: ${pet.owner}, age: ${pet.age}, phone: ${pet.telephone}`;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardSubTitle);
      cardBody.appendChild(cardText);

      card.appendChild(cardBody);
      cols.appendChild(card);

      row.appendChild(cols);
    });
  } catch (err) {
    console.error("Uh oh, trouble rendering Pets!", err);
  }
};

const init = async () => {
  const data = await fetchAllPets();
  renderData(data);
};

init();
