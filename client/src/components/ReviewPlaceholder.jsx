const ReviewPlaceholder = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-auto p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md text-center">

        {/* Icon */}
        <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-gray-800 bg-gray-900">
          <span className="text-3xl sm:text-4xl">🤖</span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold leading-tight text-white">
          Ready to Review Your Code
        </h2>

        {/* Description */}
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-400">
          Paste your code in the editor and click{" "}
          <span className="font-medium text-white">
            Review Code
          </span>{" "}
          to get an AI-powered code analysis.
        </p>

        {/* Features */}
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2">
          <span className="rounded-full border border-gray-800 bg-gray-900 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs text-gray-400">
            🐛 Bugs
          </span>

          <span className="rounded-full border border-gray-800 bg-gray-900 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs text-gray-400">
            🔒 Security
          </span>

          <span className="rounded-full border border-gray-800 bg-gray-900 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs text-gray-400">
            ⚡ Performance
          </span>

          <span className="rounded-full border border-gray-800 bg-gray-900 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs text-gray-400">
            ✨ Code Quality
          </span>
        </div>

      </div>
    </div>
  );
};

export default ReviewPlaceholder;
