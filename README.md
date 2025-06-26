# Frontend Repository
Acest repository conține codul sursă pentru partea de frontend a aplicației web dedicate pacienților care suferă de cancer. Aplicația permite utilizatorilor să se conecteze într-o comunitate, să își împărtășească poveștile și să găsească sprijin emoțional din partea altor membri. Scopul principal este de a crea un spațiu sigur și încurajator pentru pacienți și familiile lor.

## Tehnologii utilizate
- **Frontend**: React, JavaScript, TypeScript
- **UI Kit**: Mantine
- **Autentificare**: JSON Web Tokens (JWT)
- **Rute protejate**: Acces restricționat după logare
- **Hosting**: backend hostat pe Railway
- **Bază de date**: Azure
  
## Funcționalități
- Autentificare și înregistrare: Utilizatorii își pot crea conturi și se pot autentifica folosind JWT. Formularele sunt validate în timp real, iar mesajele de eroare sunt afișate pentru câmpurile invalide.
- Interacțiune cu backend-ul: Frontend-ul folosește `axios` pentru a trimite cereri HTTP către backend, gestionând operații CRUD.
- Rute protejate
- Interfață prietenoasă: Interfața este construită folosind Mantine UI Kit

## Structură proiect 
- src/components/: conține componentele React.
- src/pages/: conține paginile aplicației.
- src/assets/: contine resurse statice, cum ar fi imagini, icons
