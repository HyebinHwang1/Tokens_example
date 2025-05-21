"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-10 gap-3 text-2xs">
      <label
        htmlFor="date-input"
        className="relative w-full border border-gray-300 rounded-md cursor-pointer flex items-center"
      >
        <div className="p-2 flex-1">날짜를 선택하세요</div>
        <input type="date" className="h-full cursor-pointer" id="date-input" />
      </label>
    </div>
  );
}
