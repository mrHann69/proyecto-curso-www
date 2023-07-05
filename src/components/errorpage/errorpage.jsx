function ErrorPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        backgroundColor: "#F0F0F0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "700px",
          height: "300px",
          backgroundColor: "aquamarine",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <span>
            <h1>404 - Not found</h1>
          </span>
          <span>
            <h3>route not found</h3>
          </span>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
