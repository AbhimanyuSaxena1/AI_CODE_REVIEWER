import { useState } from "react";

const ReviewResult = ({ review }) => {
  
  if (!review) {

    return <>

    </>;
  }

  // Severity ke according classes
  const getSeverityClasses = (severity) => {
    switch (severity?.toLowerCase()) {
      case "critical":
        return {
          badge: "bg-red-500/15 text-red-400 border-red-500/30",
          border: "border-red-500/40",
        };

      case "high":
        return {
          badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
          border: "border-orange-500/40",
        };

      case "medium":
        return {
          badge: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
          border: "border-yellow-500/40",
        };

      case "low":
        return {
          badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
          border: "border-blue-500/40",
        };

      default:
        return {
          badge: "bg-gray-500/15 text-gray-400 border-gray-500/30",
          border: "border-gray-700",
        };
    }
  };

  return (
    <div className="mt-8 overflow-auto h-full w-full space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Code Review
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          AI-powered analysis of your code
        </p>
      </div>

      {/* Summary */}
      {review.summary && (
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Summary
          </h3>

          <p className="text-sm leading-6 text-gray-400">
            {review.summary}
          </p>
        </div>
      )}

      {/* Issues */}
      <section>
        {review?.issues?.length === 0 ? (
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-5">
            <p className="font-medium text-green-400">
              ✓ No issues found
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Your code looks good based on this review.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {review?.issues?.map((issue, index) => {
              const styles = getSeverityClasses(issue.severity);

              return (
                <div
                  key={index}
                  className={`rounded-xl border bg-gray-900 p-5 ${styles.border}`}
                >

                  {/* Issue Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <div className="flex items-center gap-3">

                      {/* Severity */}
                      <span
                        className={`rounded-md border px-3 py-1 text-xs font-bold uppercase ${styles.badge}`}
                      >
                        {issue.severity}
                      </span>

                      {/* Title */}
                      <h4 className="font-semibold text-white">
                        {issue.title}
                      </h4>

                    </div>

                    {/* Line */}
                    {issue.line > 0 && (
                      <span className="rounded-md bg-gray-800 px-3 py-1 text-xs text-gray-400">
                        Line {issue.line}
                      </span>
                    )}

                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <p className="text-sm leading-6 text-gray-300">
                      {issue.description}
                    </p>
                  </div>

                  {/* Suggestion */}
                  <div className="mt-4 rounded-lg border border-gray-800 bg-gray-950 p-4">

                    <p className="mb-2 text-sm font-semibold text-white">
                      💡 Suggested Fix
                    </p>

                    <p className="text-sm leading-6 text-gray-400">
                      {issue.suggestion}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>
        )}
      </section>

      {/* Security */}
      {review?.security?.length > 0 && (
        <section className="rounded-xl border border-red-500/30 bg-gray-900 p-6">

          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl">
              🔒
            </span>

            <h3 className="text-lg font-semibold text-white">
              Security
            </h3>
          </div>

          <div className="space-y-3">

            {review.security.map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-red-500/10 p-4 text-sm text-gray-300"
              >
                {typeof item === "string"
                  ? item
                  : item.description || JSON.stringify(item)}
              </div>
            ))}

          </div>

        </section>
      )}

      {/* Performance */}
      {review?.performance?.length > 0 && (
        <section className="rounded-xl border border-yellow-500/30 bg-gray-900 p-6">

          <div className="mb-4 flex items-center gap-2">

            <span className="text-xl">
              ⚡
            </span>

            <h3 className="text-lg font-semibold text-white">
              Performance
            </h3>

          </div>

          <div className="space-y-3">

            {review.performance.map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-yellow-500/10 p-4 text-sm text-gray-300"
              >
                {typeof item === "string"
                  ? item
                  : item.description || JSON.stringify(item)}
              </div>
            ))}

          </div>

        </section>
      )}

      {/* Improved Code */}
      {review?.improvedCode && (
        <section className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">

            <div className="flex items-center gap-2">

              <span>
                ✨
              </span>

              <h3 className="font-semibold text-white">
                Improved Code
              </h3>

            </div>

            {/* Copy */}
            <button
              onClick={() =>
                navigator.clipboard.writeText(review.improvedCode)
              }
              className="rounded-md bg-gray-800 px-3 py-1.5 text-sm text-gray-300 transition hover:bg-gray-700"
            >
              Copy
            </button>

          </div>

          {/* Code */}
<pre className="code-scrollbar max-h-[500px] overflow-auto bg-gray-950 p-6 text-sm leading-6">
            <code className="text-gray-300">
              {review.improvedCode}
            </code>

          </pre>

        </section>
      )}

    </div>
  );
};

export default ReviewResult;