const ReviewLoader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="text-center">

        {/* Spinner */}
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-white" />

        <h2 className="mt-6 text-xl font-semibold text-white">
          Reviewing your code...
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          AI is analyzing your code for bugs, security,
          performance and best practices.
        </p>

      </div>
    </div>
  );
};

export default ReviewLoader;