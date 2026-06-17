import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Product Management System</h1>

      <p>Manage your products efficiently using React, Express and MongoDB.</p>

      <div className="feature-box">
        <h3>Features</h3>

        <ul>
          <li>Create Products</li>
          <li>View Products</li>
          <li>Update Products</li>
          <li>Delete Products</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
