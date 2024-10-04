export const LoginValidation={
    initialValues:{
        mode: 'uncontrolled',
        email:'',
        parola:'',
    },
    validate: {
        email: (value:string ) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        parola: (val:string) => (val.length <= 6 ? 'Parola trebuie sa contina minim 6 caractere' : null),
      },
};