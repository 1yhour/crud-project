export interface Course {
    id: number;
    name: string;
    description: string;
}

export interface Student {
    id: number;
    name: string;
    email: string;
    courses: Course[];
}
