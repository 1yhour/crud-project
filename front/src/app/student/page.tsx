"use client";
import { useEffect, useState } from "react"
import axios from "axios";
import API from "@/service/api";

interface Course {
    id: number;
    name: string;
    description: string;
}

interface Student {
    id: number;
    name: string;
    email: string;
    courses: Course[];
}

export default function StudentPage() {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<Student[]>(`${API}/student`)
            .then((res) => {
                setStudents(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching students:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="container mx-auto p-4">Loading students...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Students List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.length > 0 ? (
                    students.map((student) => (
                        <div key={student.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{student.name}</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{student.email}</p>
                            
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Enrolled Courses</h3>
                                <div className="flex flex-wrap gap-2">
                                    {student.courses.length > 0 ? (
                                        student.courses.map((course) => (
                                            <span key={course.id} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded-md border border-blue-100 dark:border-blue-800">
                                                {course.name}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-xs text-gray-400 italic">No courses enrolled</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500">
                        No students found.
                    </div>
                )}
            </div>
        </div>
    );
}