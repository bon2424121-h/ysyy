
import React from 'react';
import { Chapter } from '../types';

interface CourseCardProps {
  chapter: Chapter;
  active: boolean;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ chapter, active, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative group cursor-pointer transition-all duration-500 overflow-hidden bg-white ${active ? 'ring-2 ring-gray-800 scale-[1.02]' : 'hover:scale-[1.01]'}`}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={chapter.image} 
          alt={chapter.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-baseline mb-4">
          <span className="text-xs tracking-widest text-gray-400 font-bold">CHAPTER 0{chapter.id}</span>
          <span className="text-xs text-gray-500 italic">{chapter.hours} 学时</span>
        </div>
        
        <h3 className="serif-font text-2xl mb-4 font-bold text-gray-900 group-hover:text-gray-700">
          {chapter.title}
        </h3>
        
        <div className="space-y-2 mb-6">
          {chapter.content.slice(0, 3).map((item, idx) => (
            <p key={idx} className="text-xs text-gray-600 border-l border-gray-200 pl-3">
              {item}
            </p>
          ))}
          {chapter.content.length > 3 && <p className="text-[10px] text-gray-400 pl-3">...</p>}
        </div>

        <button className="text-[10px] tracking-widest uppercase border-b border-gray-800 pb-1 font-bold hover:text-gray-500 transition-colors">
          View Syllabus Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
