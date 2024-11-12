export const Description = () => {
  return (
    <div className="wrapper container form-body">
      <h1 className="form-title">Phonebook</h1>
      <p style={{ marginBottom: "20px" }}>
        Phonebook is a single-page application designed to manage personal
        contacts efficiently. Users can create an account, log in, and securely
        access their personalized contact list. The app allows users to add,
        update, and delete contac ts, offering an intuitive way to organize and
        keep track of important contacts.
      </p>

      <h3>Features:</h3>
      <ul style={{ marginBottom: "20px" }}>
        <li> - User authentication for secure access</li>
        <li> - Contact creation, updating, and deletion</li>
      </ul>

      <h3>Tech Stack:</h3>
      <ul style={{ marginBottom: "20px" }}>
        <li>
          <strong>Frontend:</strong> React, Redux (for state management)
        </li>
        <li>
          <strong>Routing:</strong> React Router
        </li>
        <li>
          <strong>Authentication:</strong> JSON Web Tokens (JWT) for secure
          login sessions
        </li>
      </ul>
      <p>
        <b>Please, use the navigation bar above to test this application</b>
      </p>
    </div>
  );
};
