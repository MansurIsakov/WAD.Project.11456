export interface IUniversity {
  id?: number;
  name: string;
  shortName: string;
  description: string;
  courses: string;
  rating: number;
  admission: string;
  scolarship: number;
  tuitionFee: number;
  establishedIn: number;
  image: string;
  location: string;
}

export class UniversityModel implements IUniversity {
  id?: number;
  name: string;
  shortName: string;
  description: string;
  courses: string;
  rating: number;
  admission: string;
  scolarship: number;
  tuitionFee: number;
  establishedIn: number;
  image: string;
  location: string;

  constructor(university: IUniversity) {
    this.id = university.id;
    this.name = university.name;
    this.shortName = university.shortName;
    this.description = university.description;
    this.courses = university.courses;
    this.rating = university.rating;
    this.admission = university.admission;
    this.scolarship = university.scolarship;
    this.tuitionFee = university.tuitionFee;
    this.establishedIn = university.establishedIn;
    this.image = university.image;
    this.location = university.location;
  }
}
