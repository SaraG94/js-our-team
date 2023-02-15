//prendere elemento dal dom
let idMember = document.getElementById('team-members');

//creare oggetto 
const teamMember = {
   fullName : 'Wayne Barnett',
   businessRole : 'Founder & CEO',
   pictureProfile : 'wayne-barnett-founder-ceo.jpg'
}

//creiamo array con indicazioni fornite
const teamMembers = [
    teamMember,
    {  
        fullName : 'Angela Caroll',
        businessRole : 'Chief Editor',
        pictureProfile : 'angela-caroll-chief-editor.jpg'
    },
    {  
        fullName : 'Walter Gordon',
        businessRole : 'Office Manager',
        pictureProfile : 'walter-gordon-office-manager.jpg'
    },
    {  
        fullName : 'Angela Lopez',
        businessRole : 'Social Media Manager',
        pictureProfile : 'angela-lopez-social-media-manager.jpg'
    },
    {  
        fullName : 'Scott Estrada',
        businessRole : 'Developer',
        pictureProfile : 'scott-estrada-developer.jpg'
    },
    {  
        fullName : 'Barbara Ramos',
        businessRole : 'Graphic Designer',
        pictureProfile : 'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(teamMembers);

//Stampare su console, per ogni membro del team: nome, ruolo e la stringa della foto (ciclo for in);

for (let key in teamMembers){
    console.log(key)
    let member = teamMembers[key];
    let fullName = member.fullName;
    let businessRole = member.businessRole;
    let pictureProfile = member.pictureProfile;

    console.log(fullName,businessRole,pictureProfile);  

    //Stampare le stesse informazioni su DOM sotto forma di stringhe
    const cardId = `
    <div class='card'>
        <div class='card-descrition'>
            <h2 class="name-member">${fullName}</h2>
            <p class="role">${businessRole}</p>
        </div>
        <div class="card-img">
            ${pictureProfile}
        </div>
    </div>
    `
    idMember.innerHTML += cardId;
}

//for (let i = 0; i < teamMembers.length; i++){
//    let member = teamMembers[i];
//    console.log(member);
//
//    let fullName = member.fullName
//    let businessRole = member.businessRole
//    let pictureProfile = member.pictureProfile
//
//    console.log(fullName,businessRole,pictureProfile);
//}

//for (let i = 0; i < teamMembers.length; i++){     SOLUZIONE CICLO FOR IN FER CICLARE OGGETTI
//    let member = teamMembers[i];
//    for(let key in member){
//      let value = member[key];
//      console.log( key, ':', value);
//    }
//}