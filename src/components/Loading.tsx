export function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <h1 className="text-white text-2xl font-bold">Poder Paz</h1>
      </div>
    </div>
  );
}
