export type Employee = {
  email: string;
  phoneNumber: string;
  forename: string;
  surname: string;
  profileImage: string;
  title: string;
  department: {
    name: string;
  };
};
