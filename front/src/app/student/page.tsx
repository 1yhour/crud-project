"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import API from "@/service/api";
import { Student } from "@/types";
import StudentList from "@/components/StudentList";

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

    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-black">
            {/* Header / Navbar section */}
            <header className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">EduManager</h1>
                            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 leading-none">Student Portal</p>
                        </div>
                    </div>
                    
                    <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                        Add New Student
                    </button>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                            Students Directory
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                            Manage and overview all registered students and their course enrollments.
                        </p>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 animate-pulse">
                                    <div className="flex justify-between mb-4">
                                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl"></div>
                                        <div className="w-16 h-4 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                    <div className="w-3/4 h-6 bg-gray-100 dark:bg-gray-800 rounded-lg mb-2"></div>
                                    <div className="w-1/2 h-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6"></div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <div className="w-20 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                            <div className="w-12 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-16 h-6 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                                            <div className="w-20 h-6 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <StudentList students={students} />
                    )}
                </div>
            </main>

            <footer className="py-12 border-t border-gray-100 dark:border-gray-800 mt-12">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400 text-sm font-medium">
                        &copy; 2024 EduManager Pro. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}