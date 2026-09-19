const ReviewPlaceholder = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="max-w-md text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-800 bg-gray-900">
          <span className="text-4xl">🤖</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white">
          Ready to Review Your Code
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-400">
          Paste your code in the editor and click{" "}
          <span className="font-medium text-white">
            Review Code
          </span>{" "}
          to get an AI-powered code analysis.
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1.5 text-xs text-gray-400">
            🐛 Bugs
          </span>

          <span className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1.5 text-xs text-gray-400">
            🔒 Security
          </span>

          <span className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1.5 text-xs text-gray-400">
            ⚡ Performance
          </span>

          <span className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1.5 text-xs text-gray-400">
            ✨ Code Quality
          </span>
        </div>

      </div>
    </div>
  );
};

export default ReviewPlaceholder;