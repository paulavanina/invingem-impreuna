# Frontend Repository
Acest repository conține codul sursă pentru partea de frontend a aplicației web dedicate pacienților care suferă de cancer. Aplicația permite utilizatorilor să se conecteze într-o comunitate, să își împărtășească poveștile și să găsească sprijin emoțional din partea altor membri. Scopul principal este de a crea un spațiu sigur și încurajator pentru pacienți și familiile lor.

##Tehnologii utilizate
- **Frontend**: React, JavaScript, TypeScript, HTML, CSS
- **UI Kit**: Mantine
- **Autentificare**: JSON Web Tokens (JWT)
- **Rute protejate**: Acces restricționat după logare
- **Hosting**: Frontend hostat pe Vercel, backend hostat pe Railway
- **Bază de date**: Azure
  
## Funcționalități
- Autentificare și înregistrare: Utilizatorii își pot crea conturi și se pot autentifica folosind JWT. Formularele sunt validate în timp real, iar mesajele de eroare sunt afișate pentru câmpurile invalide.
- Interacțiune cu backend-ul: Frontend-ul folosește `axios` pentru a trimite cereri HTTP către backend, gestionând operații precum înregistrarea, autentificarea și postările.
- Rute protejate: Doar utilizatorii autentificati pot accesa pagina "Contul meu" si posta bloguri.
- Vizualizare: Utilizatorii pot posta despre poveștile lor și pot vizualiza postările altor membri ai comunității.
- Interfață prietenoasă: Interfața este construită folosind Mantine UI Kit

## Structura proiect 
src/components/: conține componentele React.
src/pages/: conține paginile aplicației.
src/assets/: contine resurse statice, cum ar fi imagini, icons
