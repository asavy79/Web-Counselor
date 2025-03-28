interface CourseCardProps {
    code: string;
    name: string;
    credits: number;
    description?: string;
    isSelected?: boolean;
    isPrerequisite?: boolean;
    onSelect?: () => void;
}

export function CourseCard({ code, name, credits, isSelected, isPrerequisite, onSelect }: CourseCardProps) {
    return (
        <div 
            className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow ${
                isSelected ? 'ring-2 ring-blue-500' : ''
            } ${isPrerequisite ? 'bg-yellow-50' : ''}`}
            onClick={onSelect}
            role="button"
            tabIndex={0}
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {code}: {name}
                    </h3>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {credits} credits
                </span>
            </div>
        </div>
    );
} 