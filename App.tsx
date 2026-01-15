
import React, { useState } from 'react';
import { COURSE_INFO, CHAPTERS } from './constants';
import CourseCard from './components/CourseCard';
import { Chapter } from './types';

const App: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter>(CHAPTERS[0]);

  return (
    <div className="max-w-[1400px] mx-auto py-12 px-6 lg:px-12 min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 border-b border-gray-200 pb-12">
        <div className="lg:col-span-8">
          <div className="flex gap-4 mb-6">
            <span className="px-3 py-1 bg-gray-800 text-white text-[10px] tracking-widest uppercase rounded-full">
              {COURSE_INFO.type}
            </span>
            <span className="px-3 py-1 border border-gray-300 text-gray-600 text-[10px] tracking-widest uppercase rounded-full">
              CODE: {COURSE_INFO.code}
            </span>
          </div>
          <h1 className="serif-font text-6xl md:text-8xl font-bold text-gray-900 leading-none mb-8 tracking-tighter">
            MOST <br /> GROW <span className="italic font-light">Digital</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {COURSE_INFO.name} — <span className="italic serif-font">{COURSE_INFO.objective}</span>
          </p>
        </div>
        
        <div className="lg:col-span-4 flex flex-col justify-end items-end text-right">
          <div className="mb-4">
            <h2 className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase mb-2">Prerequisites</h2>
            <p className="text-sm font-medium text-gray-800">{COURSE_INFO.prerequisites.join(' / ')}</p>
          </div>
          <div>
            <h2 className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase mb-2">Credits / Semester</h2>
            <p className="text-sm font-medium text-gray-800">{COURSE_INFO.credits} — 第5学期</p>
          </div>
        </div>
      </header>

      {/* Chapter Selection Grid */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="serif-font text-4xl font-bold mb-2">课程大纲体系</h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase">Chapters Overview</p>
          </div>
          <div className="hidden md:block w-1/2 h-[1px] bg-gray-200 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CHAPTERS.map((chapter) => (
            <CourseCard 
              key={chapter.id} 
              chapter={chapter} 
              active={selectedChapter.id === chapter.id}
              onClick={() => setSelectedChapter(chapter)}
            />
          ))}
        </div>
      </section>

      {/* Details Display - Interactive Section */}
      <section className="bg-white magazine-shadow rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 lg:p-20 border-r border-gray-100">
          <div className="mb-12">
            <span className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">Selected Module</span>
            <h2 className="serif-font text-5xl font-bold mt-4 mb-2">{selectedChapter.title}</h2>
            <p className="text-sm text-gray-500 italic">授课学时：{selectedChapter.hours} 小时</p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xs tracking-widest font-bold text-gray-900 uppercase mb-4 border-b border-gray-100 pb-2">
                教学重点 (Focus)
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">{selectedChapter.focus}</p>
            </div>

            <div>
              <h3 className="text-xs tracking-widest font-bold text-gray-900 uppercase mb-4 border-b border-gray-100 pb-2">
                难点挑战 (Difficulty)
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">{selectedChapter.difficulty}</p>
            </div>

            <div className={`p-6 rounded-sm border-l-4 border-gray-800 transition-colors ${selectedChapter.movieUrl ? 'bg-gray-100 hover:bg-gray-200 cursor-pointer group/ideology' : 'bg-gray-50'}`}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xs tracking-widest font-bold text-gray-900 uppercase">
                  课程思政 (Civic Education)
                </h3>
                {selectedChapter.movieUrl && (
                  <span className="text-[10px] text-gray-400 font-bold group-hover/ideology:text-gray-800 transition-colors">
                    点击赏析 ➔
                  </span>
                )}
              </div>
              {selectedChapter.movieUrl ? (
                <a 
                  href={selectedChapter.movieUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm italic decoration-gray-400 hover:underline"
                >
                  "{selectedChapter.ideology}"
                </a>
              ) : (
                <p className="text-gray-600 text-sm italic">"{selectedChapter.ideology}"</p>
              )}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col p-12 lg:p-20 bg-gray-50">
          <div className="absolute top-0 right-0 p-8">
             <span className="text-[6rem] leading-none font-bold text-gray-100 serif-font select-none">
              0{selectedChapter.id}
             </span>
          </div>

          <div className="relative z-10">
            <h3 className="text-xs tracking-widest font-bold text-gray-900 uppercase mb-8 border-b border-gray-200 pb-2">
              基本要求 (Requirements)
            </h3>
            <p className="serif-font text-2xl text-gray-800 leading-relaxed mb-12">
              {selectedChapter.requirements}
            </p>

            <h3 className="text-xs tracking-widest font-bold text-gray-900 uppercase mb-6">
              核心内容 (Outline)
            </h3>
            <ul className="space-y-4">
              {selectedChapter.content.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-16 flex justify-between items-center text-[10px] text-gray-400 font-bold tracking-widest uppercase">
            <span>Digital Media Arts</span>
            <span>Third Year / Semester 5</span>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="mt-24 border-t border-gray-200 pt-12 text-center">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
           <div className="text-left">
              <h4 className="text-[10px] tracking-widest text-gray-400 uppercase font-bold mb-1">考核方式</h4>
              <p className="text-xs text-gray-700">期末大作业考查</p>
           </div>
           <div className="text-left">
              <h4 className="text-[10px] tracking-widest text-gray-400 uppercase font-bold mb-1">评分权重</h4>
              <p className="text-xs text-gray-700">期末(40%) + 平时(60%)</p>
           </div>
           <div className="text-left">
              <h4 className="text-[10px] tracking-widest text-gray-400 uppercase font-bold mb-1">推荐教材</h4>
              <p className="text-xs text-gray-700">《视听语言》周振华 / 《电影剪辑技巧》卡雷尔·赖兹</p>
           </div>
        </div>
        <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase">
          PERHAPS BEST / FILM LANGUAGE & EDITING
        </p>
      </footer>
    </div>
  );
};

export default App;
