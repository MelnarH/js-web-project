const CourseCard = (id, title) => {
  const card = document.createElement("div");
  card.id = id;

  card.innerHTML = `
    <img src="/javascript.svg" />
    <span>${title}</span>
  `;

  return card;
};

export default CourseCard;
