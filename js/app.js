console.log('ciao');

//creare oggetto 
const teamMember = {
   fullName : 'Wayne Barnett',
   businessRole : 'Founder & CEO',
   pictureProfile : 'wayne-barnett-founder-ceo.jpg'
}
//creiamo array con indicazioni fornite
const teamMembers = [
    teamMember,
    {  fullName : 'Angela Caroll',
        businessRole : 'Chief Editor',
        pictureProfile : 'angela-caroll-chief-editor.jpg'
    },
    {  fullName : 'Walter Gordon',
        businessRole : 'Office Manager',
        pictureProfile : 'walter-gordon-office-manager.jpg'
    },
    {  fullName : 'Angela Lopez',
        businessRole : 'Social Media Manager',
        pictureProfile : 'angela-lopez-social-media-manager.jpg'
    },
    {  fullName : 'Scott Estrada',
        businessRole : 'Developer',
        pictureProfile : 'scott-estrada-developer.jpg'
    },
    {  fullName : 'Barbara Ramos',
        businessRole : 'Graphic Designer',
        pictureProfile : 'barbara-ramos-graphic-designer.jpg'
    },
]
//Stampare su console, per ogni membro del team: nome, ruolo e la stringa della foto (ciclo for in);
//Stampare le stesse informazioni su DOM sotto forma di stringhe