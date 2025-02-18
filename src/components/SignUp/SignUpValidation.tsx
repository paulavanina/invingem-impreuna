export interface Isignup {
  nume: string;
  prenume: string;
  avatar: string;
  email: string;
  parola: string;
}
export const SignUpValidation = {
  initialValues: {
    mode: "uncontrolled",
    nume: "",
    prenume: "",
    email: "",
    avatar: "",
    parola: "",
  },
  validate: {
    nume: (value: string) =>
      value.length < 3 ? "NUmele trebuie sa aiba cel putin 3 litere" : null,
    prenume: (value: string) =>
      value.length < 3 ? "Prenumele trebuie sa aiba cel putin 3 litere" : null,
    email: (value: string) =>
      /^\S+@\S+$/.test(value) ? null : "Invalid email",
    parola: (val: string) =>
      val.length <= 6 ? "Parola trebuie sa contina minim 6 caractere" : null,
  },
};
