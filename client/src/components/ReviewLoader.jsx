const ReviewLoader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-auto p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md text-center">

        {/* Spinner */}
        <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 animate-spin rounded-full border-4 border-gray-700 border-t-white" />

        <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white">
          Reviewing your code...
        </h2>

        <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-400">
          AI is analyzing your code for bugs, security,
          performance and best practices.
        </p>

      </div>
    </div>
  );
};

export default ReviewLoader;
