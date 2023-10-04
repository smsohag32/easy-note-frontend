const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Error {errorCode}
        </h1>
        <p className="text-lg text-gray-700">{errorMessage}</p>
        <p className="text-gray-700 mt-2">
          Oops! Something went wrong. Please try again later.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
