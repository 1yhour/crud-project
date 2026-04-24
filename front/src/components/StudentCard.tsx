import { Student } from "@/types";

interface StudentCardProps {
    student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
    return (
        <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                    {student.name.charAt(0)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    ID: {student.id}
                </span>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {student.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                {student.email}
            </p>

            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">
                        Enrollments
                    </h3>
                    <span className="text-[10px] font-medium text-gray-400 italic">
                        {student.courses.length} courses
                    </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {student.courses.length > 0 ? (
                        student.courses.map((course) => (
                            <div 
                                key={course.id} 
                                className="px-3 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors cursor-default"
                                title={course.description}
                            >
                                {course.name}
                            </div>
                        ))
                    ) : (
                        <div className="w-full py-3 text-center rounded-lg border border-dashed border-gray-200 dark:border-gray-800 text-xs text-gray-400 italic">
                            No active enrollments
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
