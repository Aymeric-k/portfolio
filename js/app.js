const commercial = document.querySelector('#commercial');
const displayDetails = document.querySelector('.detailsbox');
const cora = document.querySelector('#employerayon');
const allDetails = document.querySelectorAll('button');
const photo = document.querySelector('#montagephoto');
const stage = document.querySelector('#stageDbi');
const usine = document.querySelector('#usine');
const points = document.querySelectorAll(".point")

function removeActiveClass() {
  allDetails.forEach((detail) => {
    if (detail.classList.contains('active')) {
      detail.classList.remove('active');
    }
    if(displayDetails.classList.contains('detailsCor')){
      displayDetails.classList.remove('detailsCor');
    }
    if(displayDetails.classList.contains('detailsCom')){
      displayDetails.classList.remove('detailsCom');
    }
    if(displayDetails.classList.contains('detailsUsi')){
      displayDetails.classList.remove('detailsUsi');
    }
    if(displayDetails.classList.contains('detailsPho')){
      displayDetails.classList.remove('detailsPho');
    }
    if(displayDetails.classList.contains('detailsSta')){
      displayDetails.classList.remove('detailsSta');
    }
    if(displayDetails.classList.contains('detailsSta')){
      displayDetails.classList.remove('detailsSta');
    }
  });
}
function removeActivePoint() {
  points.forEach((point) => {
    if (point.classList.contains('point2013On')) {
      point.classList.remove('point2013On');
    }
    if (point.classList.contains('point2014On')) {
      point.classList.remove('point2014On');
    }
    if (point.classList.contains('point2015On')) {
      point.classList.remove('point2015On');
    }
    if (point.classList.contains('point2016On')) {
      point.classList.remove('point2016On');
    }
    if (point.classList.contains('point2017On')) {
      point.classList.remove('point2017On');
    }
    if (point.classList.contains('point2018On')) {
      point.classList.remove('point2018On');
    }
    if (point.classList.contains('point2019On')) {
      point.classList.remove('point2019On');
    }
    if (point.classList.contains('point2020On')) {
      point.classList.remove('point2020On');
    }
    if (point.classList.contains('point2021On')) {
      point.classList.remove('point2021On');
    }
    if (point.classList.contains('point2022On')) {
      point.classList.remove('point2022On');
    }
    if (point.classList.contains('point2023On')) {
      point.classList.remove('point2033On');
    }
    if (point.classList.contains('miniBarre20202021On')) {
      point.classList.remove('miniBarre20202021On');
    }
    if (point.classList.contains('miniBarre20132020On')) {
      point.classList.remove('miniBarre20132020On');
    }
  }
)}

commercial.addEventListener('click', () => {
  removeActiveClass();
  removeActivePoint();
  const yearStart=document.querySelector(".point2020");
  const yearEnd=document.querySelector(".point2021");
  const segment=document.querySelector(".miniBarre20202021")
  segment.classList.add('miniBarre20202021On')
  yearStart.classList.add('point2020On');
  yearEnd.classList.add('point2021On');
  displayDetails.innerHTML = ' ';
  displayDetails.classList.add('detailsCom');
  displayDetails.classList.add('animate');
  setTimeout(() => {
    displayDetails.classList.remove('animate');
  }, 2000);
  displayDetails.innerHTML = "<h5>Commercial VRP</h5><ul><li>Gérer un portefeuille client</li><li>Mener un entretien de vente</li><li>Générer des ventes</li>";
  commercial.classList.add('active');
});

cora.addEventListener('click', () => {
  removeActiveClass();
  removeActivePoint();
  const yearStart=document.querySelector(".point2013");
  const yearInBetween1 = document.querySelector(".point2014")
  const yearInBetween2 = document.querySelector(".point2015")
  const yearInBetween3 = document.querySelector(".point2016")
  const yearInBetween4 = document.querySelector(".point2017")
  const yearInBetween5 = document.querySelector(".point2018")
  const yearInBetween6 = document.querySelector(".point2019")
  const yearEnd=document.querySelector(".point2020");
  const segment=document.querySelector(".miniBarre20132020")
  yearInBetween1.classList.add("point2014On")
  yearInBetween2.classList.add("point2015On")
  yearInBetween3.classList.add("point2016On")
  yearInBetween4.classList.add("point2017On")
  yearInBetween5.classList.add("point2018On")
  yearInBetween6.classList.add("point2019On")
  segment.classList.add('miniBarre20132020On')
  yearStart.classList.add('point2013On');
  yearEnd.classList.add('point2020On');
  displayDetails.innerHTML = ' ';
  displayDetails.classList.add('detailsCor');
  displayDetails.classList.add('animate');
  setTimeout(() => {
    displayDetails.classList.remove('animate');
  }, 2000);
  displayDetails.innerHTML = "<h5>Employé Commercial</h5><ul><li>Mise en rayon</li><li>Gestion du stocks</li><li>Mise en place de foire aux vins</li>";
  cora.classList.add('active');
});
photo.addEventListener('click', () => {
  removeActiveClass();
  removeActivePoint();
  const year=document.querySelector(".point2015");
  year.classList.add('point2015On');
  displayDetails.innerHTML = ' ';
  displayDetails.classList.add('detailsPho');
  displayDetails.classList.add('animate');
  setTimeout(() => {
    displayDetails.classList.remove('animate');
  }, 2000);
  displayDetails.innerHTML = "<h5>Assistant en pilotage drone/Montage photo</h5><ul><li>Assistanat lors du pilotage </li><li>Montage photo sur photoshop</li>";
  photo.classList.add('active');
});
stage.addEventListener('click', () => {
  removeActiveClass();
  removeActivePoint();
  const year=document.querySelector(".point2022");
  year.classList.add('point2022On');
  displayDetails.innerHTML = ' ';
  displayDetails.classList.add('detailsSta');
  displayDetails.classList.add('animate');
  setTimeout(() => {
    displayDetails.classList.remove('animate');
  }, 2000);
  displayDetails.innerHTML = "<h5>Stagiaire</h5><ul><li>Conception d'un site vitrine Wordpress</li><li>Mise en place d'une carte interactive</li><li>Génération d'espace client</li>";
  stage.classList.add('active');
});
usine.addEventListener('click', () => {
  removeActiveClass();
  removeActivePoint();
  const year=document.querySelector(".point2022");
  year.classList.add('point2022On');
  displayDetails.innerHTML = ' ';
  displayDetails.classList.add('detailsUsi');
  displayDetails.classList.add('animate');
  setTimeout(() => {
    displayDetails.classList.remove('animate');
  }, 1000);
  displayDetails.innerHTML = "<h5>Agent de production</h5><ul><li>Nettoyage / Démontage d'une ligne de production</li><li>Gestion d'une équipe</li><li>Assistance au conducteur de ligne</li>";
  usine.classList.add('active');
});