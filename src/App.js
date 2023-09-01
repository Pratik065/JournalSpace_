import logo from './logo32.png';
import logo3 from './logo3.jpg';
import './App.css';

function App() {
  return (

    <div className="App">
      <div class="body">
        <div class="header">
          <link rel="stylesheet" type="text/css" href="App.css" />



          <div class="search-container">

            <input type="text" class="search-input" placeholder="Search..." />
            <button class="search-button">Search</button>

          </div>
          <div class="header">

            <div class="left">

              <img src={logo} alt="Error Loading Image" />
            </div>

            <div class="right">
              <button class="btn">Log in</button>
              <button class="btn">Register</button>


            </div>

            <div class="mid">

            </div>
            <div class="rightnav">
              <ul class="navbar">
                <li><a href="#">Home</a> </li>
                <li><a href="#">Journals</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <section class="whats-new">
          <h2>What's New</h2>
          <div class="news-list">
            <div class="news-item">
            <img src={logo3} alt="News Image" />
              <div class="news-content">
                <h3>Exciting Feature Release</h3>
                <p>Introducing our latest feature that will revolutionize the way you work.</p>
                <a href="#" class="read-more">Read More</a>
              </div>
            </div>
            <div class="news-item">
              <img src={logo3} alt="News Image" />
              <div class="news-content">
                <h3>New Product Launch</h3>
                <p>Discover our brand new product designed to meet your needs.</p>
                <a href="#" class="read-more">Read More</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
